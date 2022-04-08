import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Blog from "../components/blog/blog-page";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const Artiklar = () => {
  return (
    <>
      <Head>
        <title>Artikler</title>
        <meta name="title" content="Artikler - GreenPlank.dk" />
        <meta name="description" content="Artikler om Komposit terrassebrædder, hegn, komposit facadebeklædning, boligindretning. Artikler i grønt og bæredygtigt byggeri." />
      </Head>
      <Layout pageTitle="Artikler - GreenPlank.dk">
        <HeaderTwo />
        <PageHeader title="Artikler" crumbTitle="Artikler" />
        <StickyHeader />
        <Blog />
        <BrandCarousel />
        <Footer />
      </Layout>
    </>
  );
};

export default Artiklar;
