import React, { useReducer, useState } from "react";
import "./ReactFormApp.css";

const formReducer = (state, event) => {
    if (event.reset) {
      return {
        apple: "",
        name: "",
        count: 0,
        "gift-wrap": false,
      };
    }
  return {
    ...state,
    [event.name]: event.value,
  };
};

function ReactFormApp() {

  const [formData, setFormData] = useReducer(formReducer, {
    count: 100,
  });
  
  console.log(formData);
  const [submitting, setSubmitting] = useState(false);
  //   console.log(formData);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    // alert("You have submitted the form.");
    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true,
      });
      //   event.target.reset();
    }, 3000);
  };

  const handleChange = (event) => {
    const isChecked = event.target.type === "checkbox";
    setFormData({
      name: event.target.name,
      value: isChecked ? event.target.checked : event.target.value,
    });
  };

  return (
    <div className="wrapper">
      <h1 style={{ textAlign: "center" }}>How About Them Apples?</h1>
      {submitting && (
        <div>
          You are Submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}>
                <strong>{name}</strong>: {value.toString()}
              </li>
            ))}
          </ul>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <fieldset disabled={submitting}>
          <legend>React Form Example</legend>
          <label>
            <p>Name</p>
            <input
              name="name"
              onChange={handleChange}
              value={formData.name || ""}
            />
          </label>
        </fieldset>
        <fieldset disabled={submitting}>
          <label>
            <p>Apples</p>
            <select
              name="apple"
              onChange={handleChange}
              value={formData.apple || ""}
            >
              <option value="">---Please Choose and Option---</option>
              <option value="fuji">Fuji</option>
              <option value="jonathan">Jonathan</option>
              <option value="honey-crisp">Honey-Crisp</option>
            </select>
          </label>

          <label>
            <p>Count</p>
            <input
              type="number"
              name="count"
              step="1"
              value={formData.count || ""}
              onChange={handleChange}
            />
          </label>

          <label>
            <p>Gift Wrap</p>
            <input
              type="Checkbox"
              name="gift-wrap"
              onChange={handleChange}
              disabled={formData.apple !== "fuji"}
              checked={formData["gift-wrap"] || false}
            />
          </label>
        </fieldset>

        <button type="submit" disabled={submitting}>{submitting ? "Submiting" : "Submit"}</button>
        {/* <button type="submit">{submitting ? "Submitting" : "Submit"}</button> */}
      </form>
    </div>
  );
}

export default ReactFormApp;
