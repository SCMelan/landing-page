import React from "react";

import { Link } from "react-router-dom";

import myPhoto from "../../scss/photo/myPhoto.jpeg";
import pizza from "../../scss/photo/Pizza.svg";
import iLink from "../../scss/photo/iLink.png";
import Pixlpark from "../../scss/photo/Pixlpark.svg";
import Sputnik from "../../scss/photo/Sputnik.svg";
import SG from "../../scss/photo/SG.png";
import LP from "../../scss/photo/LP.svg";

//Логика для динамического возраста
const currentDate: number = Number(new Date());
const birthYear: number = Number(new Date("2000/03/17"));
const currentAge = Math.floor((currentDate - birthYear) / 31536000000);
//--------------------------------

const MainInformation: React.FC = () => {
  return (
    <div className="info_main">
      <img src={myPhoto} alt="Фотография" className="photo_main" />
      <div className="mobile_block">
        <div className="back_grd">
          <p className="prj_text">Мои проекты:</p>
          <div className="prj_img">
            <Link to="https://scmelan.github.io/SG-Promo-page/" target="_blank">
              <img src={SG} alt="Star Guardian Bag" />
            </Link>
            <Link to="https://scmelan.github.io/Pizza-Shop/" target="_blank">
              <img src={pizza} alt="Pizza" />
            </Link>
            <img
              src={LP}
              alt="LP"
              onClick={() => alert("Вы находитесь на данном сайте")}
            />
            <Link
              to="https://scmelan.github.io/iLink-tryout-task/"
              target="_blank"
            >
              <img src={iLink} alt="Тестовое задание для iLink" />
            </Link>
            <Link
              to="https://scmelan.github.io/sputnik-tryout-task/"
              target="_blank"
            >
              <img src={Sputnik} alt="Тестовое задание для ООО Спутник" />
            </Link>
            <Link
              to="https://github.com/SCMelan/pixlpark-tryout-task"
              target="_blank"
            >
              <img src={Pixlpark} alt="Тестовое задание для Pixlpark" />
            </Link>
          </div>
        </div>
        <div className="bio_main">
          <div className="info_part1">
            <strong className="str_text">Антонов Кирилл Юрьвич</strong>
            <p className="age">17.03.2000</p>
          </div>
          <div className="info_part2">
            <p>
              <strong>Город:</strong> Кемерово
            </p>
            <p>
              <strong>Пол:</strong> Мужской <span className="spear">♂️</span>
            </p>
            <p>
              <strong>Возраст:</strong> {currentAge}
            </p>
          </div>
          <p>
            <strong>О себе:</strong> Приветствую, меня зовут Кирилл, на данный
            момент нахожусь в поисках работы по новому для себя напрвлению,
            ранее окончил ВУЗ по напрвлению "Менеджемент организации", получил
            красный диплом по данному направлению (ср.балл - 4.86), но к
            программированию всегда лежала душа, по этому после получения
            диплома я приступил к изучению Frontend направления, сейчас
            занимаюсь изучением новых технологий{" "}
          </p>
          <p>
            <strong>Хобби:</strong> собирать компьютеры и изучать их мат. часть,
            играть в настольные игры, играть в различные онлайн игры в
            сообществе друзей и коллег.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainInformation;
