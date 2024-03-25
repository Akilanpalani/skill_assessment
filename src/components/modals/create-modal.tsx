import React,{useState} from 'react'

export const CreateModal = ({isOpen,isModalClose}) => {
  // const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="">
      <div>
        <button
          className="rounded-md bg-red-800 px-5 py-3 text-white"
          onClick={isModalClose}
        >Close</button>
      </div>
    </div>
  )
}
