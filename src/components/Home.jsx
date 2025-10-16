import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="flex flex-col items-center space-y-3">
      <h1 className="text-4xl pt-5">Home</h1>

      <Link
        to="login"
        className="btn btn-wide block bg-[#1A77F2] text-white border-[#005fd8] pt-2"
      >
        Login
      </Link>
      <Link
        to="register"
        className="btn btn-wide block bg-[#1A77F2] text-white border-[#005fd8] pt-2"
      >
        Register
      </Link>
    </div>
  );
};

export default Home;
