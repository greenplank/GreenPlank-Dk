import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import GoogleMap from "../components/google-map";
import ContactFormOne from "../components/contact/contact-form-one";
import ContactCardCarousel from "../components/contact/contact-card-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Kontakt os</title>
        <meta name="title" content="Kontakt os | Kundeservice - GreenPlank.dk" />
        <meta name="description" content="GreennPlank-teamet er alle ører til alle dine spørgsmål og problemer. Kontakt os og vores kundeservice hjælper dig med det du har problemer med." />
      </Head>
      <Layout pageTitle="Kontakt os | Kundeservice - GreenPlank.dk">
        <HeaderTwo />
        <PageHeader title="Kontakt os" crumbTitle="Kontakta oss" />
        <StickyHeader />
        <ContactFormOne />
        <ContactCardCarousel />
        <GoogleMap extraClass="contact" />
        <Footer />
      </Layout>
    </>
  );
};

export default Contact;
