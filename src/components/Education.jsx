import { useState, useCallback } from 'react'
import "../style/education.css"
const Education = ({ data, TypeLive, move }) => {

  const [errors, setErrors] = useState({});
  const [success,setSuccess] = useState({});

  const validate = useCallback(() => {
    const err = {};
    const ok = {};

    const currentYear = new Date().getFullYear();

    if (!data.education) {
      err.education = "Please select qualification.";
    } else {
      ok.education = "accepted !"
    }
    if (!data.institude) {
      err.institude = "Please select board/university.";
    } else {
      ok.institude = "accepted !"
    }
    if (!data.collage?.trim()) {
      err.collage = "College name is required.";
    } else if (data.collage.trim().length < 3) {
      err.collage = "Minimum 3 characters required.";
    } else {
      ok.collage = "valid !"
    }

    if (!data.percentage?.trim()) {
      err.percentage = "Percentage is required.";
    } else {
      const num = parseFloat(data.percentage);

      if (isNaN(num))
        err.percentage = "Enter valid percentage.";
      else if (num < 0 || num > 100)
        err.percentage = "Percentage must be between 0 and 100.";
      else ok.percentage = "valid!";
    }

    if (!data.status) {
      err.status = "Select result status.";
    } else {
      ok.status = "selected !"
    }
    if (!data.year) {
      err.year = "Passing year is required.";
    } else if (
      Number(data.year) < 1950 ||
      Number(data.year) > currentYear
    ) {
      err.year = `Year should be between 1950 and ${currentYear}.`;
    } else {
      ok.year = "accepted !"
    }

    if (!data.mediam) {
      err.mediam = "Select medium.";
    } else {
      ok.mediam = "selected !"
    }
    if (!data.marital) {
      err.marital = "Select marital status.";
    } else {
      ok.marital = "selected !"
    }

    setErrors(err);
    setSuccess(ok);
    return Object.keys(err).length === 0;
  }, [data]);

  const handleNext = () => {
    if (validate()) {
    
      move(1);
    }
  };


  return (
    <div id="qualificationForm">

      <h2>Qualification Details</h2>
      <p>Please provide your educational qualification.</p>

      {/* Qualification */}
      <div className="input-box">
        <label htmlFor="qualification">Qualification <span>*</span></label>
        <select id="qualification" value={data.education} onChange={TypeLive} name="education">
          <option value="">Select Qualification</option>
          <option value="10th (Matric)">10th (Matric)</option>
          <option value="below 10th">below 10th</option>
          <option value="12th (Intermediate)">12th (Intermediate)</option>
          <option value="ITI">ITI</option>
          <option value="Diploma">Diploma</option>
          <option value="B.A.">B.A.</option>
          <option value="B.Sc.">B.Sc.</option>
          <option value="B.Com.">B.Com.</option>
          <option value="BCA">BCA</option>
          <option value="BBA">BBA</option>
          <option value="B.Tech">B.Tech</option>
          <option value="BE">BE</option>
          <option value="M.A.">M.A.</option>
          <option value="M.Sc.">M.Sc.</option>
          <option value="M.Com.">M.Com.</option>
          <option value="MCA">MCA</option>
          <option value="MBA">MBA</option>
          <option value="M.Tech">M.Tech</option>
          <option value="Ph.D.">Ph.D.</option>
          <option value="Other">Other</option>
        </select>
        <small className={errors?.education ? "error" : "success"}>
            {errors?.education || success?.education}
          </small>
      </div>

      {/* Board / University */}
      <div className="input-box">
        <label htmlFor="board">Board / University <span>*</span></label>
        <select id="board" value={data.institude} onChange={TypeLive} name='institude'>
          <option value="">Select Board / University</option>

          <option value="CBSE">CBSE</option>
          <option value="CISCE (ICSE/ISC)">CISCE (ICSE/ISC)</option>
          <option value="NIOS">NIOS</option>

          <option value="BSEB Bihar">BSEB Bihar</option>
          <option value="JAC Jharkhand">JAC Jharkhand</option>
          <option value="UP Board">UP Board</option>
          <option value="WBCHSE">WBCHSE</option>
          <option value="WBBSE">WBBSE</option>
          <option value="RBSE Rajasthan">RBSE Rajasthan</option>
          <option value="MP Board">MP Board</option>
          <option value="PSEB Punjab">PSEB Punjab</option>
          <option value="HBSE Haryana">HBSE Haryana</option>
          <option value="GSEB Gujarat">GSEB Gujarat</option>
          <option value="Maharashtra Board">Maharashtra Board</option>
          <option value="Kerala Board">Kerala Board</option>
          <option value="Tamil Nadu Board">Tamil Nadu Board</option>
          <option value="Karnataka Board">Karnataka Board</option>
          <option value="Odisha CHSE">Odisha CHSE</option>

          <option value="Delhi University">Delhi University</option>
          <option value="Jawaharlal Nehru University">Jawaharlal Nehru University</option>
          <option value="Banaras Hindu University">Banaras Hindu University</option>
          <option value="Aligarh Muslim University">Aligarh Muslim University</option>
          <option value="Calcutta University">Calcutta University</option>
          <option value="University of Mumbai">University of Mumbai</option>
          <option value="Anna University">Anna University</option>
          <option value="Osmania University">Osmania University</option>
          <option value="Vinoba Bhave University">Vinoba Bhave University</option>
          <option value="Ranchi University">Ranchi University</option>
          <option value="Other">Other</option>
        </select>
         <small className={errors?.institude ? "error" : "success"}>
            {errors?.institude || success?.institude}
          </small>
      </div>

      {/* College / Institute */}
      <div className="input-box">
        <label htmlFor="college">College / Institute Name <span>*</span></label>
        <input
          type="text"
          id="college"
          name='collage'
          value={data.collage} onChange={TypeLive}
          placeholder="Enter College / Institute Name"
        />
         <small className={errors?.collage ? "error" : "success"}>
            {errors?.collage || success?.collage}
          </small>
      </div>

      {/* Percentage */}
      <div className="input-box">
        <label htmlFor="percentage">Percentage / CGPA <span>*</span></label>
        <input
          type="text"
          id="percentage"
          name='percentage'
          value={data.percentage} onChange={TypeLive}
          placeholder="Example: 82.50 or 8.4 CGPA"
        />
         <small className={errors?.percentage ? "error" : "success"}>
            {errors?.percentage || success?.percentage}
          </small>
      </div>

      {/* Result Status */}
      <div className="input-box">
        <label htmlFor="resultStatus">Result Status <span>*</span></label>
        <select id="resultStatus" name='status' value={data.status} onChange={TypeLive}>
          <option value="">Select Status</option>
          <option value="Pass">Pass</option>
          <option value="First Division">First Division</option>
          <option value="Second Division">Second Division</option>
          <option value="Third Division">Third Division</option>
          <option value="Distinction">Distinction</option>
          <option value="Fail">Fail</option>
          <option value="Appearing">Appearing</option>
          <option value="Result Awaited">Result Awaited</option>
          <option value="Compartment">Compartment</option>
        </select>
         <small className={errors?.status ? "error" : "success"}>
            {errors?.status || success?.status}
          </small>
      </div>

      {/* Passing Year */}
      <div className="input-box">
        <label htmlFor="passYear">Passing Year <span>*</span></label>
        <input
          type="number"
          id="passYear"
          name='year'
          value={data.year} onChange={TypeLive}
          min="1950"
          max="2100"
          placeholder="2026"
        />
         <small className={errors?.year ? "error" : "success"}>
            {errors?.year || success?.year}
          </small>
      </div>

      {/* Medium */}
      <div className="input-box">
        <label htmlFor="medium">Medium of Study <span>*</span></label>
        <select id="medium" name='mediam' value={data.mediam} onChange={TypeLive}>
          <option value="">Select Medium</option>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Urdu">Urdu</option>
          <option value="Bengali">Bengali</option>
          <option value="Marathi">Marathi</option>
          <option value="Gujarati">Gujarati</option>
          <option value="Punjabi">Punjabi</option>
          <option value="Telugu">Telugu</option>
          <option value="Tamil">Tamil</option>
          <option value="Kannada">Kannada</option>
          <option value="Malayalam">Malayalam</option>
          <option value="Odia">Odia</option>
          <option value="Assamese">Assamese</option>
          <option value="Other">Other</option>
        </select>
        <small className={errors?.mediam ? "error" : "success"}>
            {errors?.mediam || success?.mediam}
          </small>
      </div>

      {/* Marital Status */}
      <div className="input-box">
        <label htmlFor="marital">Marital Status <span>*</span></label>
        <select id="marital" name='marital' value={data.marital} onChange={TypeLive}>
          <option value="">Select Marital Status</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Divorced">Divorced</option>
          <option value="Widowed">Widowed</option>
          <option value="Separated">Separated</option>
          <option value="Prefer Not to Say">Prefer Not to Say</option>
        </select>
        <small className={errors?.marital ? "error" : "success"}>
            {errors?.marital || success?.marital}
          </small>
      </div>

      <div className="btns-move">
        <button type="button" onClick={() => move(0)} >Previous</button>
        <button type="button" onClick={handleNext}>Next</button>
      </div>

    </div>
  )
}

export default Education