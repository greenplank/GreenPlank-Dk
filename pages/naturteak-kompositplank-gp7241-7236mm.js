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
                            NATURAL TAKE ™ - Skridsikkert og holdbart dæk til både og lystbåde - bedre end teaktræsdæk og PVC -plast
                          </h2>
                          <strong>den grønne mulighed for teaktræ med uendelige kreative og designmuligheder
                          </strong>
                          <div class="et_pb_text_inner">
                            <div class="ce_text block">

                              <strong>Smukt realistisk og meget praktisk med en tidløs kvalitet NATURAL TAKE ™ Komposit med naturfiber teaktræsgulv til både og lystbåde er meget elastisk, skridsikkert, UV-stabilt og ligner ægte teaktræ. Perfekt til luksusbåde og lystbåde.
                              </strong>
                              <p>
                                Green Plank NATURTEAK ™ komposit teak båddæk giver det elegante look af et teaktræsdæk uden tidskrævende og dyr vedligeholdelse i forbindelse med naturligt teaktræ. Dette grønne alternativ til teaktræ er fremstillet af sammensatte naturfibre (risskalfibre og genbrugspolymerer), der er lette at arbejde med og vedligeholde. Det er den perfekte mulighed for at opgradere din båd og udskifte det snusket gamle tæppe. NATURTEAK ™ bevarer solen og havmiljøet i flere år, mens du nyder mere af din fritid.

                              </p>
                              <p>
                                NATURTEAK ™ distribueres udelukkende af Green Plank og er specielt formuleret med ingredienser, der forhindrer materialet i at tørre ud eller revne over tid. Det har også den høje UV -beskyttelse for at forhindre fading, insektresistent, højeste fugtbestandighed, overlegen vedhæftning og NATURTEAK ™ er stolt over at være den eneste naturlige fiber, der består af sammensatte teaktræsdæk på markedet.

                              </p>
                              <p>
                                Ligesom ægte teaktræ kan vores NATURTEAK osit -kompositplanker bearbejdes, slibes eller saves til enhver ønsket form uden at miste det sande træeffektudseende af NATURTEAK ™ -komposit.

                              </p>
                              <div>
                                <ul>
                                  <li><strong>Premium kvalitet
                                  </strong> –  Dokumenterede nordiske kvalitetsplanker til hårdt havvejr og grønnere livsstil.
                                  </li>
                                  <li><strong>Bare fødder venlige
                                  </strong> –  På grund af sin unikke naturfiberbaserede sammensætning holder NATURTEAK osit komposit teakdæk dækkene køligere.
                                  </li>
                                  <li><strong>Praktisk</strong> –  Perfekt kombination af æstetik og praktisk med et design i naturligt teaktræ.
                                  </li>
                                  <li><strong>Usædvanlig lav vedligeholdelse
                                  </strong>–  Ideel til marine vejrforhold med minimal blegning, lang levetid og minimal vedligeholdelse.
                                  </li>
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
                                <h3>Produkt information</h3>
                                <table width="100%">
                                  <tbody>
                                    <tr>
                                      <td align="left"><strong>Overflade:</strong></td>
                                      <td align="left">
                                        skridsikker glat overflade, slående
                                        udseende efterligner eksotisk, tropisk hårdttræ; vendbare brædder</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Størrelse:</strong></td>
                                      <td align="left">ca. 7 * 236 mm</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Længde:</strong></td>
                                      <td align="left">ca. 2,4 m</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Vægt:</strong></td>
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
