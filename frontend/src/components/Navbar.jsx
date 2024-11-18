import React, { useEffect, useState } from 'react'
import logo from "../images/Logoo.png"
import { Link, useNavigate } from 'react-router-dom'
import Avatar from 'react-avatar';
import { MdLightMode } from "react-icons/md";
import { BsGridFill } from "react-icons/bs";
import { api_base_url, toggleClass } from '../helper';

const Navbar = ({ isGridLayout, setIsGridLayout }) => {

  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [error, setError] = useState("");;

  useEffect(() => {
    fetch(api_base_url + "/api/getUserDetails", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: localStorage.getItem("userId")
      })
    }).then(res => res.json()).then(data => {
      if (data.success) {
        setData(data.user);
      }
      else {
        setError(data.message);
      }
    })
  }, [])

  const logout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    window.location.reload();
  }

  return (
    <>
      <div className="navbar flex items-center justify-between px-[100px] h-[80px] bg-[#141414]">
        <div className="logo">
          <img className='w-[120px] h-20  cursor-pointer' src={logo} alt="" />
        </div>
<div className="links flex items-center gap-4  p-4 rounded-md">
  <Link className="text-white hover:text-blue-400 transition-colors duration-300">Home</Link>
  <Link className="text-white hover:text-green-400 transition-colors duration-300">About</Link>
  <Link className="text-white hover:text-yellow-400 transition-colors duration-300">Contact</Link>
  <Link className="text-white hover:text-purple-400 transition-colors duration-300">Services</Link>
  <button onClick={logout} className="btnBlue !bg-red-500 min-w-[120px] ml-4 hover:!bg-red-600">Logout</button>
  <Avatar
    onClick={() => {
      toggleClass(".dropDownNavbar", "hidden");
    }}
    name={data ? data.name : ""}
    size="40"
    round="50%"
    className="cursor-pointer ml-4"
  />
</div>


        <div className='dropDownNavbar hidden absolute right-[60px] top-[80px] shadow-lg shadow-black/50 p-[10px] rounded-lg bg-[#1A1919] w-[150px] h-[160px]'>
          <div className='py-[10px] border-b-[1px] border-b-[#fff]'>
            <h3 className='text-[17px]' style={{ lineHeight: 1 }}>{data ? data.name : ""}</h3>
          </div>
          <i className='flex items-center gap-2 mt-3 mb-2 cursor-pointer' style={{ fontStyle: "normal" }}><MdLightMode className='text-[20px]' /> Light mode</i>
          <i onClick={() => setIsGridLayout(!isGridLayout)} className='flex items-center gap-2 mt-3 mb-2 cursor-pointer' style={{ fontStyle: "normal" }}><BsGridFill className='text-[20px]' /> {isGridLayout ? "List" : "Grid"} layout</i>
        </div>
      </div>
    </>
  )
}

export default Navbar