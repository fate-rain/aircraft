import Cloud from "./Cloud.tsx";
import CcDesign from "./CcDesign.tsx";

function Title() {
    return (
        <div className="flex justify-center mt-[153px] relative">
            <CcDesign className="max-w-[350px] sm:max-w-[1441px]"/>
            <Cloud className="absolute -top-[25px] left-1/2 translate-x-[50px] sm:translate-x-[130px] w-[50px] sm:w-[140px]"/>
        </div>
    )
}

export default Title
