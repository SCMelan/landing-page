import React from "react";

import HTML from "../../scss/photo/HTML.png";
import CSS from "../../scss/photo/CSS.png";
import JS from "../../scss/photo/JS.png";
import TS from "../../scss/photo/TS.png";
import ReactIcon from "../../scss/photo/React.svg";
import Redux from "../../scss/photo/Redux.png";
import RRD from "../../scss/photo/RRD.png";
import Axios from "../../scss/photo/Axios.png";
import Figma from "../../scss/photo/Figma.png";
import Sass from "../../scss/photo/Sass.png";
import Tailwind from "../../scss/photo/Tailwind.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import Modal from "../modalComponent";
import { setModalActive } from "../../redux/modalSlice";
import { addText, StackEnum } from "../../redux/textSlice/modalText";
import { useAppDispatch } from "../../TS/customHooks";

export interface IStack {
  src: string;
  alt: string;
}
const stack: IStack[] = [
  { src: HTML, alt: "HTML" },
  { src: CSS, alt: "CSS" },
  { src: JS, alt: "JS" },
  { src: TS, alt: "TS" },
  { src: ReactIcon, alt: "React" },
  { src: Redux, alt: "ReudxInfo" },
  { src: RRD, alt: "RRD" },
  { src: Axios, alt: "Axios" },
  { src: Figma, alt: "Figma" },
  { src: Sass, alt: "Sass" },
  { src: Tailwind, alt: "Tailwind" },
];

const StackInformation: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="mobile_stack">
      <p className="stack_text">Мой стэк:</p>
      <div className="stack_main">
        {
          <Swiper
            slidesPerView={7}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {stack.map((stack) => {
              return (
                <SwiperSlide key={stack.alt}>
                  <img
                    src={stack.src}
                    alt={stack.alt}
                    onClick={() => {
                      dispatch(setModalActive());
                      dispatch(addText({ code: stack.alt as StackEnum }));
                    }}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        }
      </div>
      <Modal stack={stack} />
    </div>
  );
};

export default StackInformation;
