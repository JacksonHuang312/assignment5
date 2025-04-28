import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./HomeView.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Genres from "../components/Genres";
import Footer from "../components/Footer";

function HomeView() {
  return (
    <div>
      <Header />
      <Hero />
      <Featured />
      <Genres />
      <Footer />
    </div>
  );
}

export default HomeView;