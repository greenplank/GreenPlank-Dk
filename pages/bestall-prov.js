import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import ContactCard from "../components/contact/contact-form-two";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const BestallProv = () => {
  return (
    <>
      <Head>
        <title>Bestil prøver | Gulv | Komposit terrassebrædder | Planker | Fliser</title>
        <meta name="title" content="Bestil prøver | Gulv | Komposit terrassebrædder | Planker | Fliser" />
        <meta name="description" content="Når du beslutter dig for en ny Komposit terrassebrædder, vil du sikkert have nogle spørgsmål med på vejen. Produktprøver er en god måde at få en idé på!" />
      </Head>
      <Layout pageTitle="Bestil prøver | Gulv | Komposit terrassebrædder | Planker | Fliser">
        <HeaderTwo />
        <PageHeader title="Prøverækkefølge" crumbTitle="Prøverækkefølge" />
        <StickyHeader />
        <ContactCard />
        <BrandCarousel />
        <Footer />
      </Layout>
    </>
  );
};

export default BestallProv;
