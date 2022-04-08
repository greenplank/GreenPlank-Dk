import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import GalleryPage from "../components/gallery/gallery-page";
import PageHeader from "../components/page-header";
import Footer from "../components/footer";
import Head from "next/head";

const Gallery = () => {
  return (
    <>
      <Head>
        <title>Galleri</title>
        <meta name="title" content="Galleri Bæredygtige byggematerialer, komposit terrassebrædder, facadebeklædning - GreenPlank.dk" />
        <meta name="description" content="Billedgalleri med inspiration fra Green Plank. Kompositmateriale til bæredygtigt byggeri i fremtiden." />
      </Head>
      <Layout pageTitle="Galleri Bæredygtige byggematerialer, komposit terrassebrædder, facadebeklædning - GreenPlank.dk">
        <HeaderTwo />
        <PageHeader title="Galleriside" crumbTitle="Galleri" />
        <StickyHeader />
        <GalleryPage />
        <Footer />
      </Layout>
    </>
  );
};

export default Gallery;
