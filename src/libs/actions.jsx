"use server";

import { cookies } from "next/headers";
import { objectToString } from "./utils";

export async function HandleUpload(formData) {
  const cookieStore = cookies()
  const token = cookieStore.get("token")?.value;
  
  try {
    const response = await fetch("http://127.0.0.1:2333/api/admin/upload", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    const responseDetails = await response.json();

    if (response.ok) {
      return {code: response.status, details: responseDetails}
    } else {
      return {code: response.status}
    }
  } catch (error) {
    return error
  }
}

export async function LoginAdmin(formData) {

  try {
    const response = await fetch("http://127.0.0.1:2333/api/admin/login", {
      method: "POST",
      body: formData,
    });
    const responseDetails = await response.json();

    if (response.ok) {
      // return `Successful login ${responseText}`
      return {code: response.status, details: responseDetails}
    } else {
      return {code: response.status, details: responseDetails}
    }
  } catch (error) {
    return error
  }
}

