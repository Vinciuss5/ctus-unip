import heroImg from "@/assets/hero-event.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Evento Académico 2025"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1024}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <p className="font-display text-primary uppercase tracking-[0.4em] text-sm md:text-base mb-4 animate-fade-in-up">
          Ano Académico 2025/2026
        </p>
        <h1 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tight text-primary-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          O Evento<br />Está de Volta
        </h1>
        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-xl font-light mb-10 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          Revive os melhores momentos de 2025 e prepara-te para a edição que vai marcar este ano.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <a href="#gallery" className="cta-button">Ver Galeria 2025</a>
          <a href="#contact" className="cta-button-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-background">
            Inscrever-se 2026
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
