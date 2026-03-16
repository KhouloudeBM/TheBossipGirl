import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import productIdentity from "@/assets/product-identity.jpg";
import productDiscipline from "@/assets/product-discipline.jpg";
import productFinancial from "@/assets/product-financial.jpg";
import productConfidence from "@/assets/product-confidence.jpg";

const products = [
  {
    phase: "PHASE 01",
    title: "The Sovereign Mindset",
    price: "$97",
    image: productIdentity,
    description: "Reprogram your identity at the neural level. 21-day cognitive restructuring protocol.",
  },
  {
    phase: "PHASE 02",
    title: "The Discipline Protocol",
    price: "$127",
    image: productDiscipline,
    description: "The 90-day system that eliminates procrastination and installs military-grade habits.",
  },
  {
    phase: "PHASE 03",
    title: "Financial Sovereignty",
    price: "$197",
    image: productFinancial,
    description: "Build your first $100K. Investment frameworks, multiple income streams, wealth psychology.",
  },
  {
    phase: "PHASE 04",
    title: "The Confidence Armour",
    price: "$77",
    image: productConfidence,
    description: "Body language mastery, vocal authority, and the psychology of commanding any room.",
  },
];

const ArsenalSection = () => {
  return (
    <section id="arsenal" className="relative py-[15vh] md:py-[20vh] px-6 md:px-12 grain-overlay">
      <div className="flex items-end justify-between mb-16">
        <div>
          <span className="text-label-gold">THE ARSENAL</span>
          <h2 className="font-display text-5xl md:text-8xl tracking-tighter text-foreground mt-4 leading-[0.85]">
            YOUR
            <br />
            <span className="italic">BLUEPRINTS</span>
          </h2>
        </div>
        <span className="text-label text-muted-foreground hidden md:block">
          04 DIGITAL PRODUCTS
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product, i) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              delay: i * 0.1,
              duration: 0.8,
              ease: [0.23, 1, 0.32, 1],
            }}
          >
            <ProductCard {...product} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ArsenalSection;
