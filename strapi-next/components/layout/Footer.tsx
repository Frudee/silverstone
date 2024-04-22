import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col gap-[27px] py-[50px] bg-[#d9d9d9] px-4 lg:px-[10%] xl:px-[20%]">
      <div>
        <Image className="" src={logo} alt="logo" height={50} />
        <span className="text-[12px] leading-[12px] italic">
          Инновационные решения для чистого производства. Оптимизируйте ваш
          процесс фильтрации с нами.
        </span>
      </div>
      <button className="uppercase underline text-[12px] font-bold w-fit">
        Подпишитесь на наши новости &gt;
      </button>
      <nav>
        <ul className="flex flex-col underline gap-3 text-sm">
          <li>
            <Link href="/">Главная</Link>
          </li>
          <li>
            <Link href="/catalogue">Каталог</Link>
          </li>
          <li>
            <Link href="/about">О нас</Link>
          </li>
          <li>
            <Link href="/contacts">Контакты</Link>
          </li>
        </ul>
      </nav>
      <div className="flex flex-col gap-3 text-sm">
        <h5 className="uppercase font-bold">Челябинск</h5>
        <div className="flex flex-col gap-[5px]">
          <span className="underline">office5@lvd-lamp.ru</span>
          <span>8 351 214-42-40</span>
          <span>454045, г. Челябинск, ул. Телеграфная, 46</span>
        </div>
      </div>
      <div className="flex flex-col gap-3 text-sm">
        <h5 className="uppercase font-bold">Казань</h5>
        <div className="flex flex-col gap-[5px]">
          <span className="underline">office5@lvd-lamp.ru</span>
          <span>8 351 214-42-40</span>
          <span>454045, г. Челябинск, ул. Телеграфная, 46</span>
        </div>
      </div>
      <span className="block w-full h-[1px] bg-[#b4b4b4]"></span>
      <span className="italic text-xs text-center">
        © 2024г. ООО СильверСтоун. Все права защищены. 
      </span>
      <span className="italic text-xs text-center">made by Frudee</span>
    </footer>
  );
};

export default Footer;
