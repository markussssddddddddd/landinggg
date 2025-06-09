import React from "react";

// Массив SVG-иконок (можно заменить на любые другие)
const icons = [
  // Грузовик
  (
    <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
      <rect x="4" y="14" width="28" height="16" rx="2" fill="#F9A826"/>
      <rect x="32" y="20" width="10" height="10" rx="2" fill="#F9A826"/>
      <circle cx="12" cy="36" r="4" fill="#333"/>
      <circle cx="36" cy="36" r="4" fill="#333"/>
    </svg>
  ),
  // Коробка
  (
    <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
      <rect x="8" y="14" width="32" height="20" rx="2" fill="#F9A826"/>
      <rect x="8" y="14" width="32" height="6" fill="#FFD580"/>
      <rect x="20" y="20" width="8" height="14" fill="#fff" opacity="0.3"/>
    </svg>
  ),
  // Часы
  (
    <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
      <circle cx="24" cy="24" r="18" fill="#F9A826"/>
      <rect x="22" y="14" width="4" height="12" rx="2" fill="#fff"/>
      <rect x="24" y="24" width="8" height="4" rx="2" fill="#fff" transform="rotate(45 24 24)"/>
    </svg>
  ),
  // Карта
  (
    <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
      <path d="M24 44C24 44 40 28.5 40 19C40 11.268 33.732 5 26 5C18.268 5 12 11.268 12 19C12 28.5 24 44 24 44Z" fill="#F9A826"/>
      <circle cx="24" cy="19" r="5" fill="#fff"/>
    </svg>
  ),
];

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Доставка</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  <div style={{marginBottom: 16}}>{icons[i % icons.length]}</div>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
