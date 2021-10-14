import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";
import Grid from '@material-ui/core/Grid';

import Image11 from "../assets/images/products/innerPages/plankor/GP7241/image.webp";


import pdfimg1 from "../assets/images/projects/greenplank-brochure-title-1.jpg";
import pdfimg2 from "../assets/images/projects/pic.png";
import pdfimg3 from "../assets/images/projects/pic1.png";
import pdfimg4 from "../assets/images/projects/swedish.png";
import pdfimg5 from "../assets/images/projects/greenplank-tds-composite-technical-data-sheet-1.jpg";
import pdfimg6 from "../assets/images/projects/greenplank-composite-decking-installation-guide-1.jpg";

import Footer from "../components/footer";

const naturplankkompositplankagp7241 = () => {
  return (
    <Layout pageTitle="naturteak-kompositplank-gp7241-7236mm">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="naturteak-kompositplank-gp7241-7236mm" crumbTitle="gp7241" />
      <section className="blog-details pt-120 pb-40">
        <Container>
          <Row>
            <Col md={12} lg={12}>
              <div className="page-wrapper pt-40 pb-40">
                {/*Smart Classic section start*/}
                <div className="project-section">
                  <div className="container">
                    <div className="row">

                      {/*==============  Star Naturplank  Section-1 content ====================*/}
                      <div className="col-lg-12 col-12 mb-80 pl-30 pl-sm-15 pl-xs-15">
                        <div className="project-details">
                          <h2>
                            NATURTEAK™ – Halksäkert och tålig däck för båtar och yachter – bättre än teakdäck och pvc-plast</h2>
                          <strong>det gröna alternativet för teakträ med oändliga kreativa och designmöjligheter</strong>
                          <div class="et_pb_text_inner">
                            <div class="ce_text block">

                              <strong>Vackert realistiskt och mycket praktiskt med en tidlös kvalitet NATURTEAK ™ Komposit med naturligt fiber teakgolv för båtar och yachter är mycket fjädrande, icke-halkande, UV-stabila och ser ut som äkta teakträ. Perfekt för lyxbåtar och yachter.</strong>
                              <p>
                                Green Plank NATURTEAK ™ komposit teakbåtdäck ger den eleganta utseendet på ett teakdäck utan något tidskrävande och kostsamt underhåll i samband med naturligt teakved. Detta gröna alternativ för teakved är tillverkat av naturliga fibers komposit (risskalfiber och återvunna polymerer) som är lätt att arbeta med och underhålla. Det är det perfekta alternativet att uppgradera din båt och byta ut den snusiga gamla mattan. NATURTEAK ™ håller solen och den marina miljön i flera år medan du njuter av mer av din fritid.
                              </p>
                              <p>
                                NATURTEAK ™ distribueras uteslutande av Green Plank och är speciellt formulerad med ingredienser som förhindrar att materialet torkar ut eller spricker över tid. Det har också det höga UV-skyddet för att förhindra blekning, insektsresistent, högsta fuktbeständighet, överlägsen vidhäftning och NATURTEAK ™ är stolta över att vara det enda naturfibrer som består av komposit teak-däck på marknaden.
                              </p>
                              <p>
                                Precis som äkta teakträ, kan våra NATURTEAK ™ -kompositplankor bearbetas, slipas eller sågas till vilken önskad form som helst utan att förlora det verkliga träeffektutseendet på NATURTEAK ™ -komposit.
                              </p>
                              <div>
                                <ul>
                                  <li><strong>Premiumkvalitet</strong> –  Beprövade nordiska kvalitetsplankor för hårt marint väder och grönare levande.</li>
                                  <li><strong>Bara fötter vänliga</strong> –  På grund av dess unika naturfibrer baserade sammansättning, håller NATURTEAK ™ komposit teakdäck däcken svalare.</li>
                                  <li><strong>Praktisk</strong> –  Perfekt kombination av estetik och praktik med en naturlig teakträ design.</li>
                                  <li><strong>Exceptionellt lågt underhåll </strong>–  Idealisk lämpad för marina väderförhållanden med minimal blekning, lång livslängd och minimalt underhåll.</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*===============  End of Naturplank Section-1 content  =================*/}

                      {/*==============  Star Naturplank Section-2 content  ====================*/}
                      <div className="col-lg-12 mb-80">
                        <div className="project-gallery-wrapper">
                          <div className="row">
                            <div className="col-md-6 col-mobile-6 mb-20">
                              <div className="single-gallery-project">
                                <div className="single-gallery-project__image">

                                  <img src={Image11} className="img-fluid" alt="" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-mobile-6 mb-20">
                              <div className="project-information">
                                <h3>Produktinformation</h3>
                                <table width="100%">
                                  <tbody>
                                    <tr>
                                      <td align="left"><strong>Yta:</strong></td>
                                      <td align="left"> halkmotståndig slät yta, slående
                                        utseende efterliknar exotiska, tropiska lövträ; vändbara brädor</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Storlek:</strong></td>
                                      <td align="left">ca. 7 * 236 mm</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Längd:</strong></td>
                                      <td align="left">ca. 2,4 m</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Vikt:</strong></td>
                                      <td align="left">ca. 7.65 kg / m</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>

                              <div className="row mt-60">
                                <Grid container spacing={3}>
                                  <Grid item xs={6} sm={3} lg={4}>
                                    <a target="_blank" href="/bestall-prov" className="thm-btn" >Prøveordre</a>
                                  </Grid>
                                </Grid>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                      {/*===============  End of Naturplank Section-2 content  =============*/}
                      <div className="col-lg-12 mb-80">
                        <div className="project-gallery-wrapper">
                          <div className="row">
                            <div className="col-md-6 col-mobile-6 mb-40 mt-20 pl-30 pl-sm-15 pl-xs-15">
                              <div className="project-details">
                                <h2 className="mb-40 mt-20"><strong>produkt information</strong></h2>
                                <h3>Farvevalg</h3>
                                <p>
                                  Studiefotografering og / eller din browserenhed giver muligvis ikke en nøjagtig gengivelse af farverne. For at se farverne personligt, bedes du anmode om gratis prøver.
                                </p>
                                <h3>Naturlige skønhed</h3>
                                <p>
                                  Vores produkter er designet til at ligne naturligt træ og kan have svag farve / struktur og skygge variationer fra plade til plade. Farvevariationen vil på ingen måde påvirke produktets ydeevne.</p>
                                <h3>Oprethold skønheden</h3>
                                <p>
                                  Alle udvendige overflader opsamler snavs, støv og forurenende stoffer og skal rengøres. Det er nødvendigt at rengøre dit kompositdæk med jævne mellemrum for at holde det så smukt som den dag, du installerede det.</p>
                              </div>
                            </div>
                            <div className="col-md-6 col-mobile-6 mb-40 mt-20 pl-30 pl-sm-15 pl-xs-15">
                              <div className="project-details">
                                <h2 className="mb-40 mt-20"><strong>Pålidelig holdbarhed, overlegen kvalitet</strong></h2>
                                <ul>
                                  <li><strong>1. </strong>Installeret med HidLoc ™ skjulte fastgørelseselementer for at skabe ensartet overflade, hvilket gør det mere sikkert og behageligt for familier med børn og kæledyr.</li>
                                  <li><strong>2. </strong>Flerfarvede striber på hvert bræt skaber et autentisk kornmønster, der inviterer dig til at slappe af og nyde dit personlige tropiske paradis.</li>
                                  <li><strong>3. </strong>Karakteristisk indlægsdesign, stil og farveindstillinger</li>
                                  <li><strong>4. </strong>Der kræves ingen årlig farvning, forsegling eller maling</li>
                                  <li><strong>5. </strong>Ekstraordinær modstandsdygtighed over for UV-lys og farvetone</li>
                                  <li><strong>6. </strong>Høj skridsikkerhed giver en sikker overflade, selv i våd tilstand</li>
                                  <li><strong>7. </strong>Ekstremt lav vandabsorption</li>
                                  <li><strong>8. </strong>Fri for giftige tilsætningsstoffer</li>
                                  <li><strong>9. </strong>Velegnet til offentlig og privat sektor</li>
                                  <li><strong>10. </strong>Splinter ikke, splittes, rådner eller kriger</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*===============  Star Naturplank Section-6 content  ====================*/}
                      <div className="col-12 mb-30 mt-20" >
                        <h3>
                          Download Pdfs
                        </h3>
                        <hr />

                        <Grid container spacing={3}>
                          <Grid item xs={6} sm={2}>
                            <a target="_blank" href="/pdfs/greenplank-natural-fibers-compsoite-products-brochure-2020-english.pdf">
                              <img src={pdfimg1} className="img-fluid" alt="" />
                            </a>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <a target="_blank" href="/pdfs/Green-Plank-Composite-Decking-hollow-boards-Installation-Guide-2019%20(1).pdf">
                              <img src={pdfimg6} className="img-fluid" alt="" />
                            </a>
                          </Grid>
                          <Grid item xs={6} sm={2}>

                          </Grid>

                        </Grid>
                      </div>
                      {/*====================  End of Naturplank Section-6 content  =============*/}


                    </div>
                  </div>
                </div>
                {/*Projects section end*/}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </Layout>
  );
};

export default naturplankkompositplankagp7241;
