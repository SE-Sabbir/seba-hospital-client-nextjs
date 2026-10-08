import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import AboutSection from "@/components/AboutSection";
import DoctorCarousel from "@/components/DoctorCarousel";
import AppointmentForm from "@/components/AppointmentForm";
import Facilities from "@/components/Facilities";
import Testimonials from "@/components/Testimonials";
import HealthBlog from "@/components/HealthBlog";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <HeroSection />
        <ServicesGrid />
        <AboutSection />
        <DoctorCarousel />
        <AppointmentForm />
        <Facilities />
        <Testimonials />
        <HealthBlog />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
