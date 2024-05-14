import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Loginform(props) {
  const { logged, setLogged } = props;
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [visible, setVisible] = useState(false);

  function changeHandler(event) {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setLogged((prev) => !prev);
    toast.success("Logged in", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigate("/dashboard");
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={submitHandler} className="bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            required
            type="email"
            name="email"
            id="email"
            className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-800"
            placeholder="Enter email address"
            onChange={changeHandler}
          />
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              required
              type={visible ? "text" : "password"}
              name="password"
              id="password"
              className="appearance-none border rounded w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-800"
              placeholder="Enter password"
              onChange={changeHandler}
              value={values.password}
            />
            <div
              className="absolute inset-y-0 right-0 flex items-center mr-3 cursor-pointer"
              onClick={() => setVisible((prev) => !prev)}
            >
              {visible ? (
                <AiOutlineEyeInvisible className="text-gray-400" />
              ) : (
                <AiOutlineEye className="text-gray-400" />
              )}
            </div>
          </div>
          <Link to="#" className="text-cyan-500 text-xs">
            Forgot Password
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-yellow-500 text-black py-3 px-6 rounded-full font-semibold">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default Loginform;
