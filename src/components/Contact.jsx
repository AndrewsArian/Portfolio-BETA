import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { toast } from "react-hot-toast";
import Map from "./Map";
// import Map2 from "./Map2";
import axios from "axios";
import { useLoading } from "../hooks/app";

const Contact = () => {

  const cotactInfoData = [
    {
      icon: "la la-map-marker",
      name: "address",
      text: "Buenos Aires, Argentina",
    },
    {
      icon: "la la-at",
      name: "email",
      text: "ariandanielgoicochea@gmail.com",
    },
    
    {
      icon: "la la-check-square",
      name: "Open to Work",
      text: "available",
    },
  ];

  const { isLoading, setLoading } = useLoading();
  const [formLoading, setFormLoading] = useState(false)
  const [fields, setFields] = useState({
    name: '',
    email: '',
    message: '',
  });


  useEffect(() => {
    if (isLoading) {
      setLoading(false);
    }
  }, [isLoading, setLoading]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormLoading(true);

    const myPromise = axios.post(e.target.action, fields, {
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      setFields({
        name: '',
        email: '',
        message: '',
      });
    }).catch(err => {

      if (err.response && err.response.data) {
        const errors = err.response.data.errors;
        if (errors) {
          errors.forEach(error => {
            toast.error("Faild: " + error["message"]);
          })
        }
      }
    }).then(function () {
      setFormLoading(false);
    });

    toast.promise(myPromise, {
      loading: 'Loading',
      success: 'Thanks for your submission!',
      error: 'Oops! There was a problem submitting your form',
    });
  };

  return (
    <>
      <ContactStyled>
        {/* //  {<!--  Card - Contacts -->} */}
        <div className="card-inner active" id="contacts-card">
          <div className="row card-container">
            {/* <!-- 	Card Wrap --> */}
            <div
              className="card-wrap col col-m-12 col-t-12 col-d-8 col-d-lg-6"
              data-simplebar
            >
              {/* <!-- Map --> */}
              <div className="card-image col col-m-12 col-t-12 col-d-4 col-d-lg-6">
                <div className="map" id="map">
                  <Map />
                </div>
              </div>

              {/* <!-- Inner Top --> */}
              <div className="content inner-top">
                <div className="row">
                  <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                    <div className="title-bg">Contacts</div>
                  </div>
                </div>
              </div>

              {/* <!-- Contacts Info --> */}
              <div className="content contacts-info">
                <div className="row">
                  <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                    {/* <!-- title --> */}
                    <div className="title">
                      <span>Get</span> in Touch
                    </div>
                  </div>
                </div>

                {/* <!-- contacts items --> */}
                <div className="row contacts-items">
                  {/* <!-- contacts item --> */}
                  {cotactInfoData.map(({ icon, name, text }, index) => {
                    return (
                      <div
                        className="col col-m-12 col-t-6 col-d-6 col-d-lg-6"
                        key={index}
                      >
                        <div className="contacts-item card-box">
                          <div className="icon">
                            <i className={icon}></i>
                          </div>
                          <div className="name">{name}</div>
                          <p>{text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/*<!-- Contacts Form --> */}
              <div className="content contacts-form">
                <div className="row">
                  <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                    {/* <!-- title --> */}
                    <div className="title">
                      <span>Contact</span> Form
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                    {/* <!-- form --> */}
                    <div className="contact_form card-box"  >
                      <form action="https://formspree.io/f/xzbweknb" onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col col-m-12 col-t-6 col-d-6 col-d-lg-6">
                            <div className="group-val">
                              <input
                                type="text"
                                name="name"
                                value={fields.name}
                                onChange={e => setFields({ ...fields, name: e.target.value })}
                                placeholder="Full Name"
                                disabled={formLoading}
                                required
                              />
                            </div>
                          </div>
                          <div className="col col-m-12 col-t-6 col-d-6 col-d-lg-6">
                            <div className="group-val">
                              <input
                                type="text"
                                name="email"
                                value={fields.email}
                                onChange={e => setFields({ ...fields, email: e.target.value })}
                                placeholder="Email Address"
                                disabled={formLoading}
                                required
                              />
                            </div>
                          </div>
                          <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                            <div className="group-val">
                              <textarea
                                name="message"
                                value={fields.message}
                                onChange={e => setFields({ ...fields, message: e.target.value })}
                                placeholder="Your Message"
                                disabled={formLoading}
                                required
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div className="align-left">
                          <button className="buton" disabled={formLoading} type="submit">
                            <span className="text">Send Message</span>
                            <span className="icon">
                              <i className="la la-arrow-right"></i>
                            </span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContactStyled>
    </>
  );
};

export default Contact;

const ContactStyled = styled.div`
  form {
    display: block;
  }
  .alert-success {
    display: none;
  }
  .active-alert {
    form {
      display: none;
    }
    .alert-success {
      display: block;
    }
  }
`;
