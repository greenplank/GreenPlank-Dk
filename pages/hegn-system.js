import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import StaketSection from "../components/Produkter/staketSection";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../assets/images/backgrounds/staket1.webp"
import Image2 from "../assets/images/backgrounds/staket.webp"
import Head from "next/head";

const staketsystem = () => {
    return (
        <>
            <Head>
                <title>Hegn system</title>
                <meta name="title" content="Eksklusivt hegn | Moderne hegn - GreenPlank.dk" />
                <meta name="description" content="Hegnsvægge er nu meget brugt som grænsen til at binde din have, klimaks din landskabsstruktur eller være i fokus for din eksponering." />
            </Head>
            <Layout pageTitle="Eksklusivt hegn | Moderne hegn - GreenPlank.dk">
                <HeaderTwo />
                <PageHeader title="Hegn system" crumbTitle="Hegn system" />
                <StickyHeader />
                <StaketSection />
                <section className="about-one pt-20 pb-40">
                    <Container>
                        <Row style={{ marginBottom: "2em" }}>
                            <Col lg={12}>
                                <div>
                                    {/*====================  project gallery area ====================*/}
                                    <div className="project-gallery-area pb-60">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    {/* section title */}
                                                    <div className="section-title-area text-center mb-30">
                                                        <h2><strong>Hvorfor bruge komposit terrassebrædder?</strong></h2>
                                                    </div>
                                                </div>
                                                <div className="about-section pt-60 pb-60">
                                                    <div className="container">
                                                        <div className="row row-25 align-items-center">
                                                            <div className="col-lg-6 col-12 mb-30 p-30">
                                                                <div className="about-image-two mr-20">
                                                                    <img src={Image1} className="img-fluid" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-30 ml-60">
                                                                <div>
                                                                    <h3>Virkeligheden</h3>
                                                                    <p>
                                                                    Med hensyn til forudgående udgifter er Green Plank’s Classic og EverDeck kompositplank kun lidt dyrere end trykbehandlet træ. Og fordi trykbehandlet træ kræver regelmæssig vedligeholdelse som farvning, spildes besparelser fra hårdttræ på så lidt som tre år.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="about-section ">
                                                    <div className="container">
                                                        <div className="row row-25 align-items-center">
                                                            <div className="col-lg-6 col-12 mb-30">
                                                                <div className="about-content-two">
                                                                    <h3>Fordelingen</h3>
                                                                    <p>
                                                                    Green Plank’s indgangskollektion på klassisk niveau Classic og EverDeck giver en omkostningseffektiv og præstationsfremmende opgradering over trykbehandlede trædæk. Med hensyn til forhåndsomkostninger koster Classic og EverDeck kompositplader lidt mere end trykbehandlet træ, men du sparer penge på lang sigt, da det ikke kræver den dyre og besværlige årlige vedligeholdelse, der følger med træplanker.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-30">
                                                                <div className="about-image-two">
                                                                    <img src={Image2} className="img-fluid" alt="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*====================  End of project gallery area  ====================*/}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <BrandCarousel />
                <Footer />
            </Layout>
        </>
    );
};

export default staketsystem;
