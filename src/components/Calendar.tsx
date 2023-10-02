import { useState } from "react";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs"
import { addDays, eachDayOfInterval, endOfWeek, subDays, startOfWeek, format } from "date-fns";

function Calendar() {

  const weekList = ["日", "一", "二", "三", "四", "五", "六"];

  const [specifiedDate, setSpecifiedDate] = useState(new Date());

  // 計算一周起始和結束日期
  const startDate = startOfWeek(specifiedDate);
  const endDate = endOfWeek(specifiedDate);
  //生成一周日期列表
  const weekDates = eachDayOfInterval({ start: startDate, end: endDate });

  const handlePreviousDate = function (): void {
    setSpecifiedDate(subDays(specifiedDate, 1));
  }

  const handleNextDate = function (): void {
    setSpecifiedDate(addDays(specifiedDate, 1));
  }

  const handleTodayDate = function():void {
    setSpecifiedDate(new Date());
  }

  console.log("WeekDates", weekDates);

  return (
    <div className=" text-xs p-4">
      {/* table herad */}
      <div className=" p-2 bg-slate-50 rounded-t-md">
        <div className="flex justify-between items-center">
          <div>{format(specifiedDate, "MM")}月 {format(specifiedDate, "yyyy")}</div>
          <div className=" flex justify-center items-center border p-1 rounded-md">
            <button className=" text-slate-300" onClick={handlePreviousDate}><BsCaretLeftFill /></button>
            <button onClick={handleTodayDate}>Today</button>
            <button className=" text-slate-300" onClick={handleNextDate}><BsCaretRightFill /></button>
          </div>
        </div>
      </div>
      {/* table title */}
      <div className=" grid grid-cols-12 border border-l-1 border-gray-200">
        <div className=" col-span-1"></div>
        <div className=" col-span-10 grid grid-cols-7">
          {weekList.map((day, weekindex) =>
            <div className=" flex-row justify-center items-center border-l-[1px] border-gray-100">
              <span key={weekindex} className=" w-full inline-block text-center">
                {day}
              </span>
              <span className={
                format(specifiedDate, "dd") === format(weekDates[weekindex], "dd") ?
                  "bg-blue-500  w-full inline-block rounded-full leading-6 text-center" :
                  "  inline-block leading-6 w-full text-center"
              }>
                {format(weekDates[weekindex], "dd")}
              </span>
            </div>
          )}
        </div>
        <div className=" border-l border-gray-100 col-span-1"></div>
      </div>

    </div>
  )
}

export default Calendar

