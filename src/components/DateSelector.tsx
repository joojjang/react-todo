import React from "react";
import { formatDate } from "../utils/date";

interface DateSelectorProps {
  selectedDate: string;
  onDateChange: (date: string) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({
  selectedDate,
  onDateChange,
}) => {
  const handlePreviousDay = () => {
    const prevDate = new Date(selectedDate);
    prevDate.setDate(prevDate.getDate() - 1);
    onDateChange(formatDate(prevDate));
  };

  const handleNextDay = () => {
    const nextDate = new Date(selectedDate);
    nextDate.setDate(nextDate.getDate() + 1);
    onDateChange(formatDate(nextDate));
  };

  return (
    <div className="flex items-center mb-4">
      <button className="p-2" onClick={handlePreviousDay}>
        ←
      </button>
      <span className="mx-4">{selectedDate}</span>
      <button className="p-2" onClick={handleNextDay}>
        →
      </button>
    </div>
  );
};

export default DateSelector;
