import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import HeroSlider from "@/components/HeroSlider";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { products } from "@/data/products";

const PRODUCTS_PER_PAGE = 21;
const PRIORITY_BRANDS = ["siemens", "schneider"] as const;
const PRIORITY_PAGES = 3; // first N pages reserved for priority brands
const ALL_BRANDS = "__ALL__";
const UNBRANDED = "__UNBRANDED__";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBrand, setSelectedBrand] = useState<string>(ALL_BRANDS);

  const orderedProducts = useMemo(() => {
    const isPriority = (title: string) => {
      const t = title.toLowerCase();
      return PRIORITY_BRANDS.some((b) => t.includes(b));
    };

    const priority = products.filter((p) => isPriority(p.title));
    const other = products.filter((p) => !isPriority(p.title));

    const prioritySlots = PRIORITY_PAGES * PRODUCTS_PER_PAGE;
    const priorityHead = priority.slice(0, prioritySlots);
    const priorityTail = priority.slice(prioritySlots);

    // Ensure the first PRIORITY_PAGES pages contain priority brands only.
    // Any extra priority items overflow after other brands.
    return [...priorityHead, ...other, ...priorityTail];
  }, []);

  const availableBrands = useMemo(() => {
    const brands = Array.from(
      new Set(
        orderedProducts
          .map((product) => product.brand.trim())
          .filter((brand) => brand.length > 0),
      ),
    );

    return brands.sort((a, b) => a.localeCompare(b));
  }, [orderedProducts]);

  const filteredProducts = useMemo(() => {
    if (selectedBrand === ALL_BRANDS) {
      return orderedProducts;
    }

    if (selectedBrand === UNBRANDED) {
      return orderedProducts.filter((product) => product.brand.trim() === "");
    }

    return orderedProducts.filter((product) => product.brand.trim() === selectedBrand);
  }, [orderedProducts, selectedBrand]);

  // Calculate pagination
  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);
  const displayTotalPages = Math.max(totalPages, 1);
  
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);
  }, [currentPage, filteredProducts]);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrand(brand);
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = Math.min(startIndex + PRODUCTS_PER_PAGE, totalProducts);
  const displayStart = totalProducts === 0 ? 0 : startIndex + 1;

  return (
    <>
      <Helmet>
        <title>Our Products | HarmaTek</title>
        <meta
          name="description"
          content="Explore HarmaTek's range of forklift safety systems, collision avoidance technology, and telematics solutions."
        />
      </Helmet>

      <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
        <Header />

        <main className="flex-grow pt-24 pb-24">
          {/* Hero Slider Section */}
          <div className="container mx-auto px-4 lg:px-8 mb-12">
            <HeroSlider
              title={
                <>
                  Our <span className="text-gradient-gold">Products</span>
                </>
              }
              subtitle="We are a leading company specialized in supplying all products related to electrical production lines and control panels, including PLC and VFD units. We provide comprehensive solutions that meet industry needs with the highest standards of quality and reliability. Our mission is to support our partners by delivering the latest technologies and exceptional services to ensure the continuity and efficiency of production operations"
              arsubtitle="
نحن شركة رائدة ومتخصصة في توريد جميع المنتجات المتعلقة بخطوط الإنتاج الكهربائية ولوحات التحكم، بما في ذلك وحدات) PLC وVFD، مع تقديم حلول متكاملة تلبي احتياجات الصناعة  ( بأعلى معايير الجودة والموثوقية. نسعى دائمًا لدعم شركائنا من خلال توفير أحدث التقنيات والخدمات المتميزة لضمان استمرارية وكفاءة عمليات الإنتاج"
            />
          </div>

          {/* Products Info Bar */}
          <div className="container mx-auto px-4 lg:px-8 mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 px-6 bg-muted/50 rounded-lg">
              <p className="text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{displayStart}-{endIndex}</span> of{" "}
                <span className="font-semibold text-foreground">{totalProducts}</span> products
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="flex items-center gap-2">
                  <label className="text-sm text-muted-foreground">
                    Brand
                  </label>
                  <Select value={selectedBrand} onValueChange={handleBrandChange}>
                    <SelectTrigger className="h-9 min-w-[180px]">
                      <SelectValue placeholder="All Brands" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={ALL_BRANDS}>All Brands</SelectItem>
                      <SelectItem value={UNBRANDED}>Unbranded</SelectItem>
                      {availableBrands.map((brand) => (
                        <SelectItem key={brand} value={brand}>
                          {brand}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <p className="text-sm text-muted-foreground">
                  Page <span className="font-semibold text-foreground">{currentPage}</span> of{" "}
                  <span className="font-semibold text-foreground">{displayTotalPages}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              key={`${selectedBrand}-${currentPage}`}
            >
              {paginatedProducts.map((product, index) => (
                <ProductCard 
                  key={`${currentPage}-${product.title}`} 
                  {...product} 
                  index={index} 
                />
              ))}
            </motion.div>

            {/* Pagination */}
            {totalPages > 1 && (
              <motion.div 
                className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {/* Previous Button */}
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="min-w-[120px] gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </Button>

                {/* Page Numbers */}
                <div className="flex items-center gap-1">
                  {getPageNumbers().map((page, index) => (
                    page === "..." ? (
                      <span key={`ellipsis-${index}`} className="px-3 text-muted-foreground">
                        ...
                      </span>
                    ) : (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="icon"
                        onClick={() => handlePageChange(page as number)}
                        className="w-10 h-10"
                      >
                        {page}
                      </Button>
                    )
                  ))}
                </div>

                {/* Next Button */}
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="min-w-[120px] gap-2"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </motion.div>
            )}

            {/* CTA Section */}
            <div className="mt-20 text-center">
              <p className="text-muted-foreground mb-6">
                Looking for a custom solution? We specialize in tailoring our technology to your specific needs.
              </p>
              <a href={`${import.meta.env.BASE_URL}contact`} className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors shadow-lg">
                Contact Sales Team
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Products;
