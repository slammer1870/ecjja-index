import { useState } from "react";

import Hero from "../components/Hero";
import About from "../components/About";
import Testimonails from "../components/Testimonials";
import Form from "../components/Form";
import Features from "../components/Features";
import KidsForm from "../components/KidsForm";

export default function Home() {
  return (
    <div>
      <Hero />
      <main>
        <About />
        <Form />
        <Features />
        <KidsForm />
        <Testimonails />
      </main>
    </div>
  );
}
