"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { LoginAdmin } from "@/libs/actions";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const router = useRouter();
  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    let validationErrors = {};

    if (username.length < 2) {
      validationErrors.username = "Username must be at least 4 characters";
    }

    if (password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // 处理登录逻辑
      const formData = new FormData(event.target);
      formData.append("username", username);
      formData.append("password", password);

      try {
        const result = await LoginAdmin(formData);

        if (result) {
          Cookies.set("token", result.details.access_token);
          router.push("/admin");

          toast.success(`response status code ${result.code}`);
        } else {
          toast.error(`response status code ${result.code}`);
        }
      } catch (error) {
        toast.error(`An error occurred!${error}`);
      }
      // 可以在这里调用实际的登录服务
    }
  };

  return (
    <form
      onSubmit={handleLoginSubmit}
      className="py-4 mt-8 mx-2 border border-black rounded-md md:max-w-80 md:mx-auto xl:relative xl:top-10"
    >
      <p className="font-semibold tracking-tight text-2xl p-3">Login</p>
      <div className="w-auto flex flex-col mx-3 mb-2">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="outline-none ring-1 ring-black rounded pl-2 file:bg-transparent file:border-none"
        />
        {errors.username && <p className="text-red-500">{errors.username}</p>}
      </div>
      <div className="w-auto flex flex-col mx-3 mb-2">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="outline-none ring-1 ring-black rounded pl-2 file:bg-transparent file:border-none"
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}
      </div>
      <button
        type="submit"
        className="mx-3 mt-8 px-4 py-1 rounded-md border border-black "
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;
