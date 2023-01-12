import Head from "next/head";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Incentives from "../components/Incentives";
import CTASectionRight from "../components/CTASectionRight";
import CTASectionLeft from "../components/CTASectionLeft";
import Services from "../components/Services";
import AboutFriendlies from "../components/AboutFriendlies";
import HealthFundClaims from "../components/HealthFundClaims";
import Lenses from "../components/Lenses";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Friendlies Eyecare" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Nav />
        <Hero />
        <Incentives />
        <AboutUs />
        <CTASectionRight />
        <Services />
        <AboutFriendlies />
        <HealthFundClaims />
        <CTASectionLeft />
        <Lenses />
        <Footer />
      </main>
    </>
  );
}
