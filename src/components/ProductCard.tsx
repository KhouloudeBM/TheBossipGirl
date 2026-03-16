import { motion } from "framer-motion";

interface ProductCardProps {
  phase: string;
  title: string;
  price: string;
  image: string;
  description: string;
}

const ProductCard = ({ phase, title, price, image, description }: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 0.98 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className="group relative aspect-[3/4] overflow-hidden border border-foreground/10 bg-muted cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />

      <div className="absolute top-6 right-6">
        <span className="text-label text-muted-foreground">{price}</span>
      </div>

      <div className="absolute bottom-8 left-8 right-8">
        <span className="text-label-gold">{phase}</span>
        <h3 className="font-display text-3xl md:text-4xl tracking-tighter text-foreground mt-2 leading-[0.9]">
          {title}
        </h3>
        <p className="text-label text-muted-foreground mt-4 leading-relaxed normal-case tracking-normal">
          {description}
        </p>
        <div className="mt-6 overflow-hidden">
          <span className="text-label text-foreground hover-underline inline-block translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            ACQUIRE THE BLUEPRINT →
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
