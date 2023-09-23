import Features from "@/src/components/features/Features";
import Hero from "@/src/components/Hero";
import Header from "@/src/components/layouts/Header";
import Seperator from "@/src/components/util/Seperator";
import Footer from "@/src/components/layouts/Footer";

const Home=()=>{
  return (
    <>
     <Header/>
     <Hero/>
     <Seperator/>
     <Seperator/>
     {/* <Features/>
     <Seperator/>
    
     <Seperator/> */}
      <Footer/>
    </>
  )
}
export default Home;