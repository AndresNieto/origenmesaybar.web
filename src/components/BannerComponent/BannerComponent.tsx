import { FunctionComponent, useEffect, useState } from "react";
import HomeImage from '../../assets/images/IndioSombra.png';

interface BannerComponentProps {

}

const BannerComponent: FunctionComponent<BannerComponentProps> = () => {

  const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    reset: true
  });

  sr.reveal('.home-text', { delay: 200, origin: 'left' });
  sr.reveal('.home-img', { delay: 200, origin: 'right' });
  //sr.reveal('.container, .about, .menu, .contact', { delay: 200, origin: 'bottom' });

  return (
    <section className="home" id="home">
      <div className="home-text">
        <h1>Tradiciones culinarias con <span className="fontRed">Origen</span> </h1>
        <p>Promovemos los sabores y saberes de la gastronomía Colombiana.</p>
        <a href="https://menu.fu.do/origenmesaybar" target='_blank' className="btn backgroundBlue">Quiero ver el menú!</a>
      </div>

      <div className="home-img">
        <img src={HomeImage} />
      </div>
    </section>
  )
}

export default BannerComponent;