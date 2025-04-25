import { useEffect, useState } from "react";
import "./style.scss";

const CHILD_OPTIONS = [
  "Étiquettes",
  "Liste",
  "Champs personnalisés",
  "Comptes",
  "Score",
];

export default function RadioGroup() {
  const [selectedOption, setSelectedOption] = useState("default");
  const [selectedChildren, setSelectedChildren] = useState<any[]>([]);

  useEffect(() => {
    if (selectedOption === "autres" && selectedChildren.length === 0) {
      setSelectedOption("default");
    }
  }, [selectedChildren]);

  const handleRadioChange = (value: any) => {
    if (value === "autres") {
      setSelectedOption("autres");
      setSelectedChildren([...CHILD_OPTIONS]);
    } else {
      setSelectedOption("default");
      setSelectedChildren([]);
    }
  };
  const handleChildToggle = (child: any) => {
    let updated;
    if (selectedChildren.includes(child)) {
      updated = selectedChildren.filter((c) => c !== child);
    } else {
      updated = [...selectedChildren, child];
    }
    setSelectedChildren(updated);
    if (updated.length > 0) {
      setSelectedOption("autres");
    }
  };
  const isChildChecked = (child: any) => selectedChildren.includes(child);

  return (
    <div className="radio-group-style radio-group">
      <label className="custom-radio">
        <input
          type="radio"
          name="field"
          checked={selectedOption === "default"}
          onChange={() => handleRadioChange("default")}
        />
        <span className="radio-mark"></span>
        Champs par défaut
      </label>

      <label className="custom-radio">
        <input
          type="radio"
          name="field"
          checked={selectedOption === "autres"}
          onChange={() => handleRadioChange("autres")}
        />
        <span className="radio-mark"></span>
        Autres champs
      </label>

      <div className="nested-options">
        {CHILD_OPTIONS.map((child, index) => (
          <label key={index} className="custom-radio child-option">
            <input
              type="checkbox"
              disabled={selectedOption !== "autres"}
              checked={isChildChecked(child)}
              onChange={() => handleChildToggle(child)}
            />
            <span className="radio-mark"></span>
            {child}
          </label>
        ))}
      </div>
    </div>
  );
}
