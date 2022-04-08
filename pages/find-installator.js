import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import HittaTextSection from "../components/HittaTextSection";
import Head from "next/head";
import Footer from "../components/footer";

const HittaHantverkare = () => {
  return (
    <>
      <Head>
        <title>Find installatør</title>
        <meta name="title" content="Find håndværkere af komposit terrassebrædder, komposit facadebeklædning, hegn - GreenPlank.dk" />
        <meta name="description" content="Find den håndværker af Green Plank Natural Fiber Composite-produkter, der er tættest på dig for perfekt kompositinstallation." />
      </Head>
      <Layout pageTitle="Find håndværkere af komposit terrassebrædder, facadebeklædning, hegn - GreenPlank.dk">
        <HeaderTwo />
        <PageHeader title="Find Green Plank Installer" crumbTitle="Find Green Plank Installer" />
        <StickyHeader />
        <HittaTextSection />
        <Footer />
      </Layout>
    </>
  );
};

export default HittaHantverkare;
