import { siteConfig } from "@/config/site";

const included = [
  ["auth", "Autenticação pronta", "Argon2id, JWT, refresh token e bloqueio após tentativas inválidas."],
  ["rbac", "RBAC objetivo", "Papéis ADMIN e MEMBER, com permissões fáceis de acompanhar."],
  ["tenant", "Multitenancy", "Estruture empresas e organizações desde a fundação."],
  ["audit", "Auditoria relevante", "Registre ações importantes para entender o que aconteceu."],
  ["database", "PostgreSQL + Prisma", "Uma camada de dados previsível e pronta para evoluir."],
  ["tooling", "Docker, testes e CI", "Migrations, seed, testes automatizados e pipeline incluídos."],
];

const audience = [
  "Dev júnior que quer aprender uma estrutura real na prática.",
  "Freelancer que busca uma base mais consistente para entregar.",
  "Quem está começando um SaaS com decisões bem organizadas.",
  "Quem quer adaptar e entender o código, em vez de só copiar.",
];

const faqs = [
  ["Funciona no Windows?", "Sim. O fluxo foi pensado para rodar com Node.js 22 e Docker também no Windows."],
  ["Preciso saber NestJS?", "Uma base de NestJS ajuda a aproveitar melhor o kit. A documentação passo a passo explica a estrutura para quem está aprendendo."],
  ["Posso alterar o código?", "Sim. Você pode estudar, adaptar e integrar o código ao projeto licenciado."],
  ["Posso usar em mais de um projeto?", "Não. Cada licença comercial é válida para um único projeto. Para outro projeto, adquira uma nova licença."],
  ["O produto garante segurança absoluta?", "Não. Segurança é um processo contínuo. O kit entrega uma fundação prática e bem estruturada, mas revisões, testes e decisões do seu contexto continuam essenciais."],
  ["Como recebo o produto?", "Após a confirmação da compra, você recebe as instruções de acesso ao código-fonte e à documentação."],
];

function Arrow() {
  return <span aria-hidden="true" className="arrow">→</span>;
}

function FeatureIcon({ type }: { type: string }) {
  return <span aria-hidden="true" className={`feature-icon ${type}`}><i /></span>;
}

