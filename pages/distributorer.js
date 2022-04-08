import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import AterfarsaljareTextSection from "../components/AterfarsaljareTextSection";
import Footer from "../components/footer";
import Head from "next/head";

const Aterfarsaljare = () => {
  return (
    <>
      <Head>
        <title>Distributører</title>
        <meta name="title" content="Forhandlere af komposit terrassebrædder, komposit facadebeklædning, hegn - GreenPlank.dk" />
        <meta name="description" content="Find din Green Plank-forhandler for vores mange holdbare kompositprodukter nær dig." />
      </Head>
      <Layout pageTitle="Forhandlere af komposit terrassebrædder, komposit facadebeklædning, hegn - GreenPlank.dk">
        <HeaderTwo />
        <PageHeader title="Find Green Plank-forhandlere" crumbTitle="Distributører" />
        <StickyHeader />
        <AterfarsaljareTextSection />
        <Footer />
      </Layout>
    </>
  );
};

export default Aterfarsaljare;
