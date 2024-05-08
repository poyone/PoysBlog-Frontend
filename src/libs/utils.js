import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


export function objectToString(obj) {
  let result = "";
  for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
          // 添加每个键值对到结果字符串中，格式为 "key: value"
          // 并确保每个键值对之间有逗号和空格分隔
          if (result.length > 0) {
              result += ", "; // 在键值对之间添加逗号和空格
          }
          result += `${key}: ${obj[key]}`;
      }
  }
  return result;
}