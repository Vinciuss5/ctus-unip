import { MapPin, Mail, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-display uppercase tracking-[0.3em] text-sm mb-4">Junta-te a nós</p>
          <h2 className="section-title text-foreground mb-6">Contacto</h2>
          <p className="section-subtitle mx-auto">
            Queres participar ou saber mais? Entra em contacto connosco.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
          <div className="text-center p-8">
            <MapPin className="mx-auto mb-4 text-primary" size={28} />
            <p className="font-display text-lg font-semibold text-foreground mb-1">Local</p>
            <p className="text-muted-foreground text-sm">Auditório Principal<br />Universidade</p>
          </div>
          <div className="text-center p-8">
            <Mail className="mx-auto mb-4 text-primary" size={28} />
            <p className="font-display text-lg font-semibold text-foreground mb-1">Email</p>
            <p className="text-muted-foreground text-sm">evento@universidade.pt</p>
          </div>
          <div className="text-center p-8">
            <Instagram className="mx-auto mb-4 text-primary" size={28} />
            <p className="font-display text-lg font-semibold text-foreground mb-1">Instagram</p>
            <p className="text-muted-foreground text-sm">@evento2026</p>
          </div>
        </div>
        <div className="text-center">
          <a href="mailto:evento@universidade.pt" className="cta-button inline-block">
            Enviar Mensagem
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
