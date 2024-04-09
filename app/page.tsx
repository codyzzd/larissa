export default function Home() {
  return (
    <>
      <div className="bg-[#F5DDA7]">
        {/* Hero */}
        <section>
          <div className="container flex  mx-auto px-6 py-8">
            <div className="space-y-4">
              <h1 className="">Seja Bem-Vindo(a)</h1>
              <p>
                Nosso escritório de advocacia é dedicado a oferecer suporte
                jurídico especializado em direito previdenciário.
              </p>
              <p>
                Aqui, comprometemo-nos a proporcionar soluções eficazes e
                personalizadas para suas questões previdenciárias.
              </p>
              <p>Entre em contato e fale conosco</p>
            </div>
            <div className="hidden">FOTO</div>
          </div>
        </section>

        {/* About */}
        <section>
          <div className="container flex flex-col mx-auto px-6 py-8 space-y-4">
            <h1>Quem somos</h1>
            <p>
              Eu sou Larissa Gadomski, advogada especializada em direito
              previdenciário. Com uma paixão inabalável pela justiça social,
              dedico-me a ajudar indivíduos a obterem os benefícios
              previdenciários que merecem.
            </p>
            <p>
              Minha jornada no mundo jurídico começou com a firme convicção de
              que todos têm direito a uma aposentadoria digna e acesso aos
              benefícios previdenciários. Com anos de experiência e mais de mil
              casos de concessão, tenho orgulho de ter ajudado inúmeras pessoas
              a garantirem seus direitos no campo do direito previdenciário.
            </p>
          </div>
        </section>

        {/* Slider */}
        <section>
          <div className="container flex flex-col mx-auto px-6 py-8 space-y-4">
            <h1>Áreas de especialização</h1>
            <p>
              Especializo-me em diversos benefícios previdenciários, incluindo:
            </p>
          </div>
        </section>

        {/* Atendimento */}
        <section>
          <div className="container flex flex-col mx-auto px-6 py-8 space-y-4">
            <h1>Atendimento presencial e online</h1>
            <p>
              Entendemos que a comodidade é crucial, por isso oferecemos
              atendimento presencial e online. Independentemente de onde você
              esteja, estamos prontos para fornecer orientação jurídica
              personalizada e eficiente.
            </p>
          </div>
        </section>

        {/* Beneficios */}
        <section>
          <div className="container flex flex-col mx-auto px-6 py-8 space-y-4">
            <h1>Benefícios previdenciários</h1>
            <p>listinha</p>
          </div>
        </section>

        {/* Segurança */}
        <section>
          <div className="container flex flex-col mx-auto px-6 py-8 space-y-4">
            <div className="w-full h-[400px] rounded-3xl"
              style={{
                backgroundImage: 'url("/images/larissa1.avif")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}></div>
            <div className="space-y-4">
              <h1>Atendimento presencial e online</h1>
              <p>
                Entendemos que a comodidade é crucial, por isso oferecemos
                atendimento presencial e online. Independentemente de onde você
                esteja, estamos prontos para fornecer orientação jurídica
                personalizada e eficiente.
              </p>
              <p className="zapbutton">
                <strong>Entre em contato</strong> e fale conosco
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
