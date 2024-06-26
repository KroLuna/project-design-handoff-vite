import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";
import { Welcome } from "../../components/Welcome/Welcome";
import { YogaCards } from "../../components/YogaCards/YogaCards";
import { CarouselMoments } from "../../components/CarouselMoments/CarouselMoments";
import { Signup } from "../../components/Signup/Signup";
import { Footer } from "../../components/Footer/Footer";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <div className="grid-parent">
        <Header />
        <Hero />
        <Welcome />
        <YogaCards />
        <CarouselMoments />
        <Signup />
        <Footer />
      </div>
    </>
  );
};
