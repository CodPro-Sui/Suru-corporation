import { useState, useCallback } from "react";
import "../style/address.css";
import Loading from "./Loading";
import "../style/loading.css"
const Address = ({ data, TypeLive ,move}) => {

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState({});
const [access,setAccess] = useState(false);
const [loading,setLoading] = useState(false);

  const validate = useCallback(() => {
    let err = {};
    let ok = {};

    // ==========================
    // Skills
    // ==========================
    if (!data.areaType) {
      err.areaType = "choose area!"
    } else {
      ok.areaType = "selected!"
    }

    if (!data?.state) {
      err.state = "please select state!"
    } else {
      ok.state = "selected!"
    }
    if (!data.district) {
      err.district = "please select district!"
    } else {
      ok.district = "selected!"
    }
    if (!data.block && !/^[a-zA-Z\s]{3,}$/.test(data.block) && !data.block.trim() !== "") {
      err.block = "please block name!"
    } else {
      ok.block = "nice!"
    }
    if (!data.panchayat && !/^[a-zA-Z\s]{3,}$/.test(data.panchayat) && !data.panchayat.trim() !== "") {
      err.panchayat = "please panchayat name!"
    } else {
      ok.block = "nice!"
    }
    if (!data.city && !/^[a-zA-Z\s]{3,}$/.test(data.city) && !data.city.trim() !== "") {
      err.city = "please city name!"
    } else {
      ok.city = "nice!"
    }
    if (!data.pin && !/^\d{6,}$/.test(data.pin)) {
      err.pin = "enter pin!"
    } else {
      ok.pin = "nice"
    }
    if (!data.address) {
      err.address = "please enter address!"
    } else if (data.address.length < 15) {
      err.address = "to short address at least 15 words!"
    } else {
      ok.address = "ok"
    }


    setErrors(err);
    setSuccess(ok);

    return Object.keys(err).length === 0;
  }, [data]);

  // ==========================
  // Next Button
  // ==========================
  const handleNext = async (e) => {
    e.preventDefault();
    if(!validate()) return;
    setLoading(true);
    try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxCbScd2R6BLT2jodb6JUsTcWw_4R4vA50S6bA1tOxA3WN1eVJgaA6dOVLPiLKiGrcDkg/exec",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();

    if (result.success) {
      setLoading(false);
      move(1)
    } else {
      alert(result.message);
    }

  } catch (err) {
    console.log(err);
    alert("Something went wrong!");
  }

  };

  // ===============================
  // Get Current Location
  // ===============================
  const handleLocation = useCallback(() => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported.");
      setAccess(false);
      return;
    }
    setLoading(true)
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        TypeLive({
          target: {
            name: "latitude",
            value: position.coords.latitude,
          },
        });
        TypeLive({
          target: {
            name: "longitude",
            value: position.coords.longitude,
          },
        });
        setAccess(true);
        setLoading(false);
        
      },
      () => {
        alert("Unable to fetch location.");
      }
    );
  },[]);

  return (
    <div id="addressForm">
      <h2>Address Details</h2>
      <p>Please provide your location.</p>
      {/* Area Type */}

      <div className="input-box">

        <label>
          Area Type <span>*</span>

        </label>

        <select name="areaType" value={data.areaType} onChange={TypeLive}>
          <option value="">Select Area</option>
          <option value="Urban">Urban</option>
          <option value="Rural">Rural</option>

        </select>
        <small className={errors?.areaType ? "error" : "success"}>
            {errors?.areaType || success?.areaType}
          </small>

      </div>
      {/* Country */}

      <div className="input-box">

        <label>
          Country <span>*</span>

        </label>

        <select name="country" value={data.country} onChange={TypeLive}>
          <option value="India">India</option>
        </select>
        

      </div>
      {/* State */}

      <div className="input-box">

        <label>
          State <span>*</span>

        </label>

        <select name="state" value={data.state} onChange={TypeLive}>
          <option value="">Select State</option>
          <option value="Jharkhand">Jharkhand</option>

        </select>
        <small className={errors?.state ? "error" : "success"}>
            {errors?.state || success?.state}
          </small>

      </div>
      {/* District */}

      <div className="input-box">

        <label>
          District <span>*</span>

        </label>
        <select name="district" value={data.district} onChange={TypeLive}>
          <option value="">Select District</option>
          <option value="Bokaro">Bokaro</option>
          <option value="Chatra">Chatra</option>
          <option value="Deoghar">Deoghar</option>
          <option value="Dhanbad">Dhanbad</option>
          <option value="Dumka">Dumka</option>
          <option value="East Singhbhum">East Singhbhum</option>
          <option value="Garhwa">Garhwa</option>
          <option value="Giridih">Giridih</option>
          <option value="Godda">Godda</option>
          <option value="Gumla">Gumla</option>
          <option value="Hazaribagh">Hazaribagh</option>
          <option value="Jamtara">Jamtara</option>
          <option value="Khunti">Khunti</option>
          <option value="Koderma">Koderma</option>
          <option value="Latehar">Latehar</option>
          <option value="Lohardaga">Lohardaga</option>
          <option value="Pakur">Pakur</option>
          <option value="Palamu">Palamu</option>
          <option value="Ramgarh">Ramgarh</option>
          <option value="Ranchi">Ranchi</option>
          <option value="Sahibganj">Sahibganj</option>
          <option value="Saraikela-Kharsawan">Saraikela-Kharsawan</option>
          <option value="Simdega">Simdega</option>
          <option value="West Singhbhum">West Singhbhum</option>

        </select>
        <small className={errors?.district ? "error" : "success"}>
            {errors?.district || success?.district}
          </small>

      </div>
      {/* Block */}

      <div className="input-box">

        <label>
          Block <span>*</span>

        </label>

        <input
          type="text"
          name="block"
          placeholder="Enter Block"
          value={data.block}
          onChange={TypeLive}
        />
        <small className={errors?.block ? "error" : "success"}>
            {errors?.block || success?.block}
          </small>

      </div>
      {/* Panchayat */}

      <div className="input-box">

        <label>
          Panchayat / Municipality <span>*</span>

        </label>

        <input
          type="text"
          name="panchayat"
          value={data.panchayat}
          onChange={TypeLive}
        />
        <small className={errors?.panchayat ? "error" : "success"}>
            {errors?.panchayat || success?.panchayat}
          </small>

      </div>
      {/* Village / City */}

      <div className="input-box">

        <label>
          Village / Town / City <span>*</span>

        </label>

        <input type="text" name="city" value={data.city} onChange={TypeLive} />
        <small className={errors?.city ? "error" : "success"}>
            {errors?.city || success?.city}
          </small>

      </div>
      {/* Ward */}

      <div className="input-box">
        <label>Ward Number</label>

        <input type="text" name="ward" value={data.ward} onChange={TypeLive} />
        <small className="message"></small>

      </div>
      {/* Locality */}

      <div className="input-box">
        <label>Locality / Mohalla</label>

        <input
          type="text"
          name="locality"
          value={data.locality}
          onChange={TypeLive}
        />
        <small className="message"></small>

      </div>
      {/* Landmark */}

      <div className="input-box">
        <label>Nearest Landmark</label>

        <input
          type="text"
          name="landmark"
          value={data.landmark}
          onChange={TypeLive}
        />
        <small className="message"></small>

      </div>
      {/* House */}

      <div className="input-box">
        <label>House Number</label>

        <input
          type="text"
          name="house"
          value={data.house}
          onChange={TypeLive}
        />
        <small className="message"></small>

      </div>
      {/* PIN */}

      <div className="input-box">

        <label>
          PIN Code <span>*</span>

        </label>

        <input
          type="text"
          name="pin"
          maxLength={6}
          value={data.pin}
          onChange={TypeLive}
        />
        <small className={errors?.pin ? "error" : "success"}>
            {errors?.pin || success?.pin}
          </small>

      </div>
      {/* Address */}

      <div className="input-box">

        <label>
          Full Address <span>*</span>

        </label>

        <textarea
          name="address"
          rows={4}
          value={data.address}
          onChange={TypeLive}
        />
        <small className={errors?.address ? "error" : "success"}>
            {errors?.address || success?.address}
          </small>

      </div>
      {/* Latitude */}

      <div className="input-box">
        <label>Latitude</label>

        <input type="text" name="latitude" value={data.latitude} readOnly />

      </div>
      {/* Longitude */}

      <div className="input-box">
        <label>Longitude</label>

        <input type="text" name="longitude" value={data.longitude} readOnly />

      </div>

      <div className="btns-move">
        <button type="button" onClick={() => move(0)}>Previous</button>
      {loading?<Loading/>:access? <button type="submit" onClick={handleNext}>      Submit     </button>:
      <button type="button" onClick={handleLocation}><i className="fa-solid fa-location-dot"></i></button>}
      </div>

    </div>
  );
};

export default Address;
