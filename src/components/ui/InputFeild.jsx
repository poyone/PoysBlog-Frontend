import { cn } from "@/libs/utils";

export function InputFeild({
    inputName,
    inputType = "text",
    labelContent,
    placeholder = "",
    className = "",
  }) {
    return (
      <label htmlFor={inputName} className="w-auto flex flex-col mb-2">
        {labelContent}
        <input
          type={inputType}
          id={inputName}
          name={inputName}
          placeholder={placeholder}
          className={cn("outline-none ring-1 ring-black rounded pl-2 file:bg-transparent file:border-none min-w-[334px]", className)}
          />
      </label>
    );
  }