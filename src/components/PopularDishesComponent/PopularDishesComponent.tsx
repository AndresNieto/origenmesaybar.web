import { FunctionComponent } from "react";
import { IDish } from "../../models/IDish";
import StarsComponent from "../StarsComponent/StarsComponent";
import { POPULAR_DISHES } from "./consts";

interface PopularDishesComponentProps {

}

const PopularDishesComponent: FunctionComponent<PopularDishesComponentProps> = () => {
  return (
    <>
      <section className="menu" id="menu">
        <div className="main-text">
          <h2>Platos insignia de la casa</h2>
        </div>

        <div className="menu-content">
          {POPULAR_DISHES.map((dish: IDish) => (
            <div className="row transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
              <img src={dish.image} className='popularDishImage' />
              <div className="menu-text">
                <div className="menu-left">
                  <h4>{dish.name}</h4>
                </div>
                <div className="menu-right">
                  <h5>${dish.price}</h5>
                </div>
              </div>
              <p>{dish.description}</p>
              <StarsComponent starsQuantity={dish.stars} />
            </div>
          ))}
        </div>
        <div className="btn-left">
          <a href="https://api.whatsapp.com/send?phone=573045317663" target='_blank' className="btn backgroundRed">
            Ver menú completo
          </a>
        </div>

      </section>
    </>
  );
}

export default PopularDishesComponent;