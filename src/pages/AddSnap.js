import React, { useContext, useRef, useState } from "react";

import { LabeledInput as Input, TextArea } from "../components/atoms/Input";
import CategorySelector from "../components/molecules/CategorySelector";
import { EthProvider } from "../ethereum";

const AddSnap = () => {
  const { contract } = useContext(EthProvider);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const [selectedInstallation, setSelectedInstallation] = useState("");
  const [selectedDapp, setSelectedDapp] = useState("");
  const [selectedDescription, setSelectedDescription] = useState("");
  const [selectedIconUrl, setSelectedIconUrl] = useState("");
  const formRef = useRef();

  const categories = ["Protocol", "Utility", "Game", "NFT"];

  const inputs = [
    {
      label: "Snap Name",
      description: "(name of your snap)",
      placeholder: "",
      type: "text",
      name: "name",
    },
    {
      label: "Installation",
      description: "(installation method)",
      placeholder: "e.g. @consensys/my-snap",
      type: "text",
      name: "installation",
    },
    {
      label: "DApp Site",
      description: "(link)",
      placeholder: "e.g. mydapp.io",
      type: "text",
      name: "dapp",
    },
    {
      label: "Snap Image Link",
      description: "(A jpeg, png, or svg)",
      placeholder: "",
      type: "text",
      name: "iconUrl",
    },
  ];

  const wenSubmit = async (e) => {
    e.preventDefault();
    try {
      await contract.register(
        selectedName,
        selectedCategory,
        selectedInstallation,
        selectedIconUrl,
        selectedDapp,
        selectedDescription
      );
    } catch (e) {
      console.log(e);
    }
  };
  const setValue = (name, value) => {
    switch (name) {
      case "name":
        setSelectedName(value);
        return;
      case "installation":
        setSelectedInstallation(value);
        return;
      case "dapp":
        setSelectedDapp(value);
        return;
      case "iconUrl":
        setSelectedIconUrl(value);
        return;
      case "description":
        setSelectedDescription(value);
        return;
      default:
        return;
    }
  };

  return (
    <>
      <form action="" ref={formRef} onSubmit={wenSubmit}>
        <fieldset>
          <legend>
            <h2>Add a new Snap</h2>
          </legend>
          {inputs.map((input, idx) => (
            <Input
              type={input.type}
              placeholder={input.placeholder}
              label={input.label}
              key={`input no. ${idx}`}
              description={input.description}
              onChange={(event) => setValue(input.name, event.target.value)}
            />
          ))}
          <CategorySelector
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <TextArea
            onChange={(event) => setValue("description", event.target.value)}
          />
          <input type="submit" />
        </fieldset>
      </form>
    </>
  );
};

export default AddSnap;
