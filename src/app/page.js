import React from "react";
import AnnouncementBar from "./Component/AnnouncementBar/page";
import Navbar from "./Component/Navbar/page";
import Tagline from "./Component/BrandTagline/page";
import Products from "./Component/Products/page";
import Footer from "./Component/Footer/page";

export default function Home() {
  return (
    <body>
      <AnnouncementBar />
      <Navbar />
      <Tagline />
      <Products />
      <Footer />
    </body>
  );
}
