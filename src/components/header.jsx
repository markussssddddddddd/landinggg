import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="https://web.telegram.org/a/#7257681287"
                  className="btn btn-custom btn-lg page-scroll"
                  style={{
                    fontSize: "2.4rem", // увеличиваем шрифт
                    padding: "24px 48px", // увеличиваем отступы
                    minWidth: "260px", // увеличиваем минимальную ширину
                  }}
                >
                  Оформить заказ!
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
