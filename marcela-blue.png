import Image from "next/image";

const whatsappBase = "https://wa.me/5521997411017";
const instagramUrl = "https://www.instagram.com/maeatipica.terapia/";

function wa(message: string) {
  return `${whatsappBase}?text=${encodeURIComponent(message)}`;
}

const mainMessage =
  "Ola Marcela.\n\nConheci seu trabalho atraves da sua pagina e gostaria de saber mais sobre os atendimentos da Terapia TRG para maes atipicas.";

const socialMessage =
  "Ola Marcela.\n\nGostaria de entrar na lista de interesse do Projeto Colo para Quem Cuida e saber se existem vagas sociais disponiveis.";

function planMessage(plan: string) {
  return `Ola Marcela.\n\nTenho interesse no plano ${plan}.\n\nGostaria de receber mais informacoes.`;
}

type Hotspot = {
  label: string;
  href: string;
  x: number;
  y: number;
  w: number;
  h: number;
  external?: boolean;
};

type ArtSection = {
  id: string;
  aliases?: string[];
  src: string;
  alt: string;
  width: number;
  height: number;
  hotspots?: Hotspot[];
};

const navHotspots: Hotspot[] = [
  { label: "Sobre", href: "#sobre", x: 37, y: 2, w: 5, h: 5 },
  { label: "Como funciona", href: "#como-funciona", x: 43, y: 2, w: 10, h: 5 },
  { label: "Beneficios", href: "#beneficios", x: 54, y: 2, w: 8, h: 5 },
  { label: "Planos", href: "#planos", x: 62, y: 2, w: 7, h: 5 },
  { label: "Depoimentos", href: "#depoimentos", x: 68, y: 2, w: 10, h: 5 },
  { label: "Projeto Social", href: "#projeto-social", x: 78, y: 2, w: 10, h: 5 },
  { label: "FAQ", href: "#faq", x: 88, y: 2, w: 5, h: 5 },
  {
    label: "Instagram",
    href: instagramUrl,
    x: 93,
    y: 1.2,
    w: 4.5,
    h: 5.6,
    external: true
  }
];

const sections: ArtSection[] = [
  {
    id: "sobre",
    src: "/images/ref-01.png",
    alt: "Sobre Marcela Valladares, trajetoria, formacao e missao",
    width: 1024,
    height: 1536
  },
  {
    id: "como-funciona",
    src: "/images/ref-02.png",
    alt: "O que e a TRG e como funciona a terapia",
    width: 1023,
    height: 1537,
    hotspots: [
      {
        label: "Quero conversar com a Marcela",
        href: wa(mainMessage),
        x: 55,
        y: 92.2,
        w: 23,
        h: 4.6,
        external: true
      }
    ]
  },
  {
    id: "faq",
    aliases: ["beneficios"],
    src: "/images/ref-03.png",
    alt: "Como a TRG pode transformar sua vida",
    width: 1024,
    height: 1536,
    hotspots: [
      ...navHotspots,
      {
        label: "Quero agendar sessoes",
        href: wa(mainMessage),
        x: 5,
        y: 94.7,
        w: 21,
        h: 4.4,
        external: true
      },
      {
        label: "Atendimento social TRG",
        href: "#projeto-social",
        x: 28,
        y: 94.7,
        w: 20,
        h: 4.4
      },
      {
        label: "Fale comigo no WhatsApp",
        href: wa(mainMessage),
        x: 52,
        y: 94.7,
        w: 18,
        h: 4.4,
        external: true
      },
      {
        label: "Instagram inferior",
        href: instagramUrl,
        x: 73,
        y: 94.7,
        w: 22,
        h: 4.4,
        external: true
      },
      {
        label: "WhatsApp flutuante",
        href: wa(mainMessage),
        x: 93.1,
        y: 89.5,
        w: 5.4,
        h: 4.6,
        external: true
      }
    ]
  },
  {
    id: "depoimentos",
    src: "/images/ref-04.png",
    alt: "Depoimentos de maes que escolheram se cuidar e transformaram sua historia",
    width: 1024,
    height: 1536,
    hotspots: navHotspots
  },
  {
    id: "planos",
    src: "/images/ref-05.png",
    alt: "Planos de investimento para Terapia TRG",
    width: 1023,
    height: 1537,
    hotspots: [
      {
        label: "Sessao avulsa",
        href: wa(planMessage("Sessao Avulsa")),
        x: 3.6,
        y: 17.7,
        w: 44,
        h: 8.6,
        external: true
      },
      {
        label: "Plano Mensal",
        href: wa(planMessage("Plano Mensal")),
        x: 3,
        y: 30,
        w: 46,
        h: 24.6,
        external: true
      },
      {
        label: "Plano Transformacao",
        href: wa(planMessage("Plano Transformacao")),
        x: 51,
        y: 30,
        w: 46,
        h: 24.6,
        external: true
      },
      {
        label: "Plano Reconstrucao Emocional",
        href: wa(planMessage("Plano Reconstrucao Emocional")),
        x: 3,
        y: 56,
        w: 46,
        h: 24.3,
        external: true
      },
      {
        label: "Plano Imersao de Reconstrucao",
        href: wa(planMessage("Plano Imersao de Reconstrucao")),
        x: 51,
        y: 56,
        w: 46,
        h: 24.3,
        external: true
      },
      {
        label: "Pronta para dar o primeiro passo",
        href: wa(mainMessage),
        x: 58,
        y: 95.2,
        w: 37,
        h: 4.2,
        external: true
      }
    ]
  },
  {
    id: "projeto-social",
    src: "/images/ref-06.png",
    alt: "Projeto Colo para Quem Cuida e atendimento solidario",
    width: 1023,
    height: 1537,
    hotspots: [
      {
        label: "Quero uma vaga solidaria",
        href: wa(socialMessage),
        x: 6.2,
        y: 88.8,
        w: 44.3,
        h: 5.4,
        external: true
      }
    ]
  },
  {
    id: "cta-final",
    src: "/images/ref-07.png",
    alt: "Obrigada por chegar ate aqui, quero conversar com a Marcela",
    width: 1024,
    height: 1536,
    hotspots: [
      {
        label: "Quero conversar com a Marcela",
        href: wa(mainMessage),
        x: 23.5,
        y: 73.7,
        w: 53,
        h: 5,
        external: true
      }
    ]
  }
];

export default function Home() {
  return (
    <main className="art-page">
      <h1 className="sr-only">
        Marcela Valladares - Terapia TRG para maes atipicas
      </h1>

      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className="art-section"
          aria-label={section.alt}
        >
          {section.aliases?.map((alias) => (
            <span key={alias} id={alias} className="art-anchor" />
          ))}
          <Image
            src={section.src}
            alt={section.alt}
            width={section.width}
            height={section.height}
            priority={index === 0}
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="art-image"
          />

          {section.hotspots?.map((hotspot, hotspotIndex) => (
            <a
              key={`${section.id}-${hotspot.label}-${hotspotIndex}`}
              href={hotspot.href}
              target={hotspot.external ? "_blank" : undefined}
              rel={hotspot.external ? "noreferrer" : undefined}
              aria-label={hotspot.label}
              title={hotspot.label}
              className="art-hotspot"
              style={{
                left: `${hotspot.x}%`,
                top: `${hotspot.y}%`,
                width: `${hotspot.w}%`,
                height: `${hotspot.h}%`
              }}
            />
          ))}
        </section>
      ))}
    </main>
  );
}
