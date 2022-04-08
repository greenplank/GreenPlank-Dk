import React, { useEffect } from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import VideoCards from "../components/header/videoCard";
import StickyHeader from "../components/header/sticky-header";
import MainSliderTwo from "../components/slider/main-slider-2";
import VideoCard from "../components/videos/video-card";
import HemRelatedProducts from "../components/HemRelatedProducts";
import HemGallery from "../components/HemGallery";
import FeaturedCause from "../components/featured-cause";
import ServiceTwo from "../components/services/service-two";
import HemLastSection from "../components/HemLastSection";
import BrandCarousel from "../components/brand-carousel";
import Head from "next/head";

import Footer from "../components/footer";

const HomeTwo = () => {
  console.log(process.env.authAPIkey);
  return (
    <>
      <Head>
      <meta name="robots" content="INDEX,FOLLOW"/>
        <meta name="title" content="Bedste Komposit terrassebrædder | facadebeklædning | hegn og mange flere!" />
        <meta name="description" content="Green Plank er det førende svenske mærke for komposit terrassebrædder, komposit facadebeklædning, hegn i Sverige. Skandinavisk kvalitets Komposit terrassebrædder, komposit facadebeklædning, Planker, Hegn." />
      </Head>
      <Layout pageTitle="Bedste Komposit terrassebrædder | facadebeklædning | hegn og mange flere!">
        <HeaderTwo />
        <StickyHeader extraClassName="stricky-header-two" />
        <MainSliderTwo />
        
        <VideoCards />
        <HemGallery />
        <HemRelatedProducts />
        <ServiceTwo />
        <VideoCard />
        <FeaturedCause />
        <HemLastSection />
        <BrandCarousel extraClass="client-carousel__has-border-top" />
        <Footer />
      </Layout>



      <div class="alert text-center cookiealert" role="alert">
      Vi bruger cookies på vores hjemmeside for at give dig den mest relevante oplevelse ved at huske dine præferencer og gentagne besøg. Ved at klikke på "Accepter" accepterer du, at ALLE cookies bruges
        <a href="https://www.greenplank.dk/forsaljningsvillkor" target="_blank">
        Lær mere</a>

        <button type="button" class="btn btn-primary btn-sm acceptcookies">
        jeg er enig
        </button>
      </div>

      <script>
        for (var i = 1; i= 150; i++)
        document.querySelector("#fillme").innerHTML += "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ";
      </script>

      <script src="https://cdn.jsdelivr.net/gh/Wruczek/Bootstrap-Cookie-Alert@gh-pages/cookiealert.js"></script>
    </>
  );
};

export default HomeTwo;


export async function  getServerSideProps(){

  console.log(process.env.authAPIkey);

  return{
    props:{
      hello:'world'
    }
  }
}