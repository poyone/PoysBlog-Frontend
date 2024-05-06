// components/DatePickerButton.js
import React, { useState, useRef, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css"; // 导入样式
import format from "date-fns/format";

const DatePickerButton = ({ onDateChange }) => {
  const [selectedDay, setSelectedDay] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef();

  // 格式化日期显示
  // const formattedDate = format(selectedDay, "yyyy-MM-dd");

  // 点击按钮切换日历显示
  const toggleDatePicker = () => {
    setIsVisible(!isVisible);
  };

  // 选择日期后更新并隐藏日历
  const handleDayClick = (day) => {
    const formattedDay = format(day, "yyyy-MM-dd");
    setSelectedDay(day);
    onDateChange(formattedDay);  // 更新为格式化的日期字符串
    setIsVisible(false);
  };

  // 点击外部隐藏日历
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={buttonRef}>
      <button
        type="button"
        onClick={toggleDatePicker}
        className=" border border-black p-1 rounded"
      >
        {selectedDay ? format(selectedDay, "yyyy-MM-dd"): "Pick Date"}
      </button>
      {isVisible && (
        <div className="absolute bg-white border border-black rounded-md z-10 mt-2">
          <DayPicker
            mode="single"
            captionLayout="dropdown"
            fromYear={1984}
            toYear={2025}
            selected={selectedDay}
            onSelect={handleDayClick}
          />
        </div>
      )}
    </div>
  );
};

export default DatePickerButton;
