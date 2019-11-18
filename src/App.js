import React, { useState } from "react";
import { Button, Form } from "react-tradeshift-ui/";

function App() {
  const [state, setState] = useState({});
  function submitTriangle() {
    console.log(state);
  }
  function handleChange(event) {
    let { name, value } = event.target;

    setState(prev => ({
      ...prev,
      [name]: value
    }));
  }
  return (
    <div>
      <Button className="ts-primary" onClick={submitTriangle}>
        <span>Create Triangle</span>
      </Button>
      <Form>
        <fieldset>
          <label>
            <span>text</span>
            <input name="one" onChange={handleChange} type="text" required />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <span>text</span>
            <input name="two" onChange={handleChange} type="text" required />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <span>text</span>
            <input name="three" onChange={handleChange} type="text" required />
          </label>
        </fieldset>
      </Form>
    </div>
  );
}

export default App;
