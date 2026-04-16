import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | CatchUp Tech",
  description: "Política de Privacidade e Governança de Dados da CatchUp Tech.",
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "1. Coleta de Ativos e Dados de Contato",
      content: (
        <div className="space-y-4">
          <p>
            Para acelerar a sua jornada digital e garantir uma comunicação assertiva, coletamos informações em pontos estratégicos de interação:
          </p>
          <div className="space-y-3 pl-4 border-l-2 border-primary/20">
            <p>
              <span className="font-bold text-foreground">Comunicação Direta (E-mail e Formulários):</span> Ao enviar uma mensagem através do nosso site para o endereço oficial ou utilizar nossos formulários de contato, coletamos seu nome, e-mail, telefone e o teor da sua demanda.
            </p>
            <p>
              <span className="font-bold text-foreground">Finalidade:</span> Esses dados são utilizados exclusivamente para o Diagnóstico Estratégico do seu desafio operacional e para a formulação de propostas de soluções de alto impacto. O número de telefone é utilizado para agilizar o alinhamento técnico, quando necessário.
            </p>
            <p>
              <span className="font-bold text-foreground">Retenção:</span> Mantemos esses registros apenas pelo período necessário para o atendimento consultivo ou por obrigações legais, garantindo que o titular possa solicitar a exclusão a qualquer momento.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2. Pilares de Governança: Soberania Digital",
      content: (
        <div className="space-y-4">
          <p>Diferente de modelos de prateleira, nossa arquitetura de dados segue o princípio de Soberania Digital:</p>
          <ul className="list-none space-y-3">
            <li className="flex items-start gap-3">
              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <p><span className="font-bold text-foreground">Controle do Parceiro:</span> Você detém a posse e o controle sobre os dados processados pelas ferramentas que desenvolvemos.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <p><span className="font-bold text-foreground">Transparência Ética:</span> Não comercializamos, não compartilhamos e não utilizamos dados de parceiros para fins de marketing de terceiros.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <p><span className="font-bold text-foreground">Minimalismo Técnico:</span> Coletamos o volume mínimo de dados necessário para garantir a alta performance e a segurança das rotinas de software.</p>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "3. Segurança sob Engenharia de Precisão",
      content: (
        <div className="space-y-4">
          <p>Protegemos seus ativos digitais com rigor técnico de nível empresarial:</p>
          <ul className="list-none space-y-3">
            <li className="flex items-start gap-3">
              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <p><span className="font-bold text-foreground">Criptografia em Trânsito:</span> Todas as informações enviadas via formulários web utilizam protocolos TLS/SSL para garantir que os dados cheguem íntegros e protegidos ao nosso ecossistema.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <p><span className="font-bold text-foreground">Privacy by Design:</span> Nossas soluções são desenvolvidas com segurança nativa, utilizando práticas de Clean Code para mitigar vulnerabilidades e proteger a integridade da operação.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <p><span className="font-bold text-foreground">Infraestrutura Resiliente:</span> Utilizamos provedores de infraestrutura de alta confiabilidade que cumprem rigorosamente com a LGPD e normas internacionais de segurança cibernética.</p>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "4. Direitos do Titular (LGPD)",
      content: (
        <div className="space-y-4">
          <p>Em total conformidade com a legislação vigente, garantimos aos nossos interlocutores o direito de:</p>
          <ul className="list-none space-y-3">
            <li className="flex items-start gap-3">
              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <p><span className="font-bold text-foreground">Acesso e Confirmação:</span> Saber quais dados estão sob custódia da CatchUp Tech.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <p><span className="font-bold text-foreground">Correção e Atualização:</span> Manter a integridade das suas informações estratégicas e de contato.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <p><span className="font-bold text-foreground">Eliminação:</span> Solicitar o encerramento do tratamento e a exclusão definitiva de seus registros, desde que não haja impedimento por obrigação legal ou contratual.</p>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "5. Transferência e Integração de Sistemas",
      content: (
        <p>
          Caso a solução desenhada exija integração com APIs de terceiros (serviços de pagamento, nuvem ou ERPs), a CatchUp Tech garante que tais integrações sigam protocolos rígidos de segurança, mantendo a governança e evitando a fragmentação da soberania dos dados do parceiro.
        </p>
      ),
    },
    {
      title: "6. Contato e Gestão de Privacidade",
      content: (
        <div className="space-y-4">
          <p>
            Para exercer seus direitos ou esclarecer dúvidas técnicas sobre a governança de seus ativos, entre em contato diretamente com nosso departamento de engenharia: <a href="mailto:catchuptech@outlook.com" className="text-foreground font-bold hover:text-primary transition-colors">catchuptech@outlook.com</a>
          </p>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <div className="bg-secondary border-b border-white/5 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight uppercase italic mb-6">
            Política de Privacidade <br />
            <span className="text-primary">e Governança de Dados</span>
          </h1>
          <div className="flex items-center gap-4 text-muted font-medium">
            <span>CatchUp Tech</span>
            <div className="w-1 h-1 rounded-full bg-muted/30" />
            <span>Vigência: 2026</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        <div className="prose prose-slate max-w-none">
          <p className="text-xl text-foreground/90 leading-relaxed font-medium mb-16">
            Na CatchUp Tech, a privacidade não é tratada apenas como uma conformidade legal, mas como um requisito de <span className="text-foreground font-bold">Engenharia de Precisão</span>. Esta política estabelece como protegemos e governamos os dados de nossos parceiros e visitantes, garantindo a sua <span className="text-foreground font-bold">Soberania Digital</span> desde o primeiro contato.
          </p>

          <div className="space-y-16">
            {sections.map((section, index) => (
              <div key={index}>
                <section className="space-y-8">
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight uppercase px-0 border-none">
                    {section.title}
                  </h2>
                  <div className="text-foreground/80 text-lg leading-relaxed font-medium">
                    {section.content}
                  </div>
                </section>
                {index < sections.length - 1 && (
                  <hr className="mt-16 border-border" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-border flex flex-col items-center gap-2 text-sm text-foreground/60 font-medium">
          <p>Última atualização: Abril de 2026</p>
          <p>CatchUp Tech E-mail: <a href="mailto:catchuptech@outlook.com" className="text-primary hover:text-foreground transition-colors font-bold">catchuptech@outlook.com</a></p>
        </div>
      </div>
    </main>
  );
}
