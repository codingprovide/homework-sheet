import { useState } from "react";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs"
import { addDays, eachDayOfInterval, endOfWeek, subDays, startOfWeek, format } from "date-fns";
import { mondayCourse, tuesdayCourse, wednesdayCourse, thuresdayCourse, fridayCourse } from "../../coursesList"
import Courses from "./Courses";


function Calendar() {

  const colorVariants = {
    blue:"bg-blue-50",
    green:"bg-green-50"
  }

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

  const handleTodayDate = function (): void {
    setSpecifiedDate(new Date());
  }

  const handleChooseDate = function (weekindex: number): void {
    let chooseDate = weekDates[weekindex];
    setSpecifiedDate(chooseDate);
  }

  return (
    <div className=" text-sm p-4 h-screen">
      {/* table herad */}
      <div className=" p-2 bg-slate-50 rounded-t-md border border-b-0">
        <div className="flex justify-between items-center">
          <div>{format(specifiedDate, "MM")}月 {format(specifiedDate, "yyyy")}</div>
          <div className=" flex justify-center items-center border p-1 rounded-md gap-3">
            <button className=" text-slate-300 p-1 px-2" onClick={handlePreviousDate}><BsCaretLeftFill size={20} /></button>
            <button onClick={handleTodayDate}>Today</button>
            <button className=" text-slate-300 p-1 px-2" onClick={handleNextDate}><BsCaretRightFill size={20} /></button>
          </div>
        </div>
      </div>
      {/* table title */}
      <div className=" grid grid-cols-7 border border-l-1 border-gray-200 shadow-sm">
        {weekList.map((week, weekindex) =>
          <div className=" flex-row justify-center items-center border-l-[1px] border-gray-100">
            <span key={weekindex} className=" w-full inline-block text-center mt-2">
              {week}
            </span>
            <div className=" flex justify-center items-center mb-3 mt-2">
              <span onClick={() => handleChooseDate(weekindex)} className={
                format(specifiedDate, "dd") === format(weekDates[weekindex], "dd") ?
                  "bg-blue-500  w-7 h-7 inline-block rounded-full leading-7 text-center text-white text-lg hover:cursor-pointer" :
                  "  inline-block leading-6 w-full text-center text-lg hover:cursor-pointer"
              }>
                {format(weekDates[weekindex], "dd")}
              </span>
            </div>
          </div>
        )}
        {/* <div className=" border-l border-gray-100 col-span-1"></div> */}
      </div>
      {/* table body */}
      <div className="flex h-3/4 w-full relative">
        <div className=" border border-t-0 flex-none w-2/6 grid grid-rows-5 text-center text-xs">
          <div className="  flex justify-center items-center">
            <div className="flex-none w-1/3 h-full flex items-center justify-center border-r">10</div>
            <div className=" w-2/3">
              <div className="">18:10</div>
              <div className="">|</div>
              <div>18:55</div>
            </div>
          </div>
          <div className="  flex justify-center items-center">
            <div className="flex-none w-1/3 h-full flex items-center justify-center border-r">11</div>
            <div className=" w-2/3">
              <div className="">19:00</div>
              <div className="">|</div>
              <div>19:45</div>
            </div>
          </div>
          <div className="  flex justify-center items-center">
            <div className="flex-none w-1/3 h-full flex items-center justify-center border-r">12</div>
            <div className=" w-2/3">
              <div className="">19:50</div>
              <div className="">|</div>
              <div>20:35</div>
            </div>
          </div>
          <div className="  flex justify-center items-center">
            <div className="flex-none w-1/3 h-full flex items-center justify-center border-r">13</div>
            <div className=" w-2/3">
              <div className="">20:40</div>
              <div className="">|</div>
              <div>21:25</div>
            </div>
          </div>
          <div className="  flex justify-center items-center">
            <div className="flex-none w-1/3 h-full flex items-center justify-center border-r">14</div>
            <div className=" w-2/3">
              <div className="">21:30</div>
              <div className="">|</div>
              <div>22:15</div>
            </div>
          </div>
        </div>
        <div className="h-full w-4/6 grid grid-rows-10">
          <div className="border border-t-0 border-l-0 border-gray-100 border-r-gray-200"></div>
          <div className="border border-t-0 border-l-0 border-gray-100 border-r-gray-200"></div>
          <div className="border border-t-0 border-l-0 border-gray-100 border-r-gray-200"></div>
          <div className="border border-t-0 border-l-0 border-gray-100 border-r-gray-200"></div>
          <div className="border border-t-0 border-l-0 border-gray-100 border-r-gray-200"></div>
          <div className="border border-t-0 border-l-0 border-gray-100 border-r-gray-200"></div>
          <div className="border border-t-0 border-l-0 border-gray-100 border-r-gray-200"></div>
          <div className="border border-t-0 border-l-0 border-gray-100 border-r-gray-200"></div>
          <div className="border border-t-0 border-l-0 border-gray-100 border-r-gray-200"></div>
          <div className="border-b-2 border border-t-0 border-l-0 border-gray-100 border-r-gray-200"></div>
        </div>

        <Courses specifiedDate={specifiedDate}
          mondayCourse={mondayCourse}
          tuesdayCourse={tuesdayCourse}
          thuresdayCourse={thuresdayCourse}
          wednesdayCourse={wednesdayCourse}
          fridayCourse={fridayCourse}
          colorVariants={colorVariants}
          />

      </div>
    </div>
  )
}

export default Calendar

