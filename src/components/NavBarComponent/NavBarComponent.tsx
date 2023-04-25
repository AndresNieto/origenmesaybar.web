import { FunctionComponent, useState } from "react";
import LOGO_AZUL from '../../assets/images/LogoAzul.png';
import { ROUTES_LIST } from "./consts";

interface NavBarComponentProps {

}

const NavBarComponent: FunctionComponent<NavBarComponentProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [changeHeader, setChangeHeader] = useState(false);

  //header change function 
  const onChangeHeader = () => {
    if (window.scrollY >= 50) {
      setChangeHeader(true)
    } else {
      setChangeHeader(false)
    }
  }

  //change header by scrolling
  window.addEventListener('scroll', onChangeHeader)

  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    header?.classList.toggle("sticky", window.scrollY > 0);
  });


  return (
    <header>
      <div className="w-[30%] sm:w-[10%] md:w-[10%] lg:w-[10%] flex items-center justify-center">
        <a href="#home">
          <img
            className="w-[100%]"
            src={LOGO_AZUL}
            alt="Workflow"
          />
        </a>

      </div>

      <ul className={`navbar ${isOpen ? 'open' : ''}`}>
        {ROUTES_LIST.map(({ name, url }: any, idx) => (
          <li key={idx}><a
            href={url}
            className={`hover:bg-gray-700 text-${changeHeader ? 'white' : 'mainBlue'} px-3 py-2 rounded-md text-lg font-medium`}
          >
            {name}
          </a></li>
        ))}
      </ul>

      <div className="h-icons backgroundBlue">
        <div className=" items-end  md:flex text-white">
          <a href="https://api.whatsapp.com/send?phone=573045317663" target='_blank'><i className='bx bxl-whatsapp' ></i></a>
          <a href="https://www.facebook.com/profile.php?id=100086737656993" target='_blank'><i className='bx bxl-facebook' ></i></a>
          <a href="https://www.instagram.com/origenmesaybar/" target='_blank'><i className='bx bxl-instagram' ></i></a>
        </div>
        <div className={`bx bx-menu ${isOpen ? 'bx-x' : ''}`} id="menu-icon" onClick={() => setIsOpen(!isOpen)}></div>
      </div>
    </header>
    // <header className={
    //   changeHeader ?
    //     "bg-mainBlue text-white fixed z-50 top-0 left-0 w-full shadow-md transition duration-500 h-[8%]  sm:h-[10%] md:h-[10%] lg:h-[10%]" :
    //     "bg-transparent text-mainBlue fixed z-50 top-0 left-0 w-full transition duration-500 h-[8%]  sm:h-[10%]  md:h-[10%] lg:h-[10%]"}>
    //   <nav className="my-[1%] poppins">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <div className="flex items-center justify-between h-16">
    //         <div className="w-[30%] sm:w-[10%] md:w-[10%] lg:w-[10%] flex items-center justify-center">
    //           <img
    //             className="w-[100%]"
    //             src={changeHeader ? LOGO_BLANCO : LOGO_AZUL}
    //             alt="Workflow"
    //           />
    //         </div>
    //         <div className="flex items-center ">

    //           <div className="hidden md:block">
    //             <div className="ml-10 flex items-center justify-center ">
    //               {ROUTES_LIST.map(({ name, url }: any) => (
    //                 <a
    //                   href={url}
    //                   className={`hover:bg-gray-700 text-${changeHeader ? 'white' : 'mainBlue'} px-3 py-2 rounded-md text-lg font-medium`}
    //                 >
    //                   {name}
    //                 </a>
    //               ))}
    //             </div>
    //           </div>
    //         </div>
    //         <div className=" items-end hidden md:flex">
    //           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 m-1"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
    //           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-5 h-5 m-1"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
    //           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 m-1"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
    //         </div>
    //         <div className="-mr-2 flex md:hidden">
    //           <button
    //             onClick={() => setIsOpen(!isOpen)}
    //             type="button"
    //             className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
    //             aria-controls="mobile-menu"
    //             aria-expanded="false"
    //           >
    //             <span className="sr-only">Open main menu</span>
    //             {!isOpen ? (
    //               <svg
    //                 className="block h-6 w-6"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //                 aria-hidden="true"
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth="2"
    //                   d="M4 6h16M4 12h16M4 18h16"
    //                 />
    //               </svg>
    //             ) : (
    //               <svg
    //                 className="block h-6 w-6"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //                 aria-hidden="true"
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth="2"
    //                   d="M6 18L18 6M6 6l12 12"
    //                 />
    //               </svg>
    //             )}
    //           </button>
    //         </div>
    //       </div>
    //     </div>

    //     <Transition
    //       show={isOpen}
    //       enter="transition ease-out duration-100 transform"
    //       enterFrom="opacity-0 scale-95"
    //       enterTo="opacity-100 scale-100"
    //       leave="transition ease-in duration-75 transform"
    //       leaveFrom="opacity-100 scale-100"
    //       leaveTo="opacity-0 scale-95"
    //     >
    //       {(ref) => (
    //         <div className="md:hidden bg-mainBlue" id="mobile-menu">
    //           <div ref={ref} className="flex flex-col px-2 pt-2 pb-3  sm:px-3">
    //             {ROUTES_LIST.map(({ name, url }: any) => (
    //               <a
    //                 href={url}
    //                 className=" text-white px-3 py-2 rounded-md text-large font-medium"
    //               >
    //                 {name}
    //               </a>
    //             ))}
    //           </div>
    //         </div>
    //       )}
    //     </Transition>
    //   </nav>
    // </header>
  );
}

export default NavBarComponent;