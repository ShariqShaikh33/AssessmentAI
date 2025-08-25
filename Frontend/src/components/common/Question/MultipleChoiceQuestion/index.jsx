import React, { useState } from 'react'
import { getQuestionOptionPrefix } from '../utils/getQuestionOptionPrefix'

function MultipheChoiceQuestion({question}) {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = question.options??[];
  if(options.length === 0) return;

    const handleSelect = (option) => {
      if(selectedOption === option) setSelectedOption(null)
      else setSelectedOption(option);
  };

  return (
    <div className="flex flex-col gap-4">
      {options.map((option, index) => (
        <div
          onClick={()=>handleSelect(option)}
          className={`${
            selectedOption === option
              ? "!border-blue-500 !text-blue-800 bg-blue-50"
              : ""
          }
            flex items-center gap-4 border p-4 rounded-lg text-sm hover:!border-gray-500 cursor-pointer transition-all`}
          key={option.label}>
          <span>{getQuestionOptionPrefix(index)}.</span> {option.label}
        </div>
      ))}
    </div>
  );
}

export default MultipheChoiceQuestion
