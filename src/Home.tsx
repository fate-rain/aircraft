import Header from "./components/Header.tsx";
import Part1 from "./components/Part1.tsx";
import Part2 from "./components/Part2.tsx";
import Part3 from "./components/Part3.tsx";
import Part4 from "./components/Part4.tsx";
import Title from "./components/Title.tsx";
import Footer from "./components/Footer.tsx";

function Home() {

  return (
      <div className="relative">
          <Header/>
          <div className="flex justify-center">
              <div className="max-w-[640px] sm:max-w-[1440px]">
                  <Title/>
                  <Part1/>
                  <Part2/>
                  <Part3/>
                  <Part4/>
              </div>
          </div>
          <Footer/>
      </div>
  )
}

export default Home
