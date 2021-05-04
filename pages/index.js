import Hero from "../components/Hero";
import About from "../components/About";
import Testimonails from "../components/Testimonials";
import Form from "../components/Form"

export default function Home() {
  return (
    <div>
      <Hero />
      <main>
        <About />
        <Form />
        <Testimonails />
      </main>
      
    </div>
  );
}
