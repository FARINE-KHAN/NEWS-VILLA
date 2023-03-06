import React from "react";
import NavBar from "./NavBar";

const About = () => {
  return (
    <div className="bg-gray-900 w-full py-[0.1rem]   ">
      <NavBar />
      <div className=" text-white  m-[10rem] rounded-[2rem]   md:auto md:bg-gray-500">
        <div className="  md:flex md:justify-center md:items-center md:p-[5rem] md:m-[6rem] w-4/5 md:w-4/5">
       <div className="flex justify-center items-center flex-col "> <h1>
       <a href="https://github.com/FARINE-KHAN" className="md:text-2xl">  <i className="fa-brands fa-github"></i> &nbsp;
          GitHub</a> 
        </h1><br/>
        <h1>
       <a href="https://www.linkedin.com/in/farine-khan-329299241/" className="md:text-2xl ">  
          <i className="fa-brands fa-linkedin"></i>&nbsp;
          LinkedIn</a>
        </h1><br/>
        <h1>
       <a href="https://instagram.com/khan_farine" className="md:text-2xl"> 
          <i className="fa-brands fa-instagram"></i>&nbsp;
          Instagram</a>
        </h1></div></div>
      </div>
    </div>
  );
};

export default About;
