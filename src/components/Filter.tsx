import React from "react";

interface FilterProps {
  filter: string;
  onChangeFilter: (filter: string) => void;
}

const Filter: React.FC<FilterProps> = ({ filter, onChangeFilter }) => {
  return (
    <div className="flex mb-4">
      <button
        className={`p-2 mr-2 ${
          filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
        onClick={() => onChangeFilter("all")}
      >
        전체보기
      </button>
      <button
        className={`p-2 mr-2 ${
          filter === "completed" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
        onClick={() => onChangeFilter("completed")}
      >
        완료된 내용만 보기
      </button>
      <button
        className={`p-2 ${
          filter === "incomplete" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
        onClick={() => onChangeFilter("incomplete")}
      >
        진행 중인 내용만 보기
      </button>
    </div>
  );
};

export default Filter;
