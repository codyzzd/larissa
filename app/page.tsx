import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-[#F5DDA7]">
        {/* Hero */}
        <section  style={{
              backgroundImage: 'url("/images/back_hero.avif")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
          <div
            className="container flex flex-col mx-auto px-6 py-8"
           >
            <div id="logo" className="mb-8 flex md:justify-center">
              <Image
                className=""
                src="/images/lg.svg"
                width={97}
                height={94}
                alt="Larissa Godomski"
              />
            </div>

            <div id="hero_content" className="md:flex md:flex-row">
              <div className="space-y-4 md:w-1/2 flex flex-col justify-center">
                <h1 className="">
                  Seja<br></br> Bem-Vindo(a)
                </h1>
                <p>
                  Nosso escritório de advocacia é dedicado a oferecer suporte
                  jurídico especializado em direito previdenciário.
                </p>
                <p>
                  Aqui, comprometemo-nos a proporcionar soluções eficazes e
                  personalizadas para suas questões previdenciárias.
                </p>
                <Link href="" className="flex flex-row">
                  <p className="zapbutton">
                    <strong>Entre em contato</strong> e fale conosco
                  </p>
                </Link>
              </div>
              <div className="hidden md:w-1/2 md:flex justify-center ">
                <Image
                  className="w-3/4"
                  src="/images/estatua.avif"
                  width={464}
                  height={763}
                  alt="Larissa Godomski"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section>
          <div className="container flex flex-col mx-auto px-6 py-8 space-y-4 ">
            <div>
              <Image
                className=""
                src="/images/lari.avif"
                width={534}
                height={661}
                alt="Foto de Larissa Godomski"
              />
            </div>
            <div className="space-y-4">
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
                benefícios previdenciários. Com anos de experiência e mais de
                mil casos de concessão, tenho orgulho de ter ajudado inúmeras
                pessoas a garantirem seus direitos no campo do direito
                previdenciário.
              </p>

<div><p>+5 Anos de experiência</p></div>
<div><p>Especialista em direito previdenciário</p></div>


              <Link href="" className="flex flex-row">
                <p className="zapbutton ">
                  <strong>Entre em contato</strong> e fale conosco
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Slider */}
        <section className="goldradial">
          <div className="container flex flex-col mx-auto px-6 py-8 space-y-4 ">
            <h1>Áreas de especialização</h1>
            <p>
              Especializo-me em diversos benefícios previdenciários, incluindo:
            </p>
          </div>
        </section>

        {/* Atendimento */}
        <section>
          <div className="container flex flex-col mx-auto md:text-center px-6 py-8 space-y-4 md:px-8 md:py-16   xl:px-48 xl:py-20 ">
            <h1 className=" md:self-center ">
              Atendimento presencial e online
            </h1>
            <p className="md:self-center xl:text-xl xl:w-3/4">
              Entendemos que a comodidade é crucial, por isso oferecemos
              atendimento presencial e online. Independentemente de onde você
              esteja, estamos prontos para fornecer orientação jurídica
              personalizada e eficiente.
            </p>
            <div className="flex flex-col md:flex-row  md:justify-center gap-8">
              <div
                className="w-full h-[400px] rounded-3xl md:w-1/2 md:rounded-[64px] xl:w-1/2 xl:h-[500px] border-4 border-[#DFC181]"
                style={{
                  backgroundImage: 'url("/images/b1.avif")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}></div>
              <div
                className="hidden md:block w-full h-[400px] rounded-3xl md:w-1/2 md:rounded-[64px] xl:w-1/2 xl:h-[500px] border-4 border-[#DFC181]"
                style={{
                  backgroundImage: 'url("/images/b2.avif")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}></div>
            </div>
            <Link href="" className="flex flex-row">
              <p className="zapbutton ">
                <strong>Entre em contato</strong> e fale conosco
              </p>
            </Link>
          </div>
        </section>

        {/* Beneficios */}
        <section className="goldradial">
          <div className="container flex flex-col md:flex-row mx-auto px-6 py-8 space-y-4 md:px-8 md:py-16 md:space-x-8 md:space-y-0 xl:px-48 xl:py-20 xl:space-x-12 ">
            <h1 className="">Benefícios previdenciários</h1>
            <ul className="space-y-4">
              <li>
                <strong>Aposentadoria por idade:</strong> seja para
                trabalhadores urbanos ou rurais, auxiliamos no processo de
                aposentadoria por idade, garantindo que cada detalhe seja
                tratado com a máxima atenção.
              </li>
              <li>
                <strong>Aposentadoria por invalidez:</strong> em casos de
                incapacidade para o trabalho, oferecemos suporte para garantir
                seus direitos à aposentadoria por invalidez.
              </li>
              <li>
                <strong>Auxílio-doença:</strong> orientamos e representamos
                clientes que necessitam de auxílio-doença devido a condições
                médicas que impedem a continuidade do trabalho.
              </li>
              <li>
                <strong>Loas para deficientes e idosos:</strong> auxiliamos na
                obtenção do benefício de prestação continuada (loas) para
                pessoas com deficiência ou idosos em situação de
                vulnerabilidade.
              </li>
              <li>
                <strong>Salário-maternidade:</strong> oferecemos suporte para
                mães garantirem seu direito ao salário-maternidade durante o
                período de licença.
              </li>
            </ul>
          </div>
        </section>

        {/* Segurança */}
        <section>
          <div className="container flex flex-col md:flex-row mx-auto px-6 py-8 space-y-4 md:px-8 md:py-16 md:space-x-8 md:space-y-0 xl:px-48 xl:py-20 xl:space-x-12">
            <div
              className="w-full h-[400px] rounded-3xl md:w-1/2 md:rounded-[64px] xl:w-1/2 xl:h-[500px]"
              style={{
                backgroundImage: 'url("/images/larissa1.avif")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}></div>
            <div className="space-y-4 xl:space-y-8 md:w-1/2 justify-center  flex flex-col ">
              <h1>A segurança de um futuro melhor</h1>
              <p className="xl:text-xl">
                Estamos aqui para ajudar a construir um futuro seguro para você.
                Entre em contato conosco para uma consulta inicial e permita-nos
                guiar você pelos intricados caminhos do direito previdenciário.
              </p>
              <Link href="" className="flex flex-row">
                <p className="zapbutton ">
                  <strong>Entre em contato</strong> e fale conosco
                </p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
