import React, { useState } from 'react'
import Contacts from './components/Contacts'
import Education from './components/Education'
import Skill from './components/Skill'
import "./App.css"
import Address from './components/Address'
import Greeting from './components/Greeting'
import Footer from './components/Footer'
import Header from './components/Header'
import Progress from './components/Progress'
const App = () => {
const [steper,setSteper] = useState(1);
  //pattern
  const pattern = {
    time:new Date(),
    name: "",
    email: "",
    mobile: "",
    atrMobile: "",
    DOB: "",
    gender: "",
    caste: "",
    education:"",
    institude:"",
    collage:"",
    percentage:"",
    status:"",
    year:"",
    mediam:"",
    marital:"",
    skills: [],
    experience:"",
    language:[],
    languageExperience: "",
    goal: "",
    areaType: "",
    country: "india",
    state:"",
    district:"",
    block:"",
    panchayat:"",
    city:"",
    ward:"",
    locality:"",
    landmark:"",
    house:"",
    pin:"",
    address:"",
    latitude:"",
    longitude:""
  }
  //data capture
  const [data,setData] = useState(pattern);

  const TypeLive = (e) => {
  const { name, type, value, checked, multiple, options } = e.target;

  let fieldValue;

  if (type === "checkbox") {
    fieldValue = checked;
  } else if (multiple) {
    fieldValue = [...options]
      .filter((option) => option.selected)
      .map((option) => option.value);
  } else {
    fieldValue = value;
  }

  setData((prev) => ({
    ...prev,
    [name]: fieldValue,
  }));
};

  const move = (notice) =>{
    if(notice === 0){
      setSteper(pre => pre > 1? pre - 1: pre)
    }else{
      setSteper(pre => pre+notice)
    }
  }
  
  const reset = () =>{
    setData(pattern)
  }
  

  return (
    <div className={`app`}>
      <Header/>
      
    <form>
      {steper >= 1 && steper <= 4 && <Progress w={steper}/>}
      {steper === 1 && <Contacts data={data}  TypeLive={TypeLive} move={move}/>}
      {steper === 2 && <Education data={data} TypeLive={TypeLive} move={move}/>}
      {steper === 3 && <Skill data={data} TypeLive={TypeLive} move={move}/>}
      {steper === 4 && <Address data={data} TypeLive={TypeLive} move={move}/>}
      {steper === 5 && <Greeting reset={reset} data={data}/>}
    </form>
    <Footer/>
    </div>
  )
}

export default App