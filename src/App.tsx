import { useState, useEffect, useCallback } from "react";
import Header from "./components/Header";
import MobileSidebar from "./components/MobileSidebar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProductsSection from "./components/ProductsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { PRODUCTS } from "./data/products";

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppOrder = useCallback(
    (productName: string, price: string) => {
      const message = `Hai salad 18! Saya ingin memesan:\n\n${productName} (Rp ${price})\n\nTolong bantu saya dengan pesanan saya`;
      window.open(
        `https://wa.me/6288989840119?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    },
    []
  );

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header
        scrolled={scrolled}
        scrollToSection={scrollToSection}
        openMobileMenu={() => setMobileMenuOpen(true)}
      />
      <MobileSidebar
        mobileMenuOpen={mobileMenuOpen}
        closeMobileMenu={() => setMobileMenuOpen(false)}
        scrollToSection={scrollToSection}
      />
      <HeroSection products={PRODUCTS} scrollToSection={scrollToSection} />
      <AboutSection />
      <ProductsSection
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        windowWidth={windowWidth}
        products={PRODUCTS}
        handleWhatsAppOrder={handleWhatsAppOrder}
        scrollToSection={scrollToSection}
      />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
