import React from "react";
import NavBar from "./NavBar";
import { news } from "./News";
const Home = () => {
  return (
    <>
    <NavBar/>
      <div className="bg-gray-900 tracking-wide pt-[5rem] p-[2rem] text-white">
        {Object.entries(news).map((v, i) => (
          <div key={i}>
            <h1 className="font-bold text-3xl tracking-wide">{v[1].heading}</h1>
            <br/> 
            <div className="flex justify-center items-center">
          
              <img className="" src={v[1].image} alt="" />
            </div>
            <p className="tracking-widest">{v[1].news}</p>
            <br />
            <br />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
