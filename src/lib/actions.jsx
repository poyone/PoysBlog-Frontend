"use server"

import { format } from "date-fns";
import { cookies } from "next/headers";

export async function UploadArticle(formdata) {
  const formData = new FormData();
  formData.append("file", formdata.file[0]);
  formData.append("title", formdata.title);
  formData.append("category", formdata.category);
  formData.append("tags", formdata.tags);
  const formattedDate = format(formdata.createdAt, "yy-MM-dd");
  formData.append("createdAt", formattedDate);

  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  try {
    const response = await fetch("http://127.0.0.1:2333/admin/upload", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`, // 将 token 添加到请求头中
      },
    });
    const resDetails = await response.json();
    if (response.ok) {
      // 上传成功处理逻辑
      return { state: 200, detail: resDetails };
    } else {
      return { state: "", detail: resDetails };
    }
  } catch (error) {
    throw new Error(`UploadArticle ${error.message}`);
  }
}

export async function LoginAdmin(formdata) {
  const formData = new FormData();
  formData.append("username", formdata.username);
  formData.append("password", formdata.password);

  try {
    const response = await fetch("http://127.0.0.1:2333/admin/login", {
      method: "POST",
      body: formData,
    });
    const resDetails = await response.json();
    if (response.ok) {
      
      return { state: 200, detail: resDetails };
    } else {
      return { state: "", detail: resDetails };
    }
  } catch (error) {
    throw new Error(`LoginAdmin ${error.message}`);
  }
}

export async function GetAllArticles() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  const response = await fetch("http://127.0.0.1:2333/admin/articles", {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${token}`, // 将 token 添加到请求头中
    },
  });

  const data = await response.json();
  
  return data
}