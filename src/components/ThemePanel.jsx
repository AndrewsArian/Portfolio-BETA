import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const ThemePanel = ({ is_rtl }) => {

  let history = useHistory();

  useEffect(() => {
    // remove all theme color
    document.querySelectorAll("link[href*='rtl.css']")
      .forEach(element => element.remove());

    if (is_rtl) {

      /**
       * assign a new stylesheet
       */
      var head = document.getElementsByTagName('head')[0],
        style = document.createElement('link');
      style.rel = 'stylesheet';
      style.href = "/css/rtl.css";

      /**
       * appendChild
       */
      head.appendChild(style);
    }
  }, [is_rtl]);


  const handleHtmlDir = (dir) => {
    if (dir === 'rtl') {
      let href = window.location.pathname.replace('-rtl', '');
      history.push(href+"-rtl");
    } else {
      let href = window.location.pathname.replace('-rtl', '');
      history.push(href);
    }

  }


  const layoutStyleData = [
    {
      title: "theme-green",
      Data_color: "green",
      background: "#5ac24e",
    },
    {
      title: "theme-blue",
      Data_color: "blue",
      background: "#65b4f3",
    },
    {
      title: "theme-orange",
      Data_color: "orange",
      background: "#f5a640",
    },
    {
      title: "theme-pink",
      Data_color: "pink",
      background: "#ee6192",
    },
    {
      title: "theme-purple",
      Data_color: "purple",
      background: "#bb68c8",
    },
    {
      title: "theme-red",
      Data_color: "red",
      background: "#ee534f",
    },
  ];

  const [ThemeShow, setThemeShow] = useState(false);

  /**
   * handle layout style 
   */
  const handleLayoutStyle = (Data_color) => {

    // remove all theme color
    document.querySelectorAll("link[href*='css/theme-colors/']")
      .forEach(element => element.remove());

    /**
     * assign a new stylesheet
     */
    var head = document.getElementsByTagName('head')[0],
      style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = "/css/theme-colors/" + Data_color + ".css";

    /**
     * appendChild
     */
    head.appendChild(style);
  }

  const handleThemePanel = () => {
    setThemeShow(!ThemeShow);
  };

  const handleBg = (name) => {
    // if (name === "BG Particles") {
    //   setbgParticles(true);
    //   setbgImage(true);
    // } else {
    //   setbgParticles(false);
    //   setbgImage(false);
    // }
    // if (name === "BG image") {
    //   setbgImage(true);
    // } else {
    //   setbgImage(false);
    // }
    // if (name === "BG video") {
    //   setbgvideo(true);
    // } else {
    //   setbgvideo(false);
    // }
    // if (name === "BG color") {
    //   setbgColor(true);
    // } else {
    //   setbgColor(false);
    // }
  };

  let themePanelClass = "theme_panel";

  if (!ThemeShow) {
    themePanelClass += " active";
  }

  if (is_rtl) {
    themePanelClass += " left";
  }

  // `${!ThemeShow ? "theme_panel active" : "theme_panel"}`

  return (
    <>
      <div className={themePanelClass}>
        <div className="toggle_bts" onClick={handleThemePanel}>
          <a className="toggle-theme-panel" href="#theme_panel" onClick={(e) => e.preventDefault()}>
            <i className="icon la la-gear"></i>
          </a>
        </div>
        <div className="theme_menu">

          <h4>Color Switcher</h4>
          <div className="segment">
            <ul className="theme layout_style">
              {layoutStyleData.map(
                ({ title, Data_color, background }, index) => {
                  return (
                    <li key={index}>
                      <a
                        title={title}
                        href="#change_background_style"
                        onClick={() => handleLayoutStyle(Data_color)}
                        data-color={Data_color}
                        style={{ backgroundColor: `${background}` }}
                      >&nbsp;</a>
                    </li>
                  );
                }
              )}
            </ul>
          </div>

          <div className="clear"></div>
          <h4>RTL/LTR Version</h4>
          <ul className="theme demo_list">
            <li style={{ width: "50%" }}>
              <Link to="/home-rtl" onClick={(e) => {e.preventDefault(); handleHtmlDir('rtl')}}>
                <strong>RTL</strong>
              </Link>
            </li>
            <li style={{ width: "50%" }}>
              <Link to="/" onClick={(e) => {e.preventDefault(); handleHtmlDir('ltl')}}>
                <strong>LTL</strong>
              </Link>
            </li>
          </ul>

          <div className="clear"></div>
          <h4>Background Demos</h4>
          <ul className="theme demo_list">
            <li style={{ width: "50%" }}>
              <Link
                to="home"
                onClick={() => handleBg('BG Image')}
                style={{ cursor: "pointer" }}
              >
                <strong>BG Image</strong>
              </Link>
            </li>
            <li style={{ width: "50%" }}>
              <Link
                to="home-video"
                onClick={() => handleBg('BG Video')}
                style={{ cursor: "pointer" }}
              >
                <strong>BG Video</strong>
              </Link>
            </li>
            <li style={{ width: "50%" }}>
              <Link
                to="home-particles"
                onClick={() => handleBg('BG Particles')}
                style={{ cursor: "pointer" }}
              >
                <strong>BG Particles</strong>
              </Link>
            </li>
            <li style={{ width: "50%" }} >
              <Link
                to="home-bgcolor"
                onClick={() => handleBg('BG Color')}
                style={{ cursor: "pointer" }}
              >
                <strong>BG Color</strong>
              </Link>
            </li>
          </ul>

          <div className="clear"></div>
          <a href="https://themeforest.net/" target="_blank" rel="noreferrer" className="buy-btn">
            <i className="ion ion-android-cart"></i>Buy Template
          </a>
        </div>
      </div>
    </>
  );
};

export default ThemePanel;

// const ThemePanelStyled = styled.div`
//   button {
//     padding: 0;
//     border: none;

//     &:hover {
//       border: none;
//     }
//   }
// `;
