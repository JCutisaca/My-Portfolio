import HTMLIcon from "../Utils/IconsTechnologies/HTMLIcon";
import CSSIcon from "../Utils/IconsTechnologies/CSSIcon";
import JavaScriptIcon from "../Utils/IconsTechnologies/JavaScriptIcon";
import ReactIcon from "../Utils/IconsTechnologies/React.Icon";
import ReduxIcon from "../Utils/IconsTechnologies/ReduxIcon";
import NextIcon from "../Utils/IconsTechnologies/NextIcon";
import TailwindIcon from "../Utils/IconsTechnologies/TailwindIcon";
import NodeJsIcon from "../Utils/IconsTechnologies/NodeJsIcon";
import ExpressIcon from "../Utils/IconsTechnologies/ExpressIcon";
import SequelizeIcon from "../Utils/IconsTechnologies/SequelizeIcon";
import PostgreSQLIcon from "../Utils/IconsTechnologies/PostgreSQLIcon";
import TypeScriptIcon from "../Utils/IconsTechnologies/TypeScriptIcon";
import PythonIcon from "../Utils/IconsTechnologies/PythonIcon";
import DjangoIcon from "../Utils/IconsTechnologies/DjangoIcon";
import AntDesignIcon from "../Utils/IconsTechnologies/AntDesignIcon";
import MySQLIcon from "../Utils/IconsTechnologies/MySQLIcon";
import MongoDBIcon from "../Utils/IconsTechnologies/MongoDBIcon";
import GitIcon from "../Utils/IconsTechnologies/GitIcon";

export default function Technologies() {
    return (
        <>
            <div className="grid grid-cols-3 aspect-square col-span-1 place-content-center place-items-center gap-3 md:gap-8 lg:gap-6 p-4 md:p-4 bg-[#e32551] dark:bg-[#e32551] rounded-3xl relative overflow-hidden col-span-1 shadow-sm text-lg md:text-2xl lg:text-5xl text-center text-[#ffffffde]">
                <HTMLIcon />
                <CSSIcon />
                <JavaScriptIcon />
                <ReactIcon />
                <ReduxIcon />
                <NextIcon />
                <TailwindIcon />
                <NodeJsIcon />
                <ExpressIcon />
            </div>

            <div className="grid grid-cols-3 aspect-square col-span-1 place-content-center place-items-center gap-3 md:gap-8 lg:gap-6 p-4 md:p-4 bg-[#e32551] dark:bg-[#e32551] rounded-3xl relative overflow-hidden col-span-1 shadow-sm text-lg md:text-2xl lg:text-5xl text-center text-[#ffffffde]">
                <SequelizeIcon />
                <PostgreSQLIcon />
                <TypeScriptIcon />
                <PythonIcon />
                <DjangoIcon />
                <AntDesignIcon />
                <MySQLIcon />
                <MongoDBIcon />
                <GitIcon />
            </div>
        </>
    );
}