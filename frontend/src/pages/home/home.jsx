import React from "react";
import { Header } from "../../components/header/header";
import { Image } from "../../components/image/image";
// import { About } from "../../components/about/about";
import { Footer } from "../../components/footer/footer";
import { Banner } from "../../components/banner/banner";


export const Home = () => {
  return (
    <>
      <Header showDonation={true} showHome={false} showAbout={true}  showRahu={false} />
      <Banner />
      <Image />
      <Footer />
    </>
  );
};
