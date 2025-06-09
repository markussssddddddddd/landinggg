import React from "react";
import { Icon } from '@iconify/react';

// Цветная иконка торта
const cakeIcon = <Icon icon="twemoji:shortcake" width="120" />
// Цветная иконка круассана
const croissantIcon = <Icon icon="twemoji:croissant" width="120" />
// Цветная иконка хлеба
const breadIcon = <Icon icon="twemoji:bread" width="120" />

const icons = [
  cakeIcon,
  croissantIcon,
  breadIcon
];

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>ПОЧЕМУ?!</h2>
          <p>
            НАША ВЫПЕЧКА ТАКАЯ ВУСНАЯ 
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-md-4 service-card"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <div style={{ marginBottom: 32 }}>{icons[i % icons.length]}</div>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
      <style>{`
        .service-card {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.7s forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: none;
          }
        }
        .slider-btn {
           box-shadow: none;  /* убирает тень кнопки */
        }
      `}</style>
    </div>
  );
};
