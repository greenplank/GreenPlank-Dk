import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import AboutOne from "../components/about/about-one";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <meta name="title" content="Om os - Bæredygtige byggematerialer, komposit terrassebrædder, facadebeklædning - GreenPlank.dk" />
        <meta name="description" content="Green Plank blev grundlagt af to brødre i 2004 i Sverige. I dag har Green Plank fået en førende position i kompositverdenen." />
      </Head>
      <Layout pageTitle="Om os - Bæredygtige byggematerialer, komposit terrassebrædder, facadebeklædning - GreenPlank.dk">
        <HeaderTwo />
        <PageHeader title="Om os" crumbTitle="Om os" />
        <StickyHeader />
        <AboutOne />
        <BrandCarousel />
        <Footer />
      </Layout>
    </>
  );
};

export default About;
