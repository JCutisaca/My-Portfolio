import { useTranslation } from "react-i18next";


export default function CvEs() {

    const [t, i18n] = useTranslation("global");

    const file = "/pdf/CV_ES.pdf";

    return (
        <div>
            <a href={file} download>
                <button type="button">
                    {t("cvEsTextDownload")}
                </button>
            </a>
        </div>
    );
}