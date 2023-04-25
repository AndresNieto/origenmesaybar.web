import { FunctionComponent } from "react";
import soupIcon from '../../assets/images/b1.png';
import styles from './Categories.module.css';
import { CATEGORIES } from "./consts";

interface CategoriesComponentProps {

}

const CategoriesComponent: FunctionComponent<CategoriesComponentProps> = () => {
  return (
    <>
      <section className="">
        <div className="main-text">
          <h2>Nuestras Especialidades</h2>
          <p>Lunes a Miercoles: 12.00m - 05.00 pm | Jueves a Domingo: 12.00m - 09.00 pm</p>
        </div>

        <div className="container-box">
          {CATEGORIES.map((category: any) => (
            <div className="c-mainbx">
              <div className={styles.containerImg}>
                <img src={category.icon} />
              </div>
              <div className="container-text">
                <p>{category.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default CategoriesComponent;