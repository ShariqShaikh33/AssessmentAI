import React, { useState } from 'react'
import { InputTypes } from '../../inputs/CustomInput/utils/InputTypes';
import CustomInput from '../../inputs/CustomInput';

function LongAnswerQuestion() {
  const [answer , setAnswer] = useState("");
  
  return (
    <CustomInput
      inputType={InputTypes.MULTILINE}
      value={answer}
      onChange={setAnswer}
      placeholder="Enter your detailed answer..."
      className="h-[200px]"
      disabled={true}
    />
  );
}

export default LongAnswerQuestion;
