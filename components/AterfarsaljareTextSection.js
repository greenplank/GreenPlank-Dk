import React, { useState } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Byggochfix from "../assets/images/backgrounds/byggochfix.jpg";
import Ebygghandel from "../assets/images/backgrounds/ebygghandel.webp";

const AterfarsaljareTextSection = () => {
  return (
    <section className=" text-center pt-120 pb-120">
      <Container>
        <div className="text-center block-title">
          <h5>
            Find en Green Plank naturlig fiber distributører i danmark til
            sammensatte produkter, der er tættest på dig. Lær, hvor du kan købe
            Green Plank ornamenter, hegn, beklædningsmaterialer og de
            forsyninger, du har brug for til at gennemføre dit nye projekt.
          </h5>
        </div>
        <div>
          <Container>
            <Row>
              {/* <Col md={3} xs={6}>
                                <a href="https://byggochfix.se/">
                                    <div className="mt-20 mb-20">
                                        <div className="mt-20 text-center">
                                        <img src={Byggochfix} alt="Byggochfix" />
                                        </div>
                                    </div>
                                </a>
                            </Col>
                            <Col md={3} xs={6}>
                                <a href="https://ebygghandel.se">
                                    <div className="mt-20 mb-20">
                                        <div className="mt-20 text-center">
                                        <img src={Ebygghandel} alt="Ebygghandel" />
                                        </div>
                                    </div>
                                </a>
                            </Col> */}
              <Col md={3} xs={6}>
                <a href="https://byggochfix.se/">
                  <div className="mt-20 mb-20">
                    <div className="mt-20 text-center">
                      <h4 className="title">
                        <b>Stark is distributor</b>
                      </h4>
                    </div>
                  </div>
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </section>
  );
};

export default AterfarsaljareTextSection;
