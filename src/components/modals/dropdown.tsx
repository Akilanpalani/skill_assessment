import React from 'react';
import { AiOutlineMinusSquare } from 'react-icons/ai';
// import { options } from '@/utils/options';


interface Option {
  label: string;
  value: string;
}

interface DropDownProps {
  options: Option[];
  selectedOption: string;
  onSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onDropdownClose: () => void;
}

const Dropdown = ({ options, selectedOption, onSelectChange, onDropdownClose }: DropDownProps) => {
  return (
    <div className='mb-5 flex items-center'>
      {/* colored circle */}
      <div className='relative ml-10 flex items-center'>
        <div className='radio-circle bg-red-500 border-2 border-white absolute -top-2 right-10 w-4 h-4 rounded-full'></div>
      </div>

      <form>
        <select
          className='w-[200px] lg:w-[400px] p-2 lg:p-4 outline-none rounded-sm border-[1px] border-black text-nowrap'
          value={selectedOption}
          onChange={onSelectChange}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </form>
      <button className='ml-2' onClick={onDropdownClose}>
        <AiOutlineMinusSquare className='w-7 h-7 lg:w-14 lg:h-14 text-center text-gray-600' />
      </button>
    </div>
  );
};

export default Dropdown;
