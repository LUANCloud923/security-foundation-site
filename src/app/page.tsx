import { isPlaceholderWhatsappUrl, siteConfig } from "@/config/site";

const included = [
  ["01", "Autenticação pronta", "Argon2id, JWT, refresh token e bloqueio após tentativas inválidas."],
  ["02", "Permissões sem gambiarra", "RBAC objetivo com papéis ADMIN e MEMBER."],
  ["03", "Multitenancy por empresa", "Isole dados e regras por organização desde a fundação."],
  ["04", "Auditoria relevante", "Registre ações importantes para entender o que aconteceu."],
  ["05", "Stack de produção", "PostgreSQL + Prisma com uma estrutura clara para evoluir."],
  ["06", "Ambiente reproduzível", "Docker para migrations, seed e testes, com CI incluído."],
];

const audience = [
  "Dev júnior construindo sua primeira API com responsabilidade.",
  "Freelancer que quer entregar uma base mais consistente.",
  "Quem está tirando um SaaS do papel.",
  "Quem quer entender a estrutura — não apenas copiar código.",
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

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main>
      <header className="container nav">
        <a className="brand" href="#inicio" aria-label="Security Foundation Kit — início">
          <span className="brand-mark" aria-hidden="true">S</span>
          <span>security<span>foundation</span></span>
        </a>
        <a className="nav-link" href="#incluido">O que está incluído <Arrow /></a>
      </header>

      <section className="hero container" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Base para Node.js · NestJS · PostgreSQL · Prisma</p>
          <h1>Comece sua API com <em>segurança</em> — sem perder semanas montando autenticação, permissões e multitenancy do zero.</h1>
          <p className="lead">Uma fundação de código clara para você construir APIs mais confiáveis, aprender com uma arquitetura real e focar no que diferencia seu produto.</p>
          <div className="hero-actions">
            <a className="button primary" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">Quero minha licença por R$147 <Arrow /></a>
            <a className="button secondary" href="#incluido">Ver o que está incluído</a>
          </div>
          {isPlaceholderWhatsappUrl && <p className="config-note">Link de compra configurável em <code>src/config/site.ts</code>.</p>}
          <p className="microcopy">Pagamento único · Licença comercial para um projeto</p>
        </div>
        <div className="terminal" aria-label="Demonstração de estrutura de segurança da API">
          <div className="terminal-top"><span /><span /><span /><code>security-foundation/api</code></div>
          <div className="terminal-content">
            <p><b>✓</b> authentication <i>argon2id + jwt</i></p>
            <p><b>✓</b> authorization <i>ADMIN · MEMBER</i></p>
            <p><b>✓</b> tenant isolation <i>organization scope</i></p>
            <p><b>✓</b> audit trail <i>tracked actions</i></p>
            <div className="terminal-line"><span>ready to build</span><strong>_</strong></div>
          </div>
        </div>
      </section>

      <section className="problem-section"><div className="container split-layout">
        <p className="section-label">O custo invisível</p>
        <div><h2>A API começa rápido. A parte delicada chega logo depois.</h2><p>Autenticação, permissões, empresas e logs de auditoria parecem detalhes até se tornarem decisões que se espalham por todo o projeto. É melhor começar com uma estrutura que você entende e consegue evoluir.</p></div>
      </div></section>

      <section className="container included-section" id="incluido">
        <div className="section-intro"><p className="section-label">O que está incluído</p><h2>Os blocos que uma API séria precisa desde o primeiro commit.</h2></div>
        <div className="included-grid">{included.map(([number, title, text]) => <article className="feature-card" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        <div className="documentation"><div><p className="section-label">Além do código</p><h3>Documentação passo a passo para você entender cada decisão.</h3></div><p>Não é uma caixa-preta. Explore a estrutura, rode os testes e adapte a base com segurança ao seu contexto.</p></div>
      </section>

      <section className="how-section"><div className="container"><div className="section-intro"><p className="section-label">Como funciona</p><h2>Da licença à sua primeira adaptação, sem enrolação.</h2></div><ol className="steps"><li><span>01</span><div><h3>Você compra</h3><p>Faça o pagamento único e garanta uma licença comercial.</p></div></li><li><span>02</span><div><h3>Recebe o código-fonte</h3><p>Acesse a base e a documentação para começar.</p></div></li><li><span>03</span><div><h3>Roda localmente</h3><p>Use Node 22 e Docker para subir o ambiente.</p></div></li><li><span>04</span><div><h3>Adapta ao seu projeto</h3><p>Entenda a arquitetura e molde-a ao seu produto.</p></div></li></ol></div></section>

      <section className="container audience-section"><div className="audience-copy"><p className="section-label">Para quem é</p><h2>Para construir melhor antes de construir maior.</h2><p>O kit encurta o caminho entre uma ideia e uma API com fundamentos que fazem sentido.</p></div><ul>{audience.map((item) => <li key={item}><span aria-hidden="true">↗</span>{item}</li>)}</ul></section>

      <section className="license-section"><div className="container license"><div><p className="section-label">Licença comercial</p><h2>Clara, simples, sem letras pequenas.</h2></div><div className="license-points"><p><b>✓</b> Pagamento único</p><p><b>✓</b> Um projeto por licença</p><p><b>✓</b> Pode estudar, adaptar e integrar</p><p><b>—</b> Não pode revender, redistribuir ou transformar em template concorrente</p></div></div></section>

      <section className="container offer" id="oferta"><div className="offer-panel"><p className="section-label">Sua fundação começa aqui</p><h2>Security<br /><em>Foundation Kit</em></h2><div className="price"><span>R$</span>147<small>pagamento único</small></div><p className="offer-description">Uma licença comercial para construir um projeto com uma base de segurança mais organizada.</p><a className="button primary full" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">Quero minha licença por R$147 <Arrow /></a><p className="microcopy centered">Uso comercial em um único projeto</p></div></section>

      <section className="container faq-section"><div className="section-intro"><p className="section-label">FAQ</p><h2>Perguntas que costumam aparecer antes do primeiro commit.</h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>

      <footer className="container footer"><a className="brand" href="#inicio"><span className="brand-mark" aria-hidden="true">S</span><span>security<span>foundation</span></span></a><div><p>© {year} Security Foundation Kit</p><p>Licença comercial para um projeto.</p></div><a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a></footer>
    </main>
  );
}
