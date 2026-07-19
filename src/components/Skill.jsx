import React, { useCallback, useState } from "react";
import "../style/skill.css";

const Skill = ({ data, TypeLive, move }) => {
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState({});



  const isValidate = useCallback(() => {
    let err = {};
    let ok = {};
    if (!data.skills || data.skills.length === 0) {
      err.skills = "Select at least one skill."
    } else {
      ok.skills = `selected ${data.skills.length}`
    }

    if (!data.experience.trim()) {
      err.experience = "Please select your experience."
    }else{
      ok.experience = "selected !"
    }

    if (!data.language || data.language.length === 0) {
      err.language = "Select at least one language."
    }else{
      ok.language = "selected !"
    }

    if (!data.languageExperience.trim()) {
      err.languageExperience = "Please select language proficiency."
    }else{
      ok.languageExperience = "selected !"
    }
    const goal = data.goal.trim();
    if(!goal){
      err.goal = "Please enter your career goal."
    }else if (goal.length < 20) {
      err.goal = "Career goal should contain at least 20 characters."
    }else{
      ok.goal = "valid !"
    }

    setErrors(err);
    setSuccess(ok);

    return Object.keys(err).length === 0;

  }, [data])



  // ==========================
  // Next Button Validation
  // ==========================
  const handleNext = useCallback(() => {
  isValidate() && move(1);
}, [isValidate, move]);
  return (
    <div id="skillForm">
      <h2>Skills & Career Details</h2>
      <p>Please provide your professional information.</p>

      {/* Skills */}
      <div className="input-box">
        <label>
          Skills <span>*</span>
        </label>

        <select
          name="skills"
          multiple
          size="10"
          value={data.skills}
          onChange={TypeLive}
        >
          <option value="Computer Operator">Computer Operator</option>
          <option value="Data Entry Operator">Data Entry Operator</option>
          <option value="Graphic Designer">Graphic Designer</option>
          <option value="UI/UX Designer">UI/UX Designer</option>
          <option value="Video Editor">Video Editor</option>
          <option value="Photo Editor">Photo Editor</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="Civil Engineer">Civil Engineer</option>
          <option value="Mechanical Engineer">Mechanical Engineer</option>
          <option value="Electrical Engineer">Electrical Engineer</option>
          <option value="Accountant">Accountant</option>
          <option value="Office Assistant">Office Assistant</option>
          <option value="Receptionist">Receptionist</option>
          <option value="Teacher">Teacher</option>
          <option value="Computer Teacher">Computer Teacher</option>
          <option value="Electrician">Electrician</option>
          <option value="Plumber">Plumber</option>
          <option value="Welder">Welder</option>
          <option value="Fitter">Fitter</option>
          <option value="Mechanic">Mechanic</option>
          <option value="Carpenter">Carpenter</option>
          <option value="Mason (Mistri)">Mason (Mistri)</option>
          <option value="Painter">Painter</option>
          <option value="Tailor">Tailor</option>
          <option value="Fashion Designer">Fashion Designer</option>
          <option value="Photographer">Photographer</option>
          <option value="Driver">Driver</option>
          <option value="Security Guard">Security Guard</option>
          <option value="Labour">Labour</option>
          <option value="Housekeeping">Housekeeping</option>
          <option value="Cook">Cook</option>
          <option value="Helper">Helper</option>
          <option value="Sales Executive">Sales Executive</option>
          <option value="Telecaller">Telecaller</option>
          <option value="Other">Other</option>
        </select>

       <small className={errors?.skills ? "error" : "success"}>
                   {errors?.skills || success?.skills}</small>
      </div>

      {/* Experience */}
      <div className="input-box">
        <label>
          Total Experience <span>*</span>
        </label>

        <select
          name="experience"
          value={data.experience}
          onChange={TypeLive}
        >
          <option value="">Select Experience</option>
          <option value="Fresher">Fresher</option>
          <option value="6 Months">6 Months</option>
          <option value="1 Year">1 Year</option>
          <option value="2 Years">2 Years</option>
          <option value="3 Years">3 Years</option>
          <option value="4 Years">4 Years</option>
          <option value="5 Years">5 Years</option>
          <option value="6 Years">6 Years</option>
          <option value="7 Years">7 Years</option>
          <option value="8 Years">8 Years</option>
          <option value="9 Years">9 Years</option>
          <option value="10 Years">10 Years</option>
          <option value="10+ Years">10+ Years</option>
        </select>

       <small className={errors?.experience ? "error" : "success"}>
            {errors?.experience || success?.experience}</small>
      </div>

      {/* Languages */}
      <div className="input-box">
        <label>
          Languages Known <span>*</span>
        </label>

        <select
          name="language"
          multiple
          size="10"
          value={data.language}
          onChange={TypeLive}
        >
          <option value="Hindi">Hindi</option>
          <option value="English">English</option>
          <option value="Urdu">Urdu</option>
          <option value="Bengali">Bengali</option>
          <option value="Khortha">Khortha</option>
          <option value="Nagpuri">Nagpuri</option>
          <option value="Kurmali">Kurmali</option>
          <option value="Santali">Santali</option>
          <option value="Maithili">Maithili</option>
          <option value="Bhojpuri">Bhojpuri</option>
          <option value="Magahi">Magahi</option>
          <option value="Punjabi">Punjabi</option>
          <option value="Gujarati">Gujarati</option>
          <option value="Marathi">Marathi</option>
          <option value="Tamil">Tamil</option>
          <option value="Telugu">Telugu</option>
          <option value="Kannada">Kannada</option>
          <option value="Malayalam">Malayalam</option>
          <option value="Odia">Odia</option>
          <option value="Assamese">Assamese</option>
          <option value="Kashmiri">Kashmiri</option>
          <option value="Konkani">Konkani</option>
          <option value="Dogri">Dogri</option>
          <option value="Manipuri">Manipuri</option>
          <option value="Nepali">Nepali</option>
          <option value="Sanskrit">Sanskrit</option>
        </select>

        
       <small className={errors?.language ? "error" : "success"}>
            {errors?.language || success?.language}</small>
      </div>
      {/* Language Proficiency */}
      <div className="input-box">
        <label>
          Language Proficiency <span>*</span>
        </label>

        <select
          name="languageExperience"
          value={data.languageExperience}
          onChange={TypeLive}
        >
          <option value="">Select Proficiency</option>
          <option value="Basic">Basic</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
          <option value="Native Speaker">Native Speaker</option>
        </select>

        
       <small className={errors?.languageExperience ? "error" : "success"}>
            {errors?.languageExperience || success?.languageExperience}</small>
      </div>

      {/* Career Goal */}
      <div className="input-box">
        <label>
          Career Goal <span>*</span>
        </label>

        <textarea
          name="goal"
          rows="5"
          placeholder="Write your career goal..."
          value={data.goal}
          onChange={TypeLive}
        />

       
       <small className={errors?.goal ? "error" : "success"}>
            {errors?.goal || success?.goal}</small>
      </div>

      {/* Buttons */}
      <div className="btns-move">
        <button
          type="button"
          onClick={() => move(0)}
        >
          Previous
        </button>

        <button
          type="button"
          onClick={handleNext}
        >
          Next
        </button>
      </div>

    </div>
  );

};

export default Skill;