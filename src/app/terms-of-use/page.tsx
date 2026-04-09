import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso | CatchUp Tech",
  description: "Termos de Uso e Condições de Serviço da CatchUp Tech.",
};

export default function TermsOfUsePage() {
  const sections = [
    {
      title: "1. Introdução",
      content: (
        <p>
          Estes Termos de Uso descrevem como o projeto CatchUp Tech estabelece a relação com seus usuários. Nosso compromisso é garantir a transparência e a segurança jurídica em todas as interações mediadas pela ferramenta.
        </p>
      ),
    },
    {
      title: "2. Coleta de Dados",
      content: (
        <div className="space-y-4">
          <p>A aplicação solicita e processa apenas os dados estritamente necessários para sua operação básica, o que pode incluir:</p>
          <ul className="list-none space-y-3">
            <li className="flex items-start gap-3">
              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <p><span className="font-bold text-secondary">Dados de Identificação:</span> Nome de usuário ou e-mail e telefone (se aplicável ao login).</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <p><span className="font-bold text-secondary">Logs de Sistema:</span> Informações técnicas coletadas automaticamente para diagnóstico de erros e melhoria contínua de performance.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <p><span className="font-bold text-secondary">Dados de Uso:</span> Preferências de interface e configurações salvas localmente para otimizar sua experiência.</p>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "3. Uso das Informações",
      content: (
        <div className="space-y-4">
          <p>As informações transitadas via plataforma são utilizadas exclusivamente para:</p>
          <ul className="list-none space-y-2 pl-4 border-l-2 border-primary/20">
            <li>Operar, manter e fornecer os recursos essenciais do sistema.</li>
            <li>Personalizar a experiência de navegação e uso.</li>
            <li>Enviar comunicações técnicas, alertas de status ou atualizações de segurança.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "4. Segurança e Armazenamento",
      content: (
        <p>
          Adotamos práticas de segurança de padrão industrial para proteger os dados contra acessos não autorizados, perda ou divulgação. Os dados são processados em ambientes resilientes e, sempre que a arquitetura permitir, aplicamos criptografia nativa.
        </p>
      ),
    },
    {
      title: "5. Compartilhamento com Terceiros",
      content: (
        <div className="space-y-4">
          <p>A CatchUp Tech não vende, aluga ou cede dados de usuários para terceiros. O compartilhamento ocorre apenas:</p>
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">I.</span>
              <p>Quando houver obrigatoriedade legal ou ordem judicial.</p>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">II.</span>
              <p>Com provedores de serviços essenciais (como hospedagem ou infraestrutura em nuvem), estritamente sob contratos de confidencialidade.</p>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "6. Direitos do Usuário",
      content: (
        <p>
          Garantimos ao usuário o direito de solicitar o acesso, a correção ou a exclusão definitiva de seus dados a qualquer momento, em total conformidade com a Lei Geral de Proteção de Dados (LGPD) e demais legislações vigentes.
        </p>
      ),
    },
    {
      title: "7. Alterações nestes Termos",
      content: (
        <div className="space-y-4">
          <p>
            Estes termos podem ser atualizados periodicamente para refletir melhorias técnicas ou mudanças regulatórias. Recomendamos a revisão constante deste documento.
          </p>
          <p className="pt-4">
            Em caso de dúvidas técnicas ou jurídicas, entre em contato: <a href="mailto:catchuptech@outlook.com" className="text-secondary font-bold hover:text-primary transition-colors">catchuptech@outlook.com</a>
          </p>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-secondary border-b border-white/5 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight uppercase italic mb-6">
            Termos de Uso <br />
            <span className="text-primary">e Condições de Serviço</span>
          </h1>
          <div className="flex items-center gap-4 text-slate-300 font-medium">
            <span>CatchUp Tech</span>
            <div className="w-1 h-1 rounded-full bg-slate-500" />
            <span>Última atualização: Abril de 2026</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        <div className="prose prose-slate max-w-none">
          <p className="text-xl text-muted leading-relaxed font-medium mb-16">
            Ao utilizar nossos serviços, você concorda com os termos estabelecidos a seguir. A CatchUp Tech prioriza a <span className="text-secondary font-bold">Transparência Ética</span> e a <span className="text-secondary font-bold">Segurança Digital</span> como base de todas as nossas soluções de software.
          </p>

          <div className="space-y-16">
            {sections.map((section, index) => (
              <div key={index}>
                <section className="space-y-8">
                  <h2 className="text-2xl lg:text-3xl font-bold text-secondary tracking-tight uppercase px-0 border-none">
                    {section.title}
                  </h2>
                  <div className="text-muted text-lg leading-relaxed font-medium">
                    {section.content}
                  </div>
                </section>
                {index < sections.length - 1 && (
                  <hr className="mt-16 border-slate-100" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-slate-100 flex flex-col items-center gap-2 text-sm text-muted font-medium">
          <p>Última atualização: Abril de 2026</p>
          <p>Responsável: <span className="text-secondary font-bold">Administração Catch Up</span></p>
          <p>E-mail: <a href="mailto:catchuptech@outlook.com" className="text-primary hover:text-secondary transition-colors font-bold">catchuptech@outlook.com</a></p>
        </div>
      </div>
    </main>
  );
}
