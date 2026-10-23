"use client"
import {useState } from "react";
import Navbar from "@/Components/Navbar";
import HomePage from "@/Components/Home";
import ServicesPage from "@/Components/Services";
import FooterPage from "@/Components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-700 cursor-pointer">
  <Navbar/>
  <HomePage/>
  <ServicesPage/>
  <FooterPage/>
  </div>
  );
}
