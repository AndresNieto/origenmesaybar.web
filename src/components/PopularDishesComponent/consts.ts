import { IDish } from "../../models/IDish";
import cocidoImg from './../../assets/images/cocido.png';
import viudoImg from './../../assets/images/viudo.png';
import arrozCartageneroImg from './../../assets/images/ArrozCartagenero.jpeg';
import cazuelaImg from './../../assets/images/cazuela.jpg';

export const POPULAR_DISHES: Array<IDish> = [
  {
    id: 1,
    foodType: 'Tipicos',
    name: 'Cocido Boyacense',
    image: cocidoImg,
    description: 'El plato típico de las raices Boyacenses.',
    price: 30,
    stars: 5,
  },
  {
    id: 1,
    foodType: 'Tipicos',
    name: 'Viudo de Capaz',
    image: viudoImg,
    description: 'El plato típico de las raices Boyacenses.',
    price: 36,
    stars: 5,
  },
  {
    id: 1,
    foodType: 'Tipicos',
    name: 'Cazuela de mariscos',
    image: cazuelaImg,
    description: 'El plato típico de las raices Boyacenses.',
    price: 40,
    stars: 5,
  },
  {
    id: 1,
    foodType: 'Tipicos',
    name: 'Arroz cartagenero',
    image: arrozCartageneroImg,
    description: 'El plato típico de las raices Boyacenses.',
    price: 40,
    stars: 5,
  },
];

