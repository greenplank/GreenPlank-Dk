import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import EntraTrallSection from "../components/Produkter/entraTrallSection";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const Entratrall = () => {
    return (
        <>
            <Head>
                <title>ENTRA Komposit terrassebrædder - GreenPlank.dk</title>
                <meta name="title" content="ENTRA Komposit terrassebrædder - GreenPlank.dk" />
                <meta name="description" content="Spar de årlige vedligeholdelsesomkostninger med Entra terrassebord. Køb Entra-terrasse i premium kvalitet på Greenplank.dk
" />
            </Head>
            <Layout pageTitle="ENTRA Komposit terrassebrædder - GreenPlank.dk">
                <HeaderTwo />
                <PageHeader title="Entra Terrassebrædder" crumbTitle="Entra Terrassebrædder" />
                <StickyHeader />
                <EntraTrallSection />
                <BrandCarousel />
                <Footer />
            </Layout>
        </>);
};

export default Entratrall;
