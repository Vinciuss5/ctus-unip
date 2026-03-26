import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";
import event4 from "@/assets/event-4.jpg";
import event5 from "@/assets/event-5.jpg";
import event6 from "@/assets/event-6.jpg";

const photos = [
  { src: event1, title: "Networking", span: "md:col-span-1 md:row-span-1" },
  { src: event2, title: "Keynote", span: "md:col-span-1 md:row-span-2" },
  { src: event3, title: "Workshops", span: "md:col-span-1 md:row-span-1" },
  { src: event4, title: "Cerimónia", span: "md:col-span-2 md:row-span-1" },
  { src: event5, title: "Gala", span: "md:col-span-1 md:row-span-1" },
  { src: event6, title: "Exposição", span: "md:col-span-1 md:row-span-1" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-display uppercase tracking-[0.3em] text-sm mb-4">Memórias</p>
          <h2 className="section-title text-foreground">Galeria 2025</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {photos.map((p, i) => (
            <div key={i} className={`gallery-card aspect-[4/3] ${p.span}`}>
              <img src={p.src} alt={p.title} loading="lazy" width={800} height={600} />
              <div className="gallery-overlay">
                <p className="font-display text-lg uppercase tracking-wider text-primary-foreground">{p.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
