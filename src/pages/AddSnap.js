import React from "react";

import { LabeledInput as Input } from "../components/atoms/Input";

const AddSnap = () => {
  return (
    <>
      <form action="">
        <fieldset>
          <legend>
            <h2>Add a new Snap</h2>
          </legend>
          <Input type="text" placeholder="Text here" />
        </fieldset>
      </form>
    </>
  );
};

export default AddSnap;
