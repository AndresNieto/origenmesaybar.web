import { FunctionComponent, useEffect, useState } from "react";

interface StarsComponentProps {
  starsQuantity: number;
};

const StarsComponent: FunctionComponent<StarsComponentProps> = ({ starsQuantity }) => {

  const [starsArray, setStarsArray] = useState<Array<any>>([]);

  useEffect(() => {
    const arrayOfStarts = new Array(starsQuantity).fill('');
    setStarsArray(arrayOfStarts);
  }, [starsQuantity]);


  return (
    <div className="star">
      {starsArray?.map((star) => (
        <>
          <a href="#"><i className='bx bxs-star' ></i></a>
        </>
      ))}
    </div>
  );
}

export default StarsComponent;