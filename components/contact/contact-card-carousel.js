import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import cardBg from "../../assets/images/shapes/contact-card-bg-1-1.png";

const ContactCardCarousel = () => {
  const swiperOptions = {
    spaceBetween: 30,
    slidesPerView: 3,
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1
      },
      480: {
        spaceBetween: 0,
        slidesPerView: 1
      },
      767: {
        spaceBetween: 30,
        slidesPerView: 2
      },
      1199: {
        spaceBetween: 30,
        slidesPerView: 3
      }
    }
  };
  return (
    <div className="contact-card-carousel ">
      <div className="container">
        <Swiper {...swiperOptions}>
          <SwiperSlide>
            <div
              className="contact-card d-flex flex-column text-center justify-content-center align-items-center background-secondary"
              style={{ backgroundImage: `url(${cardBg})` }}
            >
              <i aria-label="contact icon" className="azino-icon-family"></i>
              <h3>Om</h3>
              <p>
              Green Plank -produkter bruges af mange svenskere <br />kommuner i hele Sverige
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="contact-card d-flex flex-column text-center justify-content-center align-items-center background-primary"
              style={{ backgroundImage: `url(${cardBg})` }}
            >
              <i aria-label="contact icon" className="azino-icon-address"></i>
              <h3>Adresse</h3>
              <p>
              Sadelgatan 9, SE-213 77<br />  Malmö,{" "}
                <br />  Sweden.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="contact-card d-flex flex-column text-center justify-content-center align-items-center background-special"
              style={{ backgroundImage: `url(${cardBg})` }}
            >
              <i aria-label="contact icon" className="azino-icon-contact"></i>
              <h3>Kontakt</h3>
              <p>
                <a href="mailto:info@greenplank.dk">info@greenplank.dk</a> <br />{" "}
                <a href="tel:+46 40 450 560">+46 40 450 560</a>
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ContactCardCarousel;
