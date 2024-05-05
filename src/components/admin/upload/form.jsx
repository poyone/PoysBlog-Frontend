"use client";

import { useState } from "react";

import { submitForm } from "@/libs/actions";
import { HandleUpload } from "@/libs/actions";
import DatePickerButton from "@/components/ui/DatePickerButton";

export default function FormComponent() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);
  const [date, setDate] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    setIsSubmitting(true);
    const result = await submitForm(formData);
    setIsSubmitting(false);

    setSubmissionResult(result);
  };

  return (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="flex flex-col items-start ml-8 mr-2 mt-4 p-2 border border-black rounded-md"
    >
      {/* 表单内容 */}
      <InputFeild
        inputName={"file"}
        inputType="file"
        labelContent={"file Love"}
      />
      <InputFeild inputName={"myinput_1"} labelContent={"first Love 1"} />
      <InputFeild inputName={"myinput_2"} labelContent={"first Love 2"} />

      <div className="mt">
        Pick Date
        <DatePickerButton onDateChange={setDate} />
      </div>

      <button
        className=" mt-12 text-center"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>

      {submissionResult !== null && (
        <div>
          {submissionResult ? "Submission Successful!" : "Submission Failed!"}
        </div>
      )}
    </form>
  );
}

function InputFeild({
  inputName,
  inputType = "text",
  labelContent,
  placeholder = "",
}) {
  return (
    <label htmlFor={inputName} className="w-auto flex flex-col mb-2">
      {labelContent}
      <input
        type={inputType}
        id={inputName}
        name={inputName}
        placeholder={placeholder}
        className="outline-none ring-1 ring-black rounded pl-2 file:bg-transparent file:border-none"
      />
    </label>
  );
}
