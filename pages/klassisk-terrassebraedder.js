import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import ClassicKomposittrallSection from "../components/Produkter/classicKomposittrallSection";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";

const ClassicKomposittrall = () => {
    return (
        <>
            <Head>
                <title>Classic Komposit terrassebrædder - GreenPlank.dk</title>
                <meta name="title" content="Classic Komposit terrassebrædder - GreenPlank.dk" />
                <meta name="description" content="Vores klassiske kompositterrasse er det bedste valg til alle projekter for at få et naturligt terrasseudseende. Køb nu hos Greenplank.dk

" />
            </Head>
            <Layout pageTitle="Classic Komposit terrassebrædder - GreenPlank.dk">
                <HeaderTwo />
                <PageHeader title="Classic terrassebrædder" crumbTitle="Classic terrassebrædder" />
                <StickyHeader />
                <ClassicKomposittrallSection />

                <BrandCarousel />
                <Footer />
            </Layout>
        </>
    );
};

export default ClassicKomposittrall;
