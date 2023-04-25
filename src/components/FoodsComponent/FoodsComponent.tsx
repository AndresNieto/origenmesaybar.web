import { FunctionComponent, useEffect, useState } from "react";
import { IDish } from "../../models/IDish";
import { stringToUpperCase } from "../../shared/utils";
import FoodItemComponent from "../FoodItemComponent/FoodItemComponent";
import SearchBarComponent from "../SearchBarComponent/SearchBarComponent";
import { DEFAULT_FOODS, FOOD_CATEGORIES } from "./consts";
import SkeletonComponent from "./SkeletonComponent";
import styles from './FoodsComponent.module.css';
import classNames from "classnames";

interface FoodsComponentProps {

}

const FoodsComponent: FunctionComponent<FoodsComponentProps> = () => {
  const [menuTab, setMenuTab] = useState('Entradas')
  const [loading, setLoading] = useState(false)
  const [foods, setfoods] = useState(DEFAULT_FOODS);
  //const [foods] = useFetch();


  const handleMenuTabs = ({ target: { id: categoryName } }: any) => {
    console.log(categoryName);

    setMenuTab(categoryName)
  }

  const handleSearch = ({ target: { value } }: any) => {
    const foodsFiltered = DEFAULT_FOODS.filter((food: IDish) => JSON.stringify(food).includes(value));
    setfoods(foodsFiltered);
  };

  const isActiveTab = (categoryName: any) => menuTab === categoryName;


  return (
    <section className={classNames(styles.bgImage, 'my-12 max-w-screen-2xl mx-auto px-1')}>
      <SearchBarComponent handleChange={handleSearch} />
      <div className="flex items-center justify-center md:space-x-16 space-x-4 poppins overflow-x-auto px-10 cursor-pointer ">
        {FOOD_CATEGORIES.map((categoryName) => (
          <p
            id={categoryName}
            className={isActiveTab(categoryName) ?
              "active_menu_tab bg-lightBlue text-white" :
              "menu_tab"}
            onClick={handleMenuTabs}
          >{stringToUpperCase(categoryName)}</p>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {foods.filter((item) => menuTab === item.foodType).map(item => (
          loading ? <SkeletonComponent key={item.id} /> : <FoodItemComponent key={item.id} dishInfo={item} />
        ))}
      </div>

    </section>

  )
}

export default FoodsComponent;