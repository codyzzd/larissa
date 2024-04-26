"use client";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import "../sliders/embla.css";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function EmblaCarousel() {
  const OPTIONS: EmblaOptionsType = {
    align: "center",
    dragFree: true,
    loop: true,
  };
  // const SLIDE_COUNT = 6;
  // const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="flex flex-row justify-center mb-4 gap-2">
        <button
          className="embla__prev  w-10 h-10 bg-[#D6B469] rounded-lg hover:bg-yellow-200 "
          onClick={scrollPrev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          className="embla__next  w-10 h-10 bg-[#D6B469] rounded-lg hover:bg-yellow-200"
          onClick={scrollNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div className="embla__dots"></div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container [&_h3]:font-bold [&_h3]:text-sm ">
          <div className="embla__slide flex flex-col justify-center">
            <div
              className="rounded-[48px] h-[400px]"
              style={{
                backgroundImage: 'url("/images/areas/area_mate.avif")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}></div>
            <h3 className="p-3 bg-[#F5DDA7] -translate-y-1/2 w-fit rounded-2xl shadow-md self-center uppercase">
              Salário-Maternidade
            </h3>
          </div>
          <div className="embla__slide flex flex-col ">
            <div
              className="h-[400px] rounded-[48px]"
              style={{
                backgroundImage: 'url("/images/areas/area_apos.avif")',
                backgroundSize: "cover",
                backgroundPosition: "center left",
              }}></div>
            <h3 className="p-3 bg-[#F5DDA7] -translate-y-1/2 w-fit rounded-2xl shadow-md self-center uppercase">
              Aposentadoria por idade
            </h3>
          </div>
          <div className="embla__slide flex flex-col ">
            <div
              className="h-[400px] rounded-[48px]"
              style={{
                backgroundImage: 'url("/images/areas/area_inva.avif")',
                backgroundSize: "cover",
                backgroundPosition: "center right",
              }}></div>
            <h3 className="p-3 bg-[#F5DDA7] -translate-y-1/2 w-fit rounded-2xl shadow-md self-center uppercase">
              Aposentadoria por invalidez
            </h3>
          </div>
          <div className="embla__slide flex flex-col ">
            <div
              className="h-[400px] rounded-[48px]"
              style={{
                backgroundImage: 'url("/images/areas/area_doen.avif")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}></div>
            <h3 className="p-3 bg-[#F5DDA7] -translate-y-1/2 w-fit rounded-2xl shadow-md self-center uppercase">
              Auxílio-doença
            </h3>
          </div>
          <div className="embla__slide flex flex-col ">
            <div
              className="h-[400px] rounded-[48px]"
              style={{
                backgroundImage: 'url("/images/areas/area_loas.avif")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}></div>
            <h3 className="p-3 bg-[#F5DDA7] -translate-y-1/2 w-fit rounded-2xl shadow-md self-center uppercase">
              Loas para deficientes
            </h3>
          </div>
          <div className="embla__slide flex flex-col ">
            <div
              className="h-[400px] rounded-[48px]"
              style={{
                backgroundImage: 'url("/images/areas/area_old.avif")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}></div>
            <h3 className="p-3 bg-[#F5DDA7] -translate-y-1/2 w-fit rounded-2xl shadow-md self-center uppercase">
              Loas para idosos
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
