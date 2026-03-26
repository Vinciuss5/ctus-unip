const days = [
  {
    day: "Dia 1",
    date: "A definir",
    events: [
      { time: "09:00", title: "Abertura Oficial", desc: "Cerimónia de abertura com discurso do reitor" },
      { time: "10:30", title: "Keynote Speaker", desc: "Palestra principal sobre inovação" },
      { time: "14:00", title: "Workshops", desc: "Sessões práticas paralelas" },
      { time: "18:00", title: "Networking", desc: "Momento de convívio e coffee break" },
    ],
  },
  {
    day: "Dia 2",
    date: "A definir",
    events: [
      { time: "09:00", title: "Painéis de Debate", desc: "Discussões temáticas com especialistas" },
      { time: "11:00", title: "Apresentação de Projetos", desc: "Exposição dos melhores trabalhos" },
      { time: "14:30", title: "Masterclass", desc: "Sessão avançada com profissionais do setor" },
      { time: "20:00", title: "Jantar de Gala", desc: "Evento social e entrega de prémios" },
    ],
  },
];

const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-display uppercase tracking-[0.3em] text-sm mb-4">Programa</p>
          <h2 className="section-title text-foreground">Edição 2026</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {days.map((d) => (
            <div key={d.day}>
              <div className="mb-8">
                <h3 className="font-display text-3xl font-bold text-foreground">{d.day}</h3>
                <p className="text-primary uppercase tracking-widest text-sm">{d.date}</p>
              </div>
              <div className="space-y-6">
                {d.events.map((e, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="text-muted-foreground font-display text-lg font-semibold w-16 shrink-0 group-hover:text-primary transition-colors">
                      {e.time}
                    </div>
                    <div className="border-l-2 border-border group-hover:border-primary transition-colors pl-6 pb-2">
                      <h4 className="font-display text-lg font-semibold text-foreground">{e.title}</h4>
                      <p className="text-muted-foreground text-sm">{e.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
