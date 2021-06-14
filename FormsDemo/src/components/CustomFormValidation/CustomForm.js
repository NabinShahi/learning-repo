import React, { useReducer, useState } from "react";
import "./CustomForm.css";

const formReducer = (state, event) => {
  if (event.reset) {
    return {
      photo: false,
      checkbox: false,
      class: "",
      contact_number_1: "",
      contact_number_2: "",
      date: "",
      emergency_address: "",
      emergency_contact_name: "",
      emergency_phone_number: "",
      emergency_relationship_with_child: "",
      father_address: "",
      father_email: "",
      father_name: "",
      father_occupation: "",
      father_phone_number: "",
      gender: "",
      get_to_know: "",
      mother_address: "",
      mother_email: "",
      mother_name: "",
      mother_occupation: "",
      mother_phone_number: "",
      nationality: "",
      permanent_district: "",
      permanent_municipality: "",
      permanent_province_no: "",
      permanent_ward_no: "",
      permanent_zone: "",
      previous_school_address: "",
      previous_school_name: "",
      previous_school_phone_number: "",
      religion: "",
      siblings_in_this_school: "",
      student_email: "",
      student_name: "",
      temporary_district: "",
      temporary_municipality: "",
      temporary_province_no: "",
      temporary_ward_no: "",
      temporary_zone: "",
    };
  }

  return {
    ...state,
    [event.name]: event.value,
  };
};

function CustomApp() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  // console.log(formData);

  const handleChange = (event) => {
    const isChecked = event.target.type === "checkbox";
    const isFile = event.target.type === "file";
    
    if(isFile){
      setFormData({
        name: event.target.name,
        value: event.target.files[0],
      })
    } else {
    setFormData({
      name: event.target.name,
      value: isChecked ? event.target.checked : event.target.value,
    })};
  };
  // const handleChange = (event) => {
  //   const isChecked = event.target.type === "checkbox";
  //   setFormData({
  //     name: event.target.name,
  //     value: isChecked ? event.target.checked : event.target.value,
  //   });
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true,
      });
    }, 3000);
    console.log(formData);
  };
  // console.log(formData);

  return (
    <div className="container">
      <h1 id="title">Fill the Students Details Below</h1>
      <form className="form" onSubmit={handleSubmit}>
        <fieldset className="student__info" disabled={submitting}>
          <legend>Students Credentials</legend>
          <div className="photo">
            <label htmlFor="photo">
              <strong>Select Photo: </strong>
            </label>
            <input
              type="file"
              id="photo"
              name="photo"
              onChange={handleChange}
              // value={formData.photo}
            />
          </div>
          <label htmlFor="studentName">
            <strong>Student Name:</strong>
          </label>
          <br />
          <input
            type="text"
            id="studentName"
            name="student_name"
            onChange={handleChange}
            value={formData.student_name || ""}
            placeholder="Student Name"
          />

          <label>
            <p>
              <strong>Select Gender:</strong>
            </p>
            <select
              name="gender"
              onChange={handleChange}
              value={formData.gender || ""}
            >
              <option value="">---Select Gender---</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </label>
          <br />
          <br />

          <label htmlFor="date">
            <strong>Date of Birth:</strong>1
          </label>
          <br />
          <input
            type="date"
            id="date"
            name="date"
            onChange={handleChange}
            value={formData.date || ""}
          />

          <label>
            <p>
              <strong>---Select Class---</strong>
            </p>
            <select
              name="class"
              value={formData.class || ""}
              onChange={handleChange}
            >
              <option value="">Select Class:</option>
              <option value="nursery">Nursery</option>
              <option value="lkg">L.K.G.</option>
              <option value="ukg">U.K.G</option>
              <option value="one">Class 1</option>
              <option value="two">Class 2</option>
              <option value="three">Class 3</option>
              <option value="four">Class 4</option>
              <option value="five">Class 5</option>
              <option value="six">Class 6</option>
              <option value="seven">Class 7</option>
              <option value="eight">Class 8</option>
              <option value="nine">Class 9</option>
              <option value="ten">Class 10</option>
            </select>
          </label>
          <br />
          <br />

          <label htmlFor="nationality">
            <strong>Nationality:</strong>
          </label>
          <br />
          <input
            type="text"
            id="nationality"
            name="nationality"
            onChange={handleChange}
            value={formData.nationality || ""}
            placeholder="Nationality"
          />
          <br />
          <br />

          <label htmlFor="">
            <strong>Permanent Address:</strong>
          </label>
          <div className="address__info">
            <input
              type="number"
              name="permanent_province_no"
              onChange={handleChange}
              value={formData.permanent_province_no || ""}
              placeholder="Province Number"
              min="1"
              max="7"
            />
            <input
              type="text"
              name="permanent_zone"
              onChange={handleChange}
              value={formData.permanent_zone || ""}
              placeholder="Zone"
            />
            <input
              type="text"
              name="permanent_district"
              onChange={handleChange}
              value={formData.permanent_district || ""}
              placeholder="District"
            />
            <input
              type="text"
              name="permanent_municipality"
              onChange={handleChange}
              value={formData.permanent_municipality || ""}
              placeholder="Municipality"
            />
            <input
              type="number"
              name="permanent_ward_no"
              onChange={handleChange}
              value={formData.permanent_ward_no || ""}
              placeholder="Ward no."
            />
          </div>
          <br />

          <label htmlFor="">
            <strong>Temporary Address:</strong>
          </label>
          <div className="address__info">
            <input
              type="number"
              name="temporary_province_no"
              onChange={handleChange}
              value={formData.temporary_province_no || ""}
              placeholder="Province Number"
              min="1"
              max="7"
            />
            <input
              type="text"
              name="temporary_zone"
              onChange={handleChange}
              value={formData.temporary_zone || ""}
              placeholder="Zone"
            />
            <input
              type="text"
              name="temporary_district"
              onChange={handleChange}
              value={formData.temporary_district || ""}
              placeholder="District"
            />
            <input
              type="text"
              name="temporary_municipality"
              onChange={handleChange}
              value={formData.temporary_municipality || ""}
              placeholder="Municipality"
            />
            <input
              type="number"
              name="temporary_ward_no"
              onChange={handleChange}
              value={formData.temporary_ward_no || ""}
              placeholder="Ward no."
            />
          </div>
          <br />

          <label htmlFor="">
            <strong>Contact Information: </strong>
          </label>
          <div className="contact__info">
            <input
              type="number"
              name="contact_number_1"
              onChange={handleChange}
              value={formData.contact_number_1 || ""}
              placeholder="Contact Number 1"
            />
            <input
              type="number"
              name="contact_number_2"
              onChange={handleChange}
              value={formData.contact_number_2 || ""}
              placeholder="Contact Number 2"
            />
          </div>
          <br />

          <label htmlFor="">
            <strong>Email Address:</strong>
          </label>
          <br />
          <input
            type="email"
            name="student_email"
            onChange={handleChange}
            value={formData.student_email || ""}
            placeholder="Email Address"
          />
          <br />
          <br />

          <label htmlFor="">
            <strong>Religion:</strong>
          </label>
          <br />
          <input
            type="text"
            name="religion"
            onChange={handleChange}
            value={formData.religion || ""}
            placeholder="Religion"
          />
          <br />
          <br />
        </fieldset>

        <fieldset className="parents__info" disabled={submitting}>
          <legend>Parents Information</legend>
          <label htmlFor="">
            <strong>Father Information:</strong>
          </label>
          <br />
          <div>
            <input
              type="text"
              name="father_name"
              onChange={handleChange}
              value={formData.father_name || ""}
              placeholder="Name"
            />
            <input
              type="text"
              name="father_occupation"
              onChange={handleChange}
              value={formData.father_occupation || ""}
              placeholder="Occupation"
            />
          </div>
          <br />
          <div>
            <input
              type="text"
              name="father_phone_number"
              onChange={handleChange}
              value={formData.father_phone_number || ""}
              placeholder="Phone"
            />
            <input
              type="text"
              name="father_email"
              onChange={handleChange}
              value={formData.father_email || ""}
              placeholder="Email"
            />
          </div>
          <br />
          <input
            type="text"
            name="father_address"
            onChange={handleChange}
            value={formData.father_address || ""}
            placeholder="Address"
          />
          <br />
          <br />

          <label htmlFor="">
            <strong>Mother Information:</strong>
          </label>
          <br />
          <div>
            <input
              type="text"
              name="mother_name"
              onChange={handleChange}
              value={formData.mother_name || ""}
              placeholder="Name"
            />
            <input
              type="text"
              name="mother_occupation"
              onChange={handleChange}
              value={formData.mother_occupation || ""}
              placeholder="Occupation"
            />
          </div>
          <br />
          <div>
            <input
              type="text"
              name="mother_phone_number"
              onChange={handleChange}
              value={formData.mother_phone_number || ""}
              placeholder="Phone"
            />
            <input
              type="text"
              name="mother_email"
              onChange={handleChange}
              value={formData.mother_email || ""}
              placeholder="Email"
            />
          </div>
          <br />
          <input
            type="text"
            name="mother_address"
            onChange={handleChange}
            value={formData.mother_address || ""}
            placeholder="Address"
          />
          <br />
          <br />

          <label htmlFor="">
            <strong>Emergency Contact:</strong>
          </label>
          <div>
            <input
              type="text"
              name="emergency_contact_name"
              onChange={handleChange}
              value={formData.emergency_contact_name || ""}
              placeholder="Emergency Contact Name"
            />
            <input
              type="text"
              name="emergency_phone_number"
              onChange={handleChange}
              value={formData.emergency_phone_number || ""}
              placeholder="Phone Number"
            />
          </div>
          <br />
          <div>
            <input
              type="text"
              name="emergency_address"
              onChange={handleChange}
              value={formData.emergency_address || ""}
              placeholder="Address"
            />
            <input
              type="text"
              name="emergency_relationship_with_child"
              onChange={handleChange}
              value={formData.emergency_relationship_with_child || ""}
              placeholder="Relationship with Child"
            />
          </div>
          <br />
        </fieldset>

        <fieldset disabled={submitting}>
          <legend>Previous School Information</legend>
          <label htmlFor="">
            <strong>School Name:</strong>
          </label>
          <br />
          <input
            type="text"
            name="previous_school_name"
            onChange={handleChange}
            value={formData.previous_school_name || ""}
            placeholder="School Name"
          />
          <br />
          <br />
          <label htmlFor="">
            <strong>School Address:</strong>
          </label>
          <br />
          <input
            type="text"
            name="previous_school_address"
            onChange={handleChange}
            value={formData.previous_school_address || ""}
            placeholder="School Address"
          />
          <br />
          <br />
          <label htmlFor="">
            <strong>School Phone Number:</strong>
          </label>
          <br />
          <input
            type="number"
            name="previous_school_phone_number"
            onChange={handleChange}
            value={formData.previous_school_phone_number || ""}
            placeholder="School Phone Number"
          />
          <br />
          <br />
        </fieldset>

        <fieldset>
          <legend>Other Information</legend>
          <label htmlFor="">
            <strong>
              Details of siblings studying in this school(if any).
            </strong>
          </label>
          <input
            type="text"
            name="siblings_in_this_school"
            onChange={handleChange}
            value={formData.siblings_in_this_school || ""}
            placeholder="Siblings studying in this school (if any)."
          />
          <br />

          <label>
            <p>
              <strong>From where did you get to know about this school?</strong>
            </p>
            <select
              name="get_to_know"
              onChange={handleChange}
              value={formData.get_to_know || ""}
            >
              <option value="friend">Family</option>
              <option value="friend">Friends</option>
              <option value="website">Website</option>
              <option value="facebook">Facebook</option>
            </select>
          </label>
        </fieldset>

        <div className="checkbox">
          <input
            type="checkbox"
            name="checkbox"
            onChange={handleChange}
            checked={formData["checkbox"] || false}
          />
          <label htmlFor="">
            <strong>
              I hereby declare that all the above information are true.
            </strong>
          </label>
        </div>
        <br />

        <button type="submit" disabled={submitting}>
          Submit
        </button>
      </form>

      <button className="goToTop">
        <a href="#title">Go to Top</a>
      </button>
    </div>
  );
}

export default CustomApp;
