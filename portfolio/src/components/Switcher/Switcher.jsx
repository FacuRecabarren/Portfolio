import { useState } from "react";
import { useTranslation } from "react-i18next";

const Switcher = () => {

    const [idioma, setIdioma] = useState(false)

  const { i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
    setIdioma(!idioma);
}
  
  return (
    <div className="flex items-center">
        <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1706704501/Portfolio%20FR/icons8-usa-96_dlp0zf.png" alt="" className="w-6 h-6 mr-2 xl:w-8 xl:h-8"/>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div onClick={changeLanguage} className="w-11 h-6 bg-secondary peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-palette-500 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-secondary  after:border-palette-500 after:border-2 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
      </label>
      <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1706704682/Portfolio%20FR/icons8-argentina-96_hata74.png" alt="" className="w-6 h-6 ml-2 xl:w-8 xl:h-8"/>
    </div>
  );
};

export default Switcher;
