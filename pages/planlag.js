import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import PlaneraSection from "../components/planeraSection";
import Footer from "../components/footer";
import Head from "next/head";

const Planlag = () => {
  return (
    <>
      <Head>
        <title>Planlæg</title>
        <meta name="title" content="Planlæg - GreenPlank.dk" />
        <meta name="description" content="Planlæg." />
      </Head>
      <Layout pageTitle="Planlæg - GreenPlank.dk">
        <HeaderTwo />
        <PageHeader title="Planlæg" crumbTitle="planlæg" />
        <StickyHeader />
        <PlaneraSection />
        <Footer />
      </Layout>
    </>
  );
};

export default Planlag;
