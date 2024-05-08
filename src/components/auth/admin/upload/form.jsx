"use client";

import { useState } from "react";
import { format } from "date-fns";
import { HandleUpload } from "@/libs/actions";
import DatePickerButton from "@/components/ui/DatePickerButton";
import { InputFeild } from "@/components/ui/InputFeild";
import toast from "react-hot-toast";

export default function FormComponent() {
  const todayDay = format(new Date(), "yyyy-MM-dd");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [date, setDate] = useState(todayDay);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("date", date);

    try {
      setIsSubmitting(true);
      const result = await HandleUpload(formData);
      setIsSubmitting(false);

      if (result) {
        toast.success(`response status code ${result.code}`);
      } else {
        toast.error(`response status code ${result.code}`);
      }
    } catch (error) {
      setIsSubmitting(false);
      toast.error(`An error occurred!${error}`);
    }
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
      <InputFeild inputName={"title"} labelContent={"Title"} placeholder="React Tutorial" />
      <InputFeild inputName={"category"} labelContent={"Category"} placeholder="Frontend" />
      <InputFeild inputName={"tags"} labelContent={"Tags"} placeholder="Frontend, React" />

      <div className="mt">
        Created At
        <DatePickerButton onDateChange={setDate} />
      </div>

      <button
        className="w-[334px] border border-black rounded p-1 mt-12 text-center"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>

    </form>
  );
}
