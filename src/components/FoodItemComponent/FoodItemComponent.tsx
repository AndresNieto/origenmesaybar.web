import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { IDish } from "../../models/IDish";
import StarsComponent from "../StarsComponent/StarsComponent";
import style from './FoodItem.module.css';
import classNames from 'classnames';


interface FoodItemComponentProps {
  dishInfo: IDish;
}

const FoodItemComponent: FunctionComponent<FoodItemComponentProps> = ({
  dishInfo: {
    name,
    price,
    image,
    description,
    stars,
  } }) => {

  const navigate = useNavigate();

  const handleRoute = () => {
    navigate(`/foods/${name}`);
  }
  return (
    <div className={classNames('transform duration-700 hover:shadow-xl hover:scale-105  rounded-lg ', style.mainFoodContainer)}>
      <div className={style.foodImageContainer}>
        <img src={image} className={style.popularDishImage} />
      </div>
      <div className={style.foodNameContainer}>
        <div className={style.foodName}>
          <h4>{name}</h4>
          <div className={style.foodPriceContainer}>
            <h5>${price}</h5>
          </div>
        </div>
        <p className={style.foodDescription}>{description}</p>
      </div>


    </div>
    // <div className={classNames('transform duration-700 hover:shadow-xl hover:scale-105 p-2 rounded-lg ', style.foodContainer)}>
    //   <div className={style.foodImageContainer}>
    //     <img src={image} className={style.popularDishImage} />
    //     <div className={style.foodNameContainer}>
    //       <h4>{name}</h4>
    //       <p>{description}</p>
    //     </div>
    //     <div className={style.foodPriceContainer}>
    //       <h5>${price}</h5>
    //     </div>
    //   </div>

    /* <div className="foodImageContainer">
      <img src={image} className='popularDishImage' />
    </div>
    <div className="foodDescriptionContainer">
      <div className="menu-text">
        <div className="menu-left">
          <h4>{name}</h4>
        </div>
        <div className="menu-right">
          <h5>${price}</h5>
        </div>
      </div>
      <p>{description}</p>
      <StarsComponent starsQuantity={stars} /> */
    // </div >

    //</div >
    // <div className="bg-white border border-white transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
    //   <span className="bg-lightBlue rounded-full text-white text-sm px-4 py-1 inline-block mb-4 poppins">{foodType}</span>
    //   {/* <img className="w-64 mx-auto transform transition duration-300 hover:scale-105" src={image} alt="" /> */}
    //   <div className="flex flex-col items-center my-3 space-y-2">
    //     <h1 className="text-mainBlue poppins text-lg">{title}</h1>
    //     <p className="text-mainBlue poppins text-sm text-center">{description.slice(0, 50)}</p>
    //     <h2 className="text-mainBlue poppins text-2xl font-bold">${price}</h2>
    //     <button className="bg-orange text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105"
    //       onClick={handleRoute}>Ver detalles</button>
    //   </div>
    // </div>
  )
}

export default FoodItemComponent;