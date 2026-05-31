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

const testimonials = [
  {
    name: "Beatriz S.",
    context: "Mae do Miguel, 7 anos (TEA)",
    text: "Cheguei na terapia completamente esgotada. Meu marido havia me abandonado, me deixando sozinha com nosso filho. Eu vivia em modo automatico, com crises de ansiedade diarias e um peso que parecia nao ter fim.",
    result:
      "Hoje me sinto leve, segura e com esperanca novamente. Voltei a sorrir, a sonhar e a me sentir eu."
  },
  {
    name: "Fernanda L.",
    context: "Mae do Pedro, 9 anos (TEA)",
    text: "Eu tinha medo do futuro, medo de nao dar conta, medo do que seria do meu filho quando eu nao estivesse mais aqui. A terapia me ajudou a ressignificar tudo isso.",
    result:
      "Sinto paz, confianca e presenca. Estou vivendo o hoje com meu filho, e isso mudou completamente nossa relacao."
  },
  {
    name: "Luciana M.",
    context: "Mae da Laura, 6 anos (TEA)",
    text: "Foram anos de cobrancas, julgamentos e ausencia de apoio. Eu me sentia invisivel. A TRG me mostrou que eu nao preciso dar conta de tudo sozinha.",
    result:
      "Minha ansiedade diminuiu, meu corpo relaxou e minha alma descansou. Hoje sou uma mae mais leve."
  },
  {
    name: "Carla D.",
    context: "Mae do Arthur, 8 anos (TEA)",
    text: "Vivia com dores no corpo, tensao constante, insonia e uma exaustao que nada resolvia. Achava que era normal.",
    result:
      "Com a TRG, as dores diminuiram, minha respiracao voltou ao normal e minha mente finalmente silenciou."
  },
  {
    name: "Juliana P.",
    context: "Mae do Davi, 5 anos (TEA)",
    text: "Meu casamento acabou, fiquei sem ninguem para dividir as responsabilidades. Me sentia insuficiente e sobrecarregada.",
    result:
      "Hoje me sinto forte, capaz e em paz comigo mesma. Parei de me culpar e comecei a me acolher."
  },
  {
    name: "Patricia R.",
    context: "Mae do Enzo, 10 anos (TEA)",
    text: "Eu tinha crises de ansiedade, chorava sem motivo e vivia irritada. A TRG me ensinou a olhar para minhas dores com acolhimento.",
    result:
      "Hoje sou outra mulher. Mais leve, mais calma, mais segura. Meu filho sente essa mudanca todos os dias."
  }
];

const benefits = [
  "Voce entende melhor o que sente",
  "A carga mental diminui",
  "A culpa perde forca",
  "Sua autoestima se fortalece",
  "Mais leveza no dia a dia",
  "Decisoes mais conscientes"
];

const processSteps = [
  ["Acolhimento", "Um espaco seguro para voce ser ouvida sem julgamentos."],
  ["Reprocessamento", "Identificamos e trabalhamos registros emocionais que pesam."],
  ["Ressignificacao", "A experiencia ganha outro significado e deixa de te limitar."],
  ["Reconstrucao", "Voce fortalece sua identidade, seus limites e suas escolhas."],
  ["Mais leveza", "Mais presenca, equilibrio e liberdade para viver seu dia."]
];

const plans = [
  {
    name: "Sessao Avulsa",
    sessions: "1 sessao",
    pix: "R$220",
    parcels: "por sessao",
    total: "",
    saving: "",
    per: "R$220",
    badge: "",
    description:
      "Para conhecer o processo ou cuidar de uma demanda pontual com direcao terapeutica."
  },
  {
    name: "Plano Mensal",
    sessions: "4 sessoes",
    from: "De R$880",
    pix: "R$680 no PIX",
    parcels: "ou 4x de R$187",
    total: "Total parcelado: R$748",
    saving: "Economia: R$200",
    per: "R$170",
    badge: "",
    description:
      "Um primeiro ciclo estruturado para iniciar o cuidado com constancia."
  },
  {
    name: "Plano Transformacao",
    sessions: "12 sessoes",
    from: "De R$2.640",
    pix: "R$1.890 no PIX",
    parcels: "ou 12x de R$189",
    total: "Total: R$2.268",
    saving: "Economia: R$750",
    per: "R$157,50",
    badge: "Mais escolhido",
    description:
      "Um percurso consistente para trabalhar registros emocionais com mais profundidade."
  },
  {
    name: "Plano Reconstrucao Emocional",
    sessions: "24 sessoes",
    from: "De R$5.280",
    pix: "R$3.690 no PIX",
    parcels: "ou 12x de R$339",
    total: "Total: R$4.068",
    saving: "Economia: R$1.590",
    per: "R$153,75",
    badge: "Maior transformacao",
    description:
      "Um acompanhamento ampliado para quem deseja atravessar transformacoes profundas."
  },
  {
    name: "Plano Imersao de Reconstrucao",
    sessions: "30 sessoes",
    from: "De R$6.600",
    pix: "R$4.290 no PIX",
    parcels: "ou 12x de R$379",
    total: "Total: R$4.548",
    saving: "Economia: R$2.310",
    per: "R$143",
    badge: "Acompanhamento premium",
    description:
      "Acompanhamento premium para uma jornada profunda de reconstrucao emocional."
  }
];

const mobileSectionIds = new Set([
  "sobre",
  "como-funciona",
  "faq",
  "depoimentos",
  "planos",
  "projeto-social",
  "cta-final"
]);

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
            className={`art-image ${
              mobileSectionIds.has(section.id) ? "desktop-art-image" : ""
            }`}
          />

          {section.id === "sobre" ? <MobileAbout /> : null}
          {section.id === "como-funciona" ? <MobileTrg /> : null}
          {section.id === "faq" ? <MobileBenefits /> : null}
          {section.id === "depoimentos" ? <MobileTestimonials /> : null}
          {section.id === "planos" ? <MobilePlans /> : null}
          {section.id === "projeto-social" ? <MobileSocial /> : null}
          {section.id === "cta-final" ? <MobileFinal /> : null}

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

      <a
        href={wa(mainMessage)}
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp"
        aria-label="Conversar com Marcela no WhatsApp"
      >
        <span>WhatsApp</span>
      </a>
    </main>
  );
}

function MobileAbout() {
  return (
    <div className="mobile-rich-section mobile-about">
      <div className="mobile-photo-card">
        <Image
          src="/images/ref-01.png"
          alt="Marcela Valladares"
          width={1024}
          height={1536}
          className="mobile-photo"
          priority
        />
      </div>
      <p className="mobile-eyebrow">Minha historia</p>
      <h2>
        Uma trajetoria <span>de escuta, estudo e proposito.</span>
      </h2>
      <p className="mobile-intro">
        Ha mais de 12 anos, Marcela caminha ao lado de familias atipicas,
        mergulhando no universo TEA e compreendendo de perto os desafios
        emocionais que tantas maes enfrentam todos os dias.
      </p>
      <div className="mobile-feature-grid">
        <article>
          <strong>12+ anos</strong>
          <span>no universo TEA</span>
        </article>
        <article>
          <strong>ABA</strong>
          <span>experiencia que sustenta o cuidado</span>
        </article>
        <article>
          <strong>TRG</strong>
          <span>especializacao em reprocessamento emocional</span>
        </article>
        <article>
          <strong>Missao</strong>
          <span>cuidar de quem cuida</span>
        </article>
      </div>
    </div>
  );
}

function MobileTrg() {
  return (
    <div className="mobile-rich-section mobile-trg">
      <p className="mobile-eyebrow">O que e a TRG</p>
      <h2>
        Terapia que <span>reprocessa e transforma.</span>
      </h2>
      <p className="mobile-intro">
        A Terapia de Reprocessamento Generativo trabalha registros emocionais
        que continuam impactando a forma como voce sente, reage e se percebe no
        presente.
      </p>
      <div className="mobile-note">
        Nao se trata de apagar o que aconteceu, mas de transformar a forma como
        voce se relaciona com isso.
      </div>
      <div className="mobile-step-list">
        {processSteps.map(([title, text], index) => (
          <article key={title}>
            <span>{index + 1}</span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
      <a
        href={wa(mainMessage)}
        target="_blank"
        rel="noreferrer"
        className="mobile-primary-button"
      >
        Quero conversar com a Marcela
      </a>
    </div>
  );
}

function MobileBenefits() {
  return (
    <div className="mobile-rich-section mobile-benefits">
      <p className="mobile-eyebrow">O que muda na sua vida</p>
      <h2>
        Quando voce escolhe se cuidar, <span>muita coisa comeca a mudar.</span>
      </h2>
      <div className="mobile-benefit-list">
        {benefits.map((benefit) => (
          <article key={benefit}>
            <span>♡</span>
            <p>{benefit}</p>
          </article>
        ))}
      </div>
      <div className="mobile-note">
        Voce continua sendo a mesma mae amorosa. So que agora, mais inteira e
        com mais forca para seguir.
      </div>
    </div>
  );
}

function MobileTestimonials() {
  return (
    <div className="mobile-rich-section testimonials-mobile">
      <p className="mobile-eyebrow">Historias reais de transformacao</p>
      <h2>
        Maes que escolheram <span>se cuidar e transformar sua historia.</span>
      </h2>
      <p className="mobile-intro">
        Historias diferentes. Dores parecidas. Transformacoes reais.
      </p>

      <div className="testimonial-carousel" aria-label="Depoimentos">
        {testimonials.map((testimonial) => (
          <article key={testimonial.name} className="testimonial-card">
            <div className="testimonial-avatar">♡</div>
            <h3>{testimonial.name}</h3>
            <p className="testimonial-context">{testimonial.context}</p>
            <p>{testimonial.text}</p>
            <strong>{testimonial.result}</strong>
          </article>
        ))}
      </div>
      <p className="swipe-hint">Arraste para ver mais depoimentos</p>
    </div>
  );
}

function MobilePlans() {
  return (
    <div className="mobile-rich-section plans-mobile">
      <p className="mobile-eyebrow">Investimento</p>
      <h2>
        Planos que acompanham <span>sua jornada de cura.</span>
      </h2>
      <p className="mobile-intro">
        Quanto maior o plano, menor o valor por sessao.
      </p>

      <div className="mobile-plan-list">
        {plans.map((plan) => (
          <article key={plan.name} className="mobile-plan-card">
            {plan.badge ? <div className="plan-badge">{plan.badge}</div> : null}
            <p className="plan-sessions">{plan.sessions}</p>
            <h3>{plan.name}</h3>
            <p className="plan-description">{plan.description}</p>
            {plan.from ? <p className="plan-from">{plan.from}</p> : null}
            <p className="plan-pix">{plan.pix}</p>
            <p className="plan-parcels">{plan.parcels}</p>
            {plan.total ? <p className="plan-total">{plan.total}</p> : null}
            {plan.saving ? <p className="plan-saving">{plan.saving}</p> : null}
            <p className="plan-per">
              Apenas <span>{plan.per}</span> por sessao
            </p>
            <a
              href={wa(planMessage(plan.name))}
              target="_blank"
              rel="noreferrer"
              className="mobile-plan-button"
            >
              Quero saber mais sobre este plano
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

function MobileSocial() {
  return (
    <div className="mobile-rich-section mobile-social">
      <p className="mobile-eyebrow">Atendimento solidario</p>
      <h2>
        Projeto Colo <span>para Quem Cuida</span>
      </h2>
      <p className="mobile-intro">
        Uma iniciativa criada para tornar o cuidado emocional mais acessivel
        para maes atipicas que nao conseguem investir em um acompanhamento
        particular neste momento.
      </p>
      <div className="solidary-price">
        <span>Atendimento solidario</span>
        <strong>R$50</strong>
        <small>por sessao</small>
      </div>
      <div className="mobile-feature-grid">
        <article>
          <strong>Vagas limitadas</strong>
          <span>abertas apenas quando existe disponibilidade</span>
        </article>
        <article>
          <strong>Online</strong>
          <span>atendimento com privacidade</span>
        </article>
        <article>
          <strong>Seguro</strong>
          <span>com acolhimento e respeito a sua historia</span>
        </article>
      </div>
      <a
        href={wa(socialMessage)}
        target="_blank"
        rel="noreferrer"
        className="mobile-primary-button"
      >
        Quero uma vaga solidaria
      </a>
    </div>
  );
}

function MobileFinal() {
  return (
    <div className="mobile-rich-section mobile-final">
      <p className="mobile-eyebrow">Para finalizar</p>
      <h2>
        Talvez voce tenha passado anos cuidando de todos.
        <span>Agora e a sua vez.</span>
      </h2>
      <p className="mobile-intro">
        Sera um privilegio caminhar ao seu lado nesse processo de reconstrucao
        emocional.
      </p>
      <a
        href={wa(mainMessage)}
        target="_blank"
        rel="noreferrer"
        className="mobile-primary-button"
      >
        Quero conversar com a Marcela
      </a>
      <a
        href={instagramUrl}
        target="_blank"
        rel="noreferrer"
        className="mobile-secondary-link"
      >
        Acompanhar no Instagram
      </a>
      <p className="mobile-signature">
        Quando uma mae se cura, toda a familia floresce.
      </p>
    </div>
  );
}
