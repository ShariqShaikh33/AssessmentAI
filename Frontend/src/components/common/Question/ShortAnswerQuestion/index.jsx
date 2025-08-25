import React, { useState } from 'react'
import { InputTypes } from '../../inputs/CustomInput/utils/InputTypes';
import CustomInput from '../../inputs/CustomInput';

function ShortAnswerQuestion() {
  const [answer , setAnswer] = useState("");
    
    return (
      <CustomInput
        inputType={InputTypes.TEXT}
        value={answer}
        onChange={setAnswer}
        placeholder="Enter your answer..."
        disabled={true}
      />
    );
}

export default ShortAnswerQuestion;
