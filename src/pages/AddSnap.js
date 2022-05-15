import React, { useRef } from "react";

import { LabeledInput as Input, TextArea } from "../components/atoms/Input";
import CategorySelector from '../components/molecules/CategorySelector'

const AddSnap = () => {
	const formRef = useRef()

	const inputs = [
		{
			label: "Snap Link",
			description: "(metadata URI)",
			placeholder: "",
			type: "url"
		},
		{
			label: "Snap Name",
			description: "(alphanumeric only)",
			placeholder: "e.g. Snap Name",
			type: "text"
		},
		{
			label: "GitHub Repository",
			description: "(link)",
			placeholder: "e.g. github.com/snap-project",
			type: "url"
		},
		{
			// Should this be username?
			label: "Offered By",
			description: "(Author or Organization)",
			placeholder: "@username",
			type: "text"
		},
		{
			label: "Version",
			description: "",
			placeholder: "0.0.0",
			type: "number"
		},
		{
			label: "Website",
			description: "(Author or Organization)",
			placeholder: "@username",
			type: "url"
		},
		{
			label: "Snap Image Link",
			description: "(A jpeg, png, or svg up to 1mb)",
			placeholder: "",
			type: "text"
		},
	]

	const wenSubmit = (e) => {
		e.preventDefault()
		console.log(formRef.current.elements)
	}
  return (
    <>
      <form action="" ref={formRef} onSubmit={wenSubmit}>
        <fieldset>
          <legend>
            <h2>Add a new Snap</h2>
          </legend>
					{inputs.map((input, idx) =>
						<Input
							type={input.type}
							placeholder={input.placeholder}
							label={input.label}
							description={input.description}
						/>
					)}
					<CategorySelector />
					<TextArea />
					<input type="submit"/>
        </fieldset>
      </form>
    </>
  );
};

export default AddSnap;
