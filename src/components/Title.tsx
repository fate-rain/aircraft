import Cloud from "./Cloud.tsx";
import CcDesign from "./CcDesign.tsx";

function Title() {
    return (
        <div className="flex justify-center mt-[153px] relative">
            <CcDesign className="max-w-[1441px]"/>
            <Cloud className="absolute -top-[25px] left-1/2 translate-x-[230px] w-[140px]"/>
        </div>
    )
}

export default Title
