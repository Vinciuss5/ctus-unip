import { Calendar, Users, Award } from "lucide-react";

const stats = [
  { icon: Calendar, value: "3 Dias", label: "De Evento" },
  { icon: Users, value: "500+", label: "Participantes" },
  { icon: Award, value: "20+", label: "Palestras" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary font-display uppercase tracking-[0.3em] text-sm mb-4">Sobre o Evento</p>
            <h2 className="section-title text-foreground mb-6">
              Uma Experiência<br />Académica Única
            </h2>
            <p className="section-subtitle mb-8">
              Em 2025 realizámos um evento que reuniu estudantes, professores e profissionais num ambiente de partilha de conhecimento e networking. Este ano, voltamos com uma edição ainda mais ambiciosa.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Palestras inspiradoras, workshops práticos, exposições de projetos e momentos de convívio — tudo pensado para enriquecer o teu percurso académico e profissional. Não percas a oportunidade de fazer parte desta comunidade.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="bg-card border border-border p-8 text-center">
                <s.icon className="mx-auto mb-4 text-primary" size={32} />
                <p className="font-display text-3xl font-bold text-foreground">{s.value}</p>
                <p className="text-muted-foreground text-sm uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
