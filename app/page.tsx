import Image from "next/image";
import Link from "next/link";
import { EmblaCarousel } from "./sliders/areas";

//link cta
const linkcta = "https://wa.me/5545998126005";

export default function Home() {
  return (
    <>
      <div className="bg-[#F5DDA7]">
        {/* Hero */}
        <section
          style={{
            backgroundImage: 'url("/images/back_hero.avif")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <div className="container flex flex-col mx-auto px-6 py-8 md:px-8 md:py-16   xl:px-48 xl:py-20">
            <div id="logo" className="mb-8 flex md:justify-center">
              {/* <Image
                className=""
                src="/images/lg.svg"
                width={97}
                height={94}
                alt="Larissa Godomski"
              /> */}
            </div>

            <div id="hero_content" className="md:flex md:flex-row gap-8">
              <div className="space-y-4 md:w-[400px] flex flex-col justify-center ">
                <Image
                  className=""
                  src="/images/lg.svg"
                  width={97}
                  height={94}
                  alt="Larissa Godomski"
                />
                <h1 className="">
                  Seja<br></br> Bem-Vindo(a)
                </h1>
                <p className="xl:text-xl">
                  Nosso escritório de advocacia é dedicado a oferecer suporte
                  jurídico especializado em direito previdenciário.
                </p>
                <p className="xl:text-xl">
                  Aqui, comprometemo-nos a proporcionar soluções eficazes e
                  personalizadas para suas questões previdenciárias.
                </p>
                <Link href={linkcta} className="flex flex-row">
                  <p className="zapbutton">
                    <strong>Entre em contato</strong> e fale conosco
                  </p>
                </Link>
              </div>
              <div className="hidden md:w-1/2 md:flex justify-center -mb-44">
                <Image
                  className="w-full"
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
          <div className="container flex flex-col mx-auto px-6 py-8 space-y-4 md:flex-row md:gap-8 md:px-8 md:py-16   xl:px-48 xl:py-20 items-center">
            <div className="md:w-1/2">
              <Image
                className=""
                src="/images/lari.avif"
                width={534}
                height={661}
                alt="Foto de Larissa Godomski"
              />
            </div>
            <div className="space-y-4 md:w-1/2">
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

              <div className="flex w-fit space-x-3 border-[1px] rounded-full border-black py-3 px-6 items-center">
                <Image
                  className="w-[24px] h-[24px]"
                  src="/images/icon_xp.png"
                  width={24}
                  height={24}
                  alt="Icone da balança"
                />
                <p className="w-full md:w-auto">+5 Anos de experiência</p>
              </div>
              <div className="flex w-fit space-x-3 border-[1px] rounded-full border-black py-3 px-6 items-center ">
                <Image
                  className="w-[24px] h-[24px]"
                  src="/images/icon_law.png"
                  width={24}
                  height={24}
                  alt="Icone da balança"
                />
                <p className="w-full md:w-auto">
                  Especialista em direito previdenciário
                </p>
              </div>

              <Link href={linkcta} className="flex flex-row">
                <p className="zapbutton ">
                  <strong>Entre em contato</strong> e fale conosco
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Slider */}
        <section className="goldradial">
          <div className=" flex flex-col mx-auto  gap-4 text-center  py-8   md:py-16    xl:py-20">
            <h1>Áreas de especialização</h1>
            <p>
              Especializo-me em diversos benefícios previdenciários, incluindo:
            </p>
            <EmblaCarousel></EmblaCarousel>
          </div>
        </section>

        {/* Atendimento */}
        <section>
          <div className="container flex flex-col mx-auto md:text-center px-6 py-8 gap-4  md:px-8 md:py-16   xl:px-48 xl:py-20 items-center">
            <h1 className="text-center">Atendimento presencial e online</h1>
            <p className="md:self-center xl:text-xl xl:w-3/4 2xl:w-1/2 text-center">
              Entendemos que a comodidade é crucial, por isso oferecemos
              atendimento presencial e online. Independentemente de onde você
              esteja, estamos prontos para fornecer orientação jurídica
              personalizada e eficiente.
            </p>
            <div className="flex flex-col md:flex-row   gap-8 w-full my-8 2xl:w-3/4">
              <div
                className="w-full h-[400px] rounded-3xl  md:rounded-[64px] border-4 border-[#DFC181] md:w-1/2 xl:h-[500px]"
                style={{
                  backgroundImage: 'url("/images/b1.avif")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}></div>
              <div
                className="hidden md:block w-full h-[400px] rounded-3xl md:w-1/2 md:rounded-[64px]  xl:h-[500px] border-4 border-[#DFC181]"
                style={{
                  backgroundImage: 'url("/images/b2.avif")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}></div>
            </div>
            <Link href={linkcta} className="flex flex-row ">
              <p className="zapbutton ">
                <strong>Entre em contato</strong> e fale conosco
              </p>
            </Link>
          </div>
        </section>

        {/* Beneficios */}
        <section className="goldradial">
          <div className="container flex flex-col  mx-auto px-6 py-8  md:px-8 md:py-16   xl:px-48 xl:py-20  space-y-8 2xl:px-80 items-center ">
            <h1 className="text-center">
              Benefícios<br></br>previdenciários
            </h1>
            <ul className="space-y-4 [&>li]:flex [&>li]:flex-row [&>li]:gap-4 max-w-[600px]">
              <li className="">
                <Image
                  className="w-16 h-16"
                  src="/images/icon_apos.png"
                  width={64}
                  height={64}
                  alt="Icone Aposentadoria por idade"
                />
                <p>
                  <strong>Aposentadoria por idade:</strong> seja para
                  trabalhadores urbanos ou rurais, auxiliamos no processo de
                  aposentadoria por idade, garantindo que cada detalhe seja
                  tratado com a máxima atenção.
                </p>
              </li>
              <li>
                <Image
                  className="w-16 h-16"
                  src="/images/icon_inva.png"
                  width={64}
                  height={64}
                  alt="Icone Aposentadoria por invalidez"
                />
                <p>
                  <strong>Aposentadoria por invalidez:</strong> em casos de
                  incapacidade para o trabalho, oferecemos suporte para garantir
                  seus direitos à aposentadoria por invalidez.
                </p>
              </li>
              <li>
                <Image
                  className="w-16 h-16"
                  src="/images/icon_doen.png"
                  width={64}
                  height={64}
                  alt="Icone Auxílio-doença"
                />
                <p>
                  <strong>Auxílio-doença:</strong> orientamos e representamos
                  clientes que necessitam de auxílio-doença devido a condições
                  médicas que impedem a continuidade do trabalho.
                </p>
              </li>
              <li>
                <Image
                  className="w-16 h-16"
                  src="/images/icon_loas.png"
                  width={64}
                  height={64}
                  alt="Icone Loas para deficientes e idosos"
                />
                <p>
                  <strong>Loas para deficientes e idosos:</strong> auxiliamos na
                  obtenção do benefício de prestação continuada (loas) para
                  pessoas com deficiência ou idosos em situação de
                  vulnerabilidade.
                </p>
              </li>
              <li>
                <Image
                  className="w-16 h-16"
                  src="/images/icon_mate.png"
                  width={64}
                  height={64}
                  alt="Icone Salário-maternidade"
                />
                <p>
                  <strong>Salário-maternidade:</strong> oferecemos suporte para
                  mães garantirem seu direito ao salário-maternidade durante o
                  período de licença.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* Segurança */}
        <section>
          <div className="container flex flex-col md:flex-row mx-auto px-6 py-8 space-y-4 md:px-8 md:py-16 md:space-x-8 md:space-y-0 xl:px-48 xl:py-20 xl:space-x-12 2xl:px-80">
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
              <Link href={linkcta} className="flex flex-row">
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
