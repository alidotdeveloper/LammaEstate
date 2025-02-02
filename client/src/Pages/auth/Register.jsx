import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleOnSubmit = async(data, e) => {
    console.log(data);

    try {
      const res = await axios.post("http://localhost:3000/api/auth/register", data);
        axios.defaults.withCredentials = true;
        console.log("res", res);
        if (res.status === 200) {
          console.log(res);
          navigate("/login");
        }
      
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.log("hello");
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage(" server error ");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section class="bg-gray-50 ">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight  md:text-2xl dark:text-black">
                Sign Up to your account
              </h1>
              <form
                class="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(handleOnSubmit)}
              >
                <div>
                  <label
                    for="username"
                    class="block mb-2 text-sm font-medium  dark:text-black"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    {...register("username", {
                      required: {
                        value: true,
                        message: "username is required",
                      },
                    })}
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                  {errors.username && (
                    <span style={{ color: "red" }}>
                      {errors.username.message}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium  dark:text-black"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    {...register("email", {
                      required: { value: true, message: "email is required" },
                    })}
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                  {errors.email && (
                    <span style={{ color: "red" }}>{errors.email.message}</span>
                  )}
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium  dark:text-black"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    {...register("password", {
                      required: {
                        message: "password is required",
                      },
                      minLength: {
                        value: 3,
                        message: "Password must be at least 3 characters long!",
                      },
                    })}
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                  {errors.password && (
                    <span style={{ color: "red" }}>
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                  </div>
                </div>
                {errorMessage && (
                  <div style={{ color: "red" }}>
                    {errorMessage}
                  </div>
                )}
                <button class="w-full text-black bg-[#FECE55] hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium  text-sm px-5 py-2.5 text-center dark:hover:bg-primary-700 ">
                  {loading ? "Signing Up" : "Sign Up"}
                </button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="/login"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign in
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
