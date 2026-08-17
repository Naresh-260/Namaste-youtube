import React from 'react'
import { button_list } from '../utils/constants'

const ButtonsList = () => {
  return (
    <div className="fixed top-13 z-40 bg-gray-100 flex gap-2 px-4 py-3 overflow-x-auto">
      {button_list.map((button) => (
        <button
          key={button}
          className="px-4 py-2 bg-gray-200 text-xs rounded-lg whitespace-nowrap"
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default ButtonsList
