import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header-SmartClassic";
import SmartKomposittrallSection from "../components/Produkter/smartKomposittrallSection";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const SmartKomposittrall = () => {
    return (
        <>
            <Head>
                <title>Smart Terrassebrædder</title>
                <meta name="title" content="Smart Komposit terrassebrædder - GreenPlank.dk" />
                <meta name="description" content="Smart Decking brædder er perfekte til stilfulde og trendy dæksgulve. Køb Smart terrassebord til boliger og kontorer på Greenplank.dk
" />
            </Head>
            <Layout pageTitle="Smart Komposit terrassebrædder - GreenPlank.dk">
                <HeaderTwo />
                <PageHeader title="Smart Terrassebrædder" crumbTitle="Smart Terrassebrædder" />
                <StickyHeader />
                <SmartKomposittrallSection />

                <BrandCarousel />
                <Footer />
            </Layout>
        </>
    );
};

export default SmartKomposittrall;