function WhatsAppIcon() {
  return <span aria-hidden="true" className="whatsapp-icon"><i /></span>;
}

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main id="inicio">
      <header className="site-header">
        <nav className="container nav" aria-label="Navegação principal">
          <a className="brand" href="#inicio" aria-label="Security Foundation Kit — início">
            <span className="brand-mark" aria-hidden="true"><i /></span>
            <span>Security Foundation <b>Kit</b></span>
          </a>
          <div className="nav-links">
            <a href="#incluido">Incluído</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#licenca">Licença</a>
          </div>
          <a className="nav-cta whatsapp-nav" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer"><WhatsAppIcon /> Garantir licença <Arrow /></a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="version-badge"><span aria-hidden="true" /> Security Foundation Kit <b>v1.0.0</b></p>
            <h1>Comece sua API com <em>segurança</em>, sem montar tudo do zero.</h1>
            <p className="lead">Uma fundação pronta para Node.js, NestJS, PostgreSQL e Prisma — feita para você aprender construindo e avançar com mais clareza.</p>
            <div className="hero-actions">
              <a className="button primary hero-whatsapp-cta" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
                <span><span className="cta-main"><WhatsAppIcon /> Garantir licença por R$147 <Arrow /></span><small>Pagamento único • Licença para 1 projeto</small></span>
              </a>
              <a className="button secondary" href="#incluido">Ver o que está incluído</a>
            </div>
            <ul className="hero-proof" aria-label="Resumo da oferta">
              <li>Pagamento único</li><li>1 projeto por licença</li><li>Código + documentação</li>
            </ul>
          </div>

          <div className="code-window" aria-label="Mockup de editor de código com recursos de segurança">
            <div className="window-bar"><div className="window-dots"><i /><i /><i /></div><span>security-foundation-kit</span><span className="window-status">main</span></div>
            <div className="editor-body">
              <aside className="editor-sidebar" aria-hidden="true"><span>⌕</span><span>▣</span><span>◇</span><span>⚙</span></aside>
              <div className="file-tree" aria-hidden="true"><p>EXPLORER</p><b>▾ api</b><span>▾ src</span><span className="active-file">◆ auth</span><span>◇ users</span><span>◇ organizations</span><span>◇ audit</span><span>▸ prisma</span></div>
              <div className="code-area"><div className="tab-row"><span>auth.service.ts <i>×</i></span></div><pre><code><small>01</small><b>export class</b> AuthService {'{'}{"\n"}<small>02</small>  <b>async</b> signIn(dto) {'{'}{"\n"}<small>03</small>    <b>const</b> user = <b>await</b> users.find(dto);{"\n"}<small>04</small>    <b>await</b> audit.log({'{'} action: <em>&quot;AUTH_LOGIN&quot;</em> {'}'});{"\n"}<small>05</small>    <b>return</b> tokens.create(user);{"\n"}<small>06</small>  {'}'}{"\n"}<small>07</small>{'}'}</code></pre><div className="editor-terminal"><span>✓ tests passed</span><span>6 suites · 24 tests</span></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip"><div className="container"><span>Base técnica para</span><b>Node.js</b><b>NestJS</b><b>PostgreSQL</b><b>Prisma</b><b>Docker</b></div></section>

      <section className="problem-section"><div className="container split-layout reveal">
        <p className="section-kicker">O custo invisível</p>
        <div><h2>A API começa rápido. As decisões delicadas chegam logo depois.</h2><p>Autenticação, permissões, empresas e logs de auditoria parecem detalhes até se espalharem pelo projeto. Comece com uma estrutura que você entende e consegue evoluir.</p></div>
      </div></section>

      <section className="container included-section" id="incluido">
        <div className="section-heading reveal"><p className="section-kicker">O que está incluído</p><h2>Os blocos que uma API séria precisa desde o primeiro commit.</h2><p>Uma base prática, organizada e feita para ser estudada — não uma caixa-preta.</p></div>
        <div className="included-grid">{included.map(([icon, title, text], index) => <article className="feature-card reveal" key={title} style={{ "--delay": `${index * 65}ms` } as React.CSSProperties}><FeatureIcon type={icon} /><h3>{title}</h3><p>{text}</p><span className="card-index">0{index + 1}</span></article>)}</div>
        <div className="documentation reveal"><div><span className="doc-icon" aria-hidden="true">↗</span><div><p className="section-kicker">Além do código</p><h3>Documentação passo a passo para entender cada decisão.</h3></div></div><p>Explore a estrutura, rode os testes e adapte a base com segurança ao seu contexto.</p></div>
      </section>

      <section className="how-section" id="como-funciona"><div className="container"><div className="section-heading reveal"><p className="section-kicker">Como funciona</p><h2>Da licença à sua primeira adaptação, sem enrolação.</h2></div><ol className="steps reveal"><li><span>01</span><div><h3>Você compra</h3><p>Faça o pagamento único e garanta sua licença comercial.</p></div></li><li><span>02</span><div><h3>Recebe o acesso</h3><p>Tenha o código-fonte e a documentação em mãos.</p></div></li><li><span>03</span><div><h3>Roda localmente</h3><p>Use Node 22 e Docker para subir o ambiente.</p></div></li><li><span>04</span><div><h3>Adapta ao projeto</h3><p>Entenda a arquitetura e molde-a ao seu produto.</p></div></li></ol></div></section>

      <section className="container learning-section"><div className="learning-card reveal"><div><p className="section-kicker">Feito para quem quer aprender construindo</p><h2>Uma base que mostra o caminho enquanto você escreve o próximo passo.</h2><p>Veja como autenticação, regras de acesso, organizações e auditoria se conectam em um projeto que você pode explorar com calma.</p></div><ul>{audience.map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul></div></section>

      <section className="license-section" id="licenca"><div className="container license reveal"><div><p className="section-kicker">Licença comercial</p><h2>Clara, simples, sem letras pequenas.</h2></div><div className="license-points"><p><b>✓</b> Pagamento único</p><p><b>✓</b> Um projeto por licença</p><p><b>✓</b> Pode estudar, adaptar e integrar</p><p><b>—</b> Não pode revender, redistribuir ou transformar em template concorrente</p></div></div></section>

      <section className="container offer" id="oferta"><div className="offer-panel reveal"><div className="offer-copy"><p className="section-kicker">Sua fundação começa aqui</p><h2>Security Foundation <em>Kit</em></h2><p>Menos tempo montando a base. Mais contexto para construir o seu produto.</p></div><div className="offer-price"><div><span>R$</span><strong>147</strong></div><p>pagamento único</p></div><ul className="offer-list"><li>Licença para 1 projeto</li><li>Código-fonte completo</li><li>Documentação passo a passo</li></ul><a className="button primary full offer-whatsapp-cta" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer"><WhatsAppIcon /> Garantir minha licença <Arrow /></a><p className="secure-note"><span aria-hidden="true">✓</span> Acesso enviado após a confirmação da compra</p></div></section>

      <section className="container faq-section"><div className="section-heading reveal"><p className="section-kicker">FAQ</p><h2>Perguntas antes do primeiro commit.</h2></div><div className="faq-list reveal">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>

      <footer className="container footer"><a className="brand" href="#inicio"><span className="brand-mark" aria-hidden="true"><i /></span><span>Security Foundation <b>Kit</b></span></a><div><p>© {year} Security Foundation Kit</p><p>Licença comercial para um projeto.</p></div><a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a></footer>
    </main>
  );
}
