import React, { useState } from "react"
import Button from "../../components/Button/Button"
import Checkbox from "../../components/Checkbox/Checkbox"
import EditableSpan from "../../components/EditableSpan/EditableSpan"
import InputText from "../../components/InputText/InputText"
import Radio from "../../components/Radio/Radio"
import Range from "../../components/Range/Range"
import Select from "../../components/Select/Select"
import styles from "./TestComponents.module.css"

export const TestComponents = () => {

  const [textForInputText, setTextForInputText] = useState("");
  const testArrForSelect = ["Cat", "Dog", "Parrot"];
  const [option, onChangeOption] = useState(testArrForSelect[1]);
  let editableSpanValue = "Editable span";
  const [range, setRange] = useState(0);

  return (
    <div className={styles.test}>
      <div>
        <Button onClick={() => alert("Demo button clicked")}>Demo</Button>
      </div>
      <div>
        <Checkbox>My checkbox</Checkbox>
      </div>
      <div>
        <EditableSpan value={editableSpanValue} />
      </div>
      <div>
        <InputText
          onChange={(e) => setTextForInputText(e.currentTarget.value)}
          placeholder="Type smth to get rid of error"
          error={textForInputText.length ? "" : "error"} />
      </div>
      <div>
        <Radio
          onChangeOption={onChangeOption}
          value={option}
          options={testArrForSelect} />
      </div>
      <div>
        <span>{range}</span>
        <Range
          value={range}
          onChangeRange={(e: number) => setRange(e)} />
      </div>
      <div>
        <Select
          onChangeOption={onChangeOption}
          value={option}
          options={testArrForSelect} />
      </div>
    </div>
  )
}