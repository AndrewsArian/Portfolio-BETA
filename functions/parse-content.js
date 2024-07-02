const fs = require('fs')
const path = require('path')
const glob = require('glob')
const yaml = require('js-yaml');
var slug = require('slug')

const regexMd = /^(---(?:\r?\n(?!--|\s*$).*)*)\s*((?:\r?\n(?!---).*)*\r?\n---)/gm
let store = [];
let page_num = 1;
let next = false;

// read all file in post files
// options is optional
glob(`${process.cwd()}/_posts/*.md`, function (er, files) {
  // files is an array of filenames.
  const filelenght = files.length;
  files.forEach((file, key) => {
    fs.readFile(file, function (err, data) {

      if (err) {

      } else {

        //next
        if (key + 1 < filelenght) {
          next = true;
        } else {
          next = false;
        }

        readme(data.toString());
        if (filelenght === key + 1) {
          // ensure
          savePage();
        }
      }
    });
  });
});

/**
 * Read and pasing markdown file
 * 
 * @param {*} content 
 */
const readme = (content) => {

  var data = [];

  var metakey = content.match(regexMd);
  content = content.replace(regexMd, '');

  if (metakey && metakey[0]) {
    metakey = yaml.loadAll(metakey[0].replace(/'---'/g, ''));
    if (metakey && metakey[0]) {
      data = metakey[0];
      data.slug = slug(metakey[0].title)
      data.content = content;

      // save single post
      saveSinglePost(data);

      delete data.content;
    }
  }

  if (store.length < 16) {
    store.push(data);
  } else {

    savePage();
    store = [];
    store.push(data);
    page_num++;
  }
};

/**
 * save post .json file
 */
const savePage = () => {

  let path = `${process.cwd()}/public/api/blog/${page_num}.json`;

  if (store.length) {

    var paginate = {
      next: next,
      current: page_num,
      prev: page_num !== 1
    };

    fs.writeFileSync(path, JSON.stringify({ item : store, paginate }, null, 2))
  }
}


const saveSinglePost = (data) => {

  if (data && data.slug) {

    let path = `${process.cwd()}/public/api/posts/${data.slug}.json`;
    fs.writeFileSync(path, JSON.stringify(data, null, 2))
  }

}
