import React, { useEffect } from "react";
import moment from "moment";
import { useTranslation } from "react-i18next";

export default function Age() {
  const [t, i18n] = useTranslation("global");

  const getAge = () => {
    const age = moment().diff(moment([1998, 10, 3]), "years");
    return age;
  };

  return (
    <div className="text-white rounded-3xl flex relative overflow-hidden aspect-square shadow-sm bg-[#ff0000] p-4 justify-center items-center">
      <div className="">
        <div className="flex justify-center items-center flex-col">
          <p className="text-xs md:text-lg uppercase font">
            {t("birthday.age")}
          </p>
          <p className="text-4xl md:text-8xl font-bold">{getAge()}</p>
          <p className="text-xs md:text-xl uppercase font-semibold text-center">
            {t("birthday.years-old")}
          </p>
        </div>
      </div>
    </div>
  );
}