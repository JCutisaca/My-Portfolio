import moment from "moment";
import { useTranslation } from "react-i18next";

export default function Exp() {
    const [t, i18n] = useTranslation("global");

    const getExp = () => {
        const ageExp = moment().diff(moment([2022, 8, 3]), "years");
        return ageExp;
    };    

    return (
        <div className="text-white rounded-3xl flex relative overflow-hidden aspect-square shadow-sm bg-blue-400/80 p-4 justify-center items-center">
            <div className="">
                <div className="flex justify-center items-center flex-col">
                    <p className="text-4xl md:text-8xl font-bold">
                        +{getExp()}
                    </p>
                    <p className="text-xs md:text-xl uppercase font-semibold text-center">
                        {getExp() === 1 ? t("expDescription") : t("expDescription2")}
                    </p>
                </div>
            </div>
        </div>
    );
}