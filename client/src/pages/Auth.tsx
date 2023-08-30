import React, { FC } from "react";
import axios from "axios";

const Auth: FC<any> = ({ onAuth }) => {
  const onSubmit = async (e: any) => {
    e.preventDefault();
    const { value } = e.target[0];

    const res: any = await axios
      .post("http://localhost:3333/auth", {
        username: value,
      })
      .catch((e) => {
        console.log("error:", e);
      });

    onAuth({ ...res.data, secret: value });
  };
  return (
    <div className="container mx-auto bg-purple-900 min-h-screen flex flex-col justify-center">
      <form onSubmit={onSubmit} className="mb-[50px] ">
        <h1 className="text-center text-[30px] font-[700] text-white">
          Welcome
        </h1>
        <h2 className="text-center text-[25px] font-[600] text-white">
          Set a username to get started
        </h2>
        <div className="flex flex-col w-[70%]   text-[#fff] justify-center mx-auto items-center mt-[30px] ">
          <span className="mb-[10px]">Username</span>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="p-[10px] outline-none rounded-[10px] text-black w-[50%]"
          />
          <button
            type="submit"
            className="mt-[20px] bg-green-400 w-[50%] p-[10px] rounded-[10px] border-none"
          >
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
