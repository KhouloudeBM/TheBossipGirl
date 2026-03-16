const FooterSection = () => {
  return (
    <footer id="contact" className="border-t border-foreground/10 px-6 md:px-12 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <span className="font-display text-2xl tracking-tight text-foreground">
            THEBOSSIPGIRL
          </span>
          <p className="text-label text-muted-foreground mt-2">
            DIGITAL BLUEPRINTS FOR IDENTITY SHIFTING & FINANCIAL SOVEREIGNTY
          </p>
        </div>

        <div className="flex gap-8">
          <a href="#" className="text-label text-muted-foreground hover-underline">
            INSTAGRAM
          </a>
          <a href="#" className="text-label text-muted-foreground hover-underline">
            TIKTOK
          </a>
          <a href="#" className="text-label text-muted-foreground hover-underline">
            PINTEREST
          </a>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <span className="text-label text-muted-foreground">
          © 2024 THEBOSSIPGIRL. ALL RIGHTS RESERVED.
        </span>
        <div className="flex gap-8">
          <a href="#" className="text-label text-muted-foreground hover-underline">
            PRIVACY
          </a>
          <a href="#" className="text-label text-muted-foreground hover-underline">
            TERMS
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
