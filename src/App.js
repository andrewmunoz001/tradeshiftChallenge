import React, { useState } from "react";
import { Button, Form } from "react-tradeshift-ui/";

import { TriangleFactory } from "./TriangleFactory";
import "./App.css";

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
    } catch (error) {
      window.ts.ui.Notification.error(error.toString());
      setState(prev => ({
        ...prev,
        currentTriangle: null
      }));
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
    <div className="App">
      {state.currentTriangle != null && (
        <div data-ts="Note">
          <i className="ts-icon-triangleup"></i>
          <p>Created "{state.currentTriangle.getType()}" triangle. </p>
        </div>
      )}
      <h1>Triangle Creator</h1>
      <div className="Forms">
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
              <input
                name="three"
                onChange={handleChange}
                type="text"
                required
              />
            </label>
          </fieldset>
        </Form>
      </div>
      <Button className="ts-primary" onClick={submitTriangle}>
        <span>Create Triangle</span>
      </Button>
    </div>
  );
}

export default App;
