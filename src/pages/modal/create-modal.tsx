import { AiOutlineArrowLeft } from 'react-icons/ai';
import React, { useState } from 'react';

import { RadioButton } from '@/components/radio/RadioButton';
import Dropdown from '@/components/modals/dropdown';
import { options } from '@/utils/options';

interface ModalProps {
  isOpen: boolean;
  isModalClose: () => void;
}

interface Option {
  label: string;
  value: string;
}

export const CreateModal = ({ isOpen, isModalClose }: ModalProps) => {
  const [showDropdown, setShowDropdown] = useState([
    {
      id: 1,
      showDropdown: true,
      selectedOption: '',
    },
  ]);

  const handleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    dropdownId: number
  ) => {
    const selectedValue = event.target.value;

    setShowDropdown((prevState) => [
      {
        id: prevState.length + 1,
        showDropdown: true,
        selectedOption: selectedValue,
      },
      ...prevState,
    ]);
  };

  const handleAddNewSchema = () => {
    // add a new schema dropdown with unselected options
    setShowDropdown((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1,
        showDropdown: true,
        selectedOption: '',
      },
    ]);
  };

  const handleCloseDropdown = (id: any) => {
    const upDatedDropdown = showDropdown.map((dropdown) =>
      dropdown.id === id ? { ...dropdown, showDropdown: false } : dropdown
    );
    setShowDropdown(upDatedDropdown);
  };

  const usedOptions: string[] = showDropdown.reduce(
    (acc: string[], dropdown) => {
      if (dropdown.selectedOption !== '') {
        acc.push(dropdown.selectedOption);
      }
      return acc;
    },
    []
  );

  const availableOptions: Option[] = options.filter(
    (option) => !usedOptions.includes(option.value)
  );

  // api call
  const handleSaveSegment = async () => {
    try {
      const segmentNameInput = document.querySelector(
        'input[type="text"]'
      ) as HTMLInputElement;
      const segmentName = segmentNameInput ? segmentNameInput.value : '';

      const selectedOptions = showDropdown
        .filter((dropdown) => dropdown.selectedOption !== '')
        .map((dropdown) => ({
          [dropdown.selectedOption]: options.find(
            (option) => option.value === dropdown.selectedOption
          )?.label,
        }));

      const segmentData = {
        segment_name: segmentName,
        schema: selectedOptions,
      };

      const response = await fetch('api/submitData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ segmentData }),
      });

      if (response.ok) {
        console.log(segmentData);
        isModalClose();
        return segmentData;
      } else {
        console.error('Failed to send data to webhook');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {isOpen && (
        <div
          className={`fixed top-0 right-0 lg:top-1/2 lg:right-72 lg:translate-x-1/2 lg:-translate-y-1/2 z-10 shadow-lg max-h-screen overflow-y-auto bg-white ${
            isOpen ? 'bg-opacity-100' : ''
          }`}
        >
          <div className='bg-[#39AEBC] p-5 flex items-center'>
            <AiOutlineArrowLeft className='mr-5 text-white' />
            <h1 className='text-white'>Saving Segment</h1>
          </div>
          <div className='rounded-lg p-5 w-[320px] h-[325px] lg:w-[569px] lg:h-[450px]'>
            <div>
              <form>
                <label className='font-medium block mb-3'>
                  Enter the Name of the Segment
                </label>
                <input
                  type='text'
                  placeholder='Enter your name'
                  className='w-[250px] lg:w-[500px] p-3 rounded-sm block mb-3 outline-none border-black border-[1px]'
                />
              </form>
              <p className='font-medium text-sm'>
                To save your segment, you need to add the schemas to build the
                query
              </p>
            </div>

            {/* radio button starts */}
            <RadioButton />
            {/* radio button ends */}

            {/* dropdown content */}
            <div className='p-5 lg:p-10'>
              {showDropdown.map(
                (dropdown) =>
                  dropdown.showDropdown && (
                    <Dropdown 
                      key={dropdown.id}
                      availableOptions={availableOptions}
                      selectedOption={dropdown.selectedOption}
                      onSelectChange={(e)=> handleSelectChange(e,dropdown.id)}
                      onDropdownClose={() => handleCloseDropdown(dropdown.id)}

                    />
                  )
              )}
              <div className='mt-5'>
                <button onClick={handleAddNewSchema}>
                  <a className='text-blue-500 underline ml-10'>+ Add New Schema</a>
                </button>
              </div>
            </div>
          </div>
          {/* Buttons */}
          <div className='flex flex-row bg-gray-300 px-3 py-3 mt-[500px]'>
            <button
              className='rounded-md bg-green-800 px-5 py-3 text-white'
              onClick={handleSaveSegment}
            >
              Save Segment
            </button>
            <button
              className='rounded-md px-5 py-3 text-rose-600 ml-5'
              onClick={isModalClose}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};
