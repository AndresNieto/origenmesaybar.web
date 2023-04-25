import { FunctionComponent } from "react";
import FoodsComponent from "../../components/FoodsComponent/FoodsComponent";

interface MenuPageComponentProps {

}

const MenuPageComponent: FunctionComponent<MenuPageComponentProps> = () => {
  return (
    <>
      <FoodsComponent />
    </>
  );
}

export default MenuPageComponent;