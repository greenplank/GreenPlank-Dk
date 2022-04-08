import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import AllaTyperVaders from "../components/alla-typer-av-vader";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const AllaTyperVader = () => {
  return (
    <>
      <Head>
        <title>Al slags vejr - GreenPlank.dk</title>
        <meta name="title" content="Al slags vejr - GreenPlank.dk" />
        <meta name="description" content="Giv os en chance for at være dit yndlingsmærke; Fordi Green Plank er et bæredygtigt brand for byggeprodukter, der repræsenterer kvalitet, ekspertise og" />
      </Head>
      <Layout pageTitle="Al slags vejr - GreenPlank.dk">
        <HeaderTwo />
        <PageHeader title="Alla-typer-av-vader" crumbTitle="alla-typer-av-vader" />
        <StickyHeader />
        <AllaTyperVaders />
        <BrandCarousel />
        <Footer />
      </Layout>
    </>
  );
};

export default AllaTyperVader;
