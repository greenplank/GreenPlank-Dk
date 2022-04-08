import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Bastforutomhusbruk from "../components/bast-for-utomhusbruk";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const BastUtomhusbruk = () => {
  return (
    <>
      <Head>
        <title>Bedst til udendørs brug - GreenPlank.dk</title>
        <meta name="title" content="Bedst til udendørs brug - GreenPlank.dk" />
        <meta name="description" content="Green Plank kompositplanke GP7117 er ideel til forskellige udendørs applikationer såsom håndlister, terrasser, dæk, havemøbler, parkbænke og borde, skraldespande" />
      </Head>
      <Layout pageTitle="Bedst til udendørs brug - GreenPlank.dk">
        <HeaderTwo />
        <PageHeader title="Bast-for-utomhusbruk" crumbTitle="bast-for-utomhusbruk" />
        <StickyHeader />
        <Bastforutomhusbruk />
        <BrandCarousel />
        <Footer />
      </Layout>
    </>
  );
};

export default BastUtomhusbruk;
