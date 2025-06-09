import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(name, email, message);

  emailjs
    .sendForm("service_x3o4gub", "template_t0egmnh", e.target, "8YmMLvBkUYo07tNqC")
    .then(
      (result) => {
        console.log(result.text);
        clearState();
      },
      (error) => {
        console.log(error.text);
      }
    );
};
return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Нам важно не просто мнение!</h2>
                <p>
                  нам важны ваши ощущения. Если у вас остались впечатления, идеи или жеание создать что-то вместе - дайте знать. Мы всегда открыты для диаога, отзывов и вдохновляющих предложений"
                </p>
              </div>
              <form Name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Ваше имя"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Место для ваших слов"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Отправить!
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Контакты</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Адрес
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Телефон
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "https://www.instagram.com/papapek.by?igsh=MTRodzg3bzI4eThudA=="}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
                <p>
                  &copy; 2025 krupinova daria 0-0
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
