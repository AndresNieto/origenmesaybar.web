import { FunctionComponent } from "react";
import aboutImg from './../../assets/images/about.png'

interface AboutComponentProps {

}

const AboutComponent: FunctionComponent<AboutComponentProps> = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="about-img">
          <img src={aboutImg} />
        </div>

        <div className="about-text">
          <h2>Nuestras preparaciones <br /> Tienen historia.</h2>
          <p>Somos un restaurante de comida típica Colombiana, que ha trascendido a travez del tiempo
            innovando las preparaciones de quienes nos han visto crecer.
          </p>
          <p>Nos encargamos de mantener vivas las tradiciones culinarias, trabajando con autores
            gastronómicos de la región para llevar a tu mesa platos con historia.</p>
          <a href="https://api.whatsapp.com/send?phone=573045317663" target='_blank' className="btn">Quiero reservar una mesa.</a>
        </div>
      </section>
    </>
  );
}

export default AboutComponent;