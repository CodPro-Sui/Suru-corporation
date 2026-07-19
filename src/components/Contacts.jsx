import { useCallback, useState } from "react";
import "../style/contact.css";

const Contacts = ({ data, TypeLive, move }) => {
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState({});

  const validate = useCallback(() => {
    let err = {};
    let ok = {};

    // Name
    if (!data.name.trim()) {
      err.name = "Full name is required.";
    } else if (!/^[A-Za-z ]{3,50}$/.test(data.name)) {
      err.name = "Only letters and spaces allowed.";
    } else {
      ok.name = "Name looks good.";
    }

    // Email
    if (!data.email.trim()) {
      err.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      err.email = "Invalid email.";
    } else {
      ok.email = "Valid Email";
    }

    // Mobile
    if (!/^[6-9]\d{9}$/.test(data.mobile)) {
      err.mobile = "Invalid Mobile";
    } else {
      ok.mobile = "Valid Mobile";
    }

    // Alternative Mobile
    if (data.atrMobile && !/^[6-9]\d{9}$/.test(data.atrMobile)) {
      err.atrMobile = "Invalid Alternative Number";
    } else if (data.atrMobile) {
      ok.atrMobile = "Accepted";
    }

    // DOB
    if (!data.DOB) {
      err.DOB = "Select DOB";
    } else if (new Date(data.DOB) > new Date()) {
      err.DOB = "Future date not allowed";
    } else {
      ok.DOB = "DOB Accepted";
    }

    // Gender
    if (!data.gender) {
      err.gender = "Select Gender";
    } else {
      ok.gender = "Selected";
    }

    // Caste
    if (!data.caste) {
      err.caste = "Select Caste";
    } else {
      ok.caste = "Selected";
    }

    // Address
    if (data.address && data.address.trim().length < 10) {
      err.address = "Minimum 10 characters";
    } else if (data.address) {
      ok.address = "Accepted";
    }

    setErrors(err);
    setSuccess(ok);

    return Object.keys(err).length === 0;
  }, [data]);

  const submitHandler = () => {
    if (!validate()) return;
    move(1);

  };

  return (
    <div className="container">

      <div className="contact">

      <h2>Contact Details</h2>
      <p>Please provide your contact information.</p>
        <div className="input-box">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Ex- CodPro Sui"
            value={data.name}
            onChange={TypeLive}
          />
          <small className={errors.name ? "error" : "success"}>
            {errors.name || success.name}
          </small>
        </div>

        <div className="input-box">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={data.email}
            onChange={TypeLive}
          />
          <small className={errors.email ? "error" : "success"}>
            {errors.email || success.email}
          </small>
        </div>

        <div className="input-box">
          <label>Mobile</label>
          <input
            type="text"
            name="mobile"
            placeholder="7673638652"
            value={data.mobile}
            onChange={TypeLive}
          />
          <small className={errors.mobile ? "error" : "success"}>
            {errors.mobile || success.mobile}
          </small>
        </div>

        <div className="input-box">
          <label>Alternative Mobile</label>
          <input
            type="text"
            name="atrMobile"
            placeholder="6473864795"
            value={data.atrMobile}
            onChange={TypeLive}
          />
          <small className={errors.atrMobile ? "error" : "success"}>
            {errors.atrMobile || success.atrMobile}
          </small>
        </div>

        <div className="input-box">
          <label>DOB</label>
          <input type="date" name="DOB" value={data.DOB} onChange={TypeLive} />
          <small className={errors.DOB ? "error" : "success"}>
            {errors.DOB || success.DOB}
          </small>
        </div>

        <div className="input-box">
          <label>Gender</label>

          <select name="gender" value={data.gender} onChange={TypeLive}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <small className={errors.gender ? "error" : "success"}>
            {errors.gender || success.gender}
          </small>
        </div>

        <div className="input-box">
          <label>Caste</label>

          <select name="caste" value={data.caste} onChange={TypeLive}>
            <option value="">Select Caste</option>
            <option value="General">General</option>
            <option value="OBC">OBC</option>
            <option value="EWS">EWS</option>
            <option value="SC">SC</option>
            <option value="ST">ST</option>
            <option value="Other">Other</option>
          </select>

          <small className={errors.caste ? "error" : "success"}>
            {errors.caste || success.caste}
          </small>
        </div>

        <div className="btns-move">
          <button type="button" onClick={() => move(0)}>
            Previous
          </button>
          <button type="button" onClick={submitHandler}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
