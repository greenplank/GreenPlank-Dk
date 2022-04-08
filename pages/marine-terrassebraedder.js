import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import MarineKomposittrallSection from "../components/Produkter/marineKomposittrallSection";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";


const MarineKomposittrall = () => {
    return (
        <>
            <Head>
                <title>Marine Komposit terrassebrædder - GreenPlank.dk</title>
                <meta name="title" content="Marine Komposit terrassebrædder - GreenPlank.dk" />
                <meta name="description" content="Vi har designet marineterrasser af bedste kvalitet, som er holdbare og pålidelige. Fra jumbo marine terrasser til marine kunst terrasser er tilgængelige på Greenplank.dk" />
            </Head>
            <Layout pageTitle="Marine Komposit terrassebrædder - GreenPlank.dk">
                <HeaderTwo />
                <PageHeader title="Marine Terrassebrædder" crumbTitle="Marine Terrassebrædder" />
                <StickyHeader />
                <MarineKomposittrallSection />
                <BrandCarousel />
                <Footer />
            </Layout>
        </>
    );
};

export default MarineKomposittrall;
