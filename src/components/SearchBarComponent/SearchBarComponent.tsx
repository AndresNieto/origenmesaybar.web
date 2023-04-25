import { FunctionComponent } from "react";

interface SearchBarComponentProps {
  handleChange?: (event: any) => void;
}

const SearchBarComponent: FunctionComponent<SearchBarComponentProps> = ({ handleChange }) => {
  return (
    <>
      <div className="relative w-full my-10 text-xl">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-base">
          <i className='bx bx-search-alt'></i>
        </div>
        <input
          id="simple-search"
          type="text"
          placeholder="Buscar producto"
          onChange={handleChange}
          className="
          bg-gray-50 
          text-gray-900 text-sm 
          rounded-lg 
          focus:ring-blue-500 
          focus:border-blue-500 
          block w-full pl-10 p-2.5 
          shadow-xl
          text-base"
        />
      </div>
    </>
  );
}

export default SearchBarComponent;