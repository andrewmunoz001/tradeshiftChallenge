import React, { useState } from "react";
import { Button, Form, Note } from "react-tradeshift-ui/";

import { TriangleFactory } from "./TriangleFactory";

function App() {
  const [state, setState] = useState({ currentTriangle: null });

  let myFactory = new TriangleFactory();

  function submitTriangle() {
    try {
      let newTriangle = myFactory.createTriangle(
        state.one,
        state.two,
        state.three
      );
      setState(prev => ({
        ...prev,
        currentTriangle: newTriangle
      }));
      console.log(newTriangle.getType());
    } catch (error) {
      window.ts.ui.Notification.error(error.toString());
    }
  }

  function handleChange(event) {
    let { name, value } = event.target;

    setState(prev => ({
      ...prev,
      [name]: parseInt(value)
    }));
  }

  return (
    <div>
      {state.currentTriangle != null && (
        <div data-ts="Note">
          <i class="ts-icon-triangleup"></i>
          <p>{state.currentTriangle.getType()} </p>
        </div>
      )}
      <Button className="ts-primary" onClick={submitTriangle}>
        <span>Create Triangle</span>
      </Button>
      <Form>
        <fieldset>
          <label>
            <span>Side One</span>
            <input name="one" onChange={handleChange} type="text" required />
          </label>
        </fieldset>
      </Form>
      <Form>
        <fieldset>
          <label>
            <span>Side Two</span>
            <input name="two" onChange={handleChange} type="text" required />
          </label>
        </fieldset>
      </Form>
      <Form>
        <fieldset>
          <label>
            <span>Side Three</span>
            <input name="three" onChange={handleChange} type="text" required />
          </label>
        </fieldset>
      </Form>
    </div>
  );
}

export default App;
