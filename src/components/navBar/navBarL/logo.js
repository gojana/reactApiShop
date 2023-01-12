import React from 'react';
import imgLogo from './../../../assets/elviejov3.png';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link
      to="/welcome"
      className="btn btn-ghost normal-case ml-5 text-3xl sm:ml-0"
    >
      <img src={imgLogo} alt="" className="h-14 w-40"></img>
    </Link>
  );
}
export default Logo;
