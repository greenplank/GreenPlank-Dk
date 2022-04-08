import React from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { Container, Row, Col } from "react-bootstrap";
import vilma from "../assets/images/vilma-1-200x200.png";
import sundahus from "../assets/images/sundahus-1-200x200.png";


const Footer = () => {
  return (
    <section className="site-footer">
      <div className="main-footer pt-142 pb-80">
        <Container>
          <Row>
            <Col lg={2} md={6} sm={12}>
              <div className="footer-widget footer-widget__link mb-40">
                <h3 className="footer-widget__title">KUNDE SERVICE</h3>
                <ul className="list-unstyled" >
                  <li>
                    <Link href="/distributorer" >
                      <a style={{color:"white"}}>Distributører</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/find-installator" >
                      <a style={{color:"white"}}>Find installatør</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/salgsbetingelser">
                      <a style={{color:"white"}}>Salgsbetingelser</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/fortrolighedspolitik">
                      <a style={{color:"white"}}>Fortrolighedspolitik</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/betingelser-for-brug">
                      <a style={{color:"white"}}>Betingelser for brug                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 </a>
                    </Link>
                  </li>
                  
                </ul>
              </div>
            </Col>
            <Col lg={2} md={6} sm={12}>
              <div className="footer-widget footer-widget__link mb-40">
                <h3 className="footer-widget__title">CORPORATE INFO</h3>
                <ul className="list-unstyled" >
                  <li>
                    <Link href="/om-oss" >
                      <a style={{color:"white"}}>Om Oss</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/karriar">
                      <a style={{color:"white"}}>Karriar</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/bliv-distributor">
                      <a style={{color:"white"}}>Bliv distributør</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/bliv-en-gron-installator">
                      <a style={{color:"white"}}>Bliv en grøn installatør</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/rengoring">
                      <a style={{color:"white"}}>Rengøring</a>
                    </Link>
                  </li>
                  
                </ul>
              </div>
            </Col>
            <Col lg={2} md={6} sm={12}>
              <div className="footer-widget footer-widget__link mb-40">
                <h3 className="footer-widget__title">RESSOURCER</h3>
                <ul className="list-unstyled" >
                  <li>
                    <Link href="/installationer-og-vedligeholdelse">
                      <a style={{color:"white"}}>Installationer og vedligeholdelse</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faqs">
                      <a style={{color:"white"}}>Ofte stillede spørgsmål</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/garantier">
                      <a style={{color:"white"}}>Garantier</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/artikler">
                      <a style={{color:"white"}}>Artikler</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/alle-ressourcer">
                      <a style={{color:"white"}}>Alle ressourcer</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
   
            <Col lg={3} md={6} sm={12}>
              <div className="footer-widget mb-40 footer-widget__about">
              <h3 className="footer-widget__title">Følg os</h3>
                <ul className="list-unstyled footer-widget__contact">
                  <li>
                    <a href="tel:+46 40 450 560">
                      <i className="azino-icon-telephone"></i>+46 40 450 560
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@greenplank.dk">
                      <i className="azino-icon-email"></i>info@greenplank.dk
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://goo.gl/maps/PbFoAPxjz9atGPbW6">
                      <i className="azino-icon-pin"></i>Sadelgatan 9, SE-213 77 Malmö, Sweden
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            
            <Col lg={3} md={6} sm={12}>
              <div className="footer-widget mb-40 footer-widget__about">
              <h3 className="footer-widget__title">Certifierad</h3>
              <Row>
                  <a aria-label="logo image">
                    <img
                      src={vilma}
                      className="footer-widget__logo"
                      width="101"
                      alt=""
                    />
                  </a>
                  <a aria-label="logo image">
                    <img
                      src={sundahus}
                      className="footer-widget__logo"
                      width="101"
                      alt=""
                    />
                  </a>
                
                  </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <ScrollLink
            to="wrapper"
            smooth={true}
            duration={500}
            className="scroll-to-top"
          >
            <i className="far fa-angle-up"></i>
          </ScrollLink>
          <p>© Copyright 2020 by <a href="https://www.ecomin.se/">Ecomin.se</a></p>
          <div className="footer-social">
           
            <a href="https://www.facebook.com/GreenplankSweden" aria-label="facebook">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="https://www.instagram.com/greenplank/?hl=en" aria-label="instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com/greenplank" aria-label="twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCxWdmtRk1tZ-lbHd0zpcQ6g" aria-label="youtube">
              <i className="fab fa-youtube"></i>
            </a>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
