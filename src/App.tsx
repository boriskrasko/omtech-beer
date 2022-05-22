import { SetStateAction, useState } from "react";
import "./index.css";

import Input from "./Components/Input";
import Button from "./Components/Button";
import Data from "./Components/Data";

const buttonValue: any = "Get Beer";
const App = () => {
  const [value, setValue] = useState<any>([]);
  const [id, setId] = useState<any>();

  return (
    <>
      <Input
        onChange={(e: { target: { value: SetStateAction<never[]> } }) => {
          setValue(e.target.value);
        }}
        value={value}
      />
      <Button onClick={() => setId(value)}>{buttonValue}</Button>
      <Data id={id} />
    </>
  );
};

export default App;
