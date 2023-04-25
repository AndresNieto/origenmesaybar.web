import { FunctionComponent } from "react";
import AboutComponent from "../../components/AboutComponent/AboutComponent";
import BannerComponent from "../../components/BannerComponent/BannerComponent";
import CategoriesComponent from "../../components/CategoriesComponent/CategoriesComponent";
import FoodsComponent from "../../components/FoodsComponent/FoodsComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import PopularDishesComponent from "../../components/PopularDishesComponent/PopularDishesComponent";

interface HomeComponentProps {

}

const HomeComponent: FunctionComponent<HomeComponentProps> = () => {
  return (
    <>
      <BannerComponent />
      <CategoriesComponent />
      <AboutComponent />
      <PopularDishesComponent />
    </>
  );
}

export default HomeComponent;