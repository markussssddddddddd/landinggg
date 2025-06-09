import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const About = (props) => {
  // Массив изображений для слайдера
  const images = [
    "img/about.jpg",
    "img/about2.jpg",
    "img/about3.jpg",
    "img/about4.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Автоматическое переключение слайдов
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000); // Меняется каждые 4 секунды

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {/* Слайдер изображений */}
            <div className="image-slider">
              <div className="slider-container">
                <img
                  src={images[currentSlide]}
                  className="img-responsive slider-image"
                  alt={`Slide ${currentSlide + 1}`}
                />

                {/* Кнопки навигации */}
                <button className="slider-btn prev-btn" onClick={prevSlide}>
                  &#8249;
                </button>
                <button className="slider-btn next-btn" onClick={nextSlide}>
                  &#8250;
                </button>

                {/* Индикаторы */}
                <div className="slider-dots">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      className={`dot ${index === currentSlide ? "active" : ""}`}
                      onClick={() => goToSlide(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Мы</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Почему нас выбирают?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS стили для слайдера */}
      <style>{`
        .image-slider {
          position: relative;
          width: 100%;
          height: auto;
        }

        .slider-container {
          position: relative;
          width: 100%;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .slider-image {
          width: 100%;
          height: auto;
          display: block;
          transition: opacity 0.5s ease-in-out;
        }

        .slider-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.6);
          color: white;
          border: none;
          font-size: 24px;
          padding: 10px 15px;
          cursor: pointer;
          border-radius: 4px;
          transition: background 0.3s ease;
          z-index: 2;
        }

        .slider-btn:hover {
          background: rgba(252, 230, 230, 0.8);
        }

        .prev-btn {
          left: 10px;
        }

        .next-btn {
          right: 10px;
        }

        .slider-dots {
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 2;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid white;
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: white;
        }

        .dot:hover {
          background: rgba(255, 255, 255, 0.7);
        }

        /* Адаптивные стили */
        @media (max-width: 768px) {
          .slider-btn {
            font-size: 18px;
            padding: 8px 12px;
          }

          .prev-btn {
            left: 5px;
          }

          .next-btn {
            right: 5px;
          }

          .slider-dots {
            bottom: 10px;
          }

          .dot {
            width: 10px;
            height: 10px;
          }
        }
      `}</style>
    </div>
  );
};