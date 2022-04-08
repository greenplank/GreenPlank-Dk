import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Bastforpoolen from "../components/bast-for-poolen";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const BastPoolen = () => {
  return (
    <>
      <Head>
        <title>Bedst til poolen - GreenPlank.dk</title>
        <meta name="title" content="Bedst til poolen - GreenPlank.dk" />
        <meta name="description" content="For her hos Green Plank tilbyder vi en bred vifte af moderne, trendy, slidstærke trolleymaterialer med garanteret kvalitet." />
      </Head>
      <Layout pageTitle="Bedst til poolen - GreenPlank.dk">
        <HeaderTwo />
        <PageHeader title="Bast-for-poolen" crumbTitle="bast-for-poolen" />
        <StickyHeader />
        <Bastforpoolen />
        <BrandCarousel />
        <Footer />
      </Layout>
    </>
  );
};

export default BastPoolen;
