const Footer = () => {
  return (
    <footer className="bg-foreground py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="font-display text-xl font-bold tracking-wider text-background mb-2">
          EVENTO<span className="text-primary">2026</span>
        </p>
        <p className="text-background/50 text-sm">
          © {new Date().getFullYear()} Todos os direitos reservados. Edite livremente este site.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
