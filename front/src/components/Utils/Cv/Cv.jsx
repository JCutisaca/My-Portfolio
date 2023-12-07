import { useTranslation } from "react-i18next";


export default function Cv() {

    const [t, i18n] = useTranslation("global");

    const file = "/pdf/CV.pdf";

    return (
        <div>
            <a href={file} download>
                <button type="button">
                    {t("cvEnTextDownload")}
                </button>
            </a>
        </div>
    );
}
