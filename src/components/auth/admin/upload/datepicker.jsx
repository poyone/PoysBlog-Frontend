"use client";

import { useState } from "react";
import DatePickerComponent from "@/components/ui/DatePickerButton";
import format from "date-fns/format";

export default function DatePicker({ FieldName }) {
  const formattedDate = format(new Date(), "yyyy-MM-dd");
  const [date, setDate] = useState(formattedDate);

  return (
    <>
      <label htmlFor={FieldName} className="block mb-2">
        Pick Date
        <input
          // onChange={setDate}
          value={date}
          name={FieldName}
          id={FieldName}
          type="text"
          className="hidden"
        />
        <DatePickerComponent onDateChange={setDate} />
      </label>
    </>
  );
}
