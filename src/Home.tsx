import CcDesign from "./components/CcDesign.tsx";
import Header from "./components/Header.tsx";
import Part1 from "./components/Part1.tsx";
import Part2 from "./components/Part2.tsx";

function Home() {

  return (
      <>
          <Header/>
          <div className="flex justify-center">
              <div className="max-w-[1440px]">
                  <CcDesign/>
                  <Part1/>
                  <Part2/>
              </div>
          </div>
      </>
  )
}

export default Home
