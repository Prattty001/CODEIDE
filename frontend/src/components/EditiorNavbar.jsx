import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../images/Logoo.png";
import { FiDownload } from "react-icons/fi";

const EditiorNavbar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <>
      <div className="EditiorNavbar flex items-center justify-between px-[100px] h-[80px] bg-[#141414]">
        <div className="logo">
          <img 
            className="w-[150px] cursor-pointer" 
            src={logo} 
            alt="Logo" 
            onClick={handleLogoClick} 
          />
        </div>
        <p>
          File / <span className="text-[gray]">My first project</span>
        </p>
        <i className="p-[8px] btn bg-black rounded-[5px] cursor-pointer text-[20px]">
          <FiDownload />
        </i>
      </div>
    </>
  );
};

export default EditiorNavbar;
