import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs"
import format from "date-fns/format";
const WeekList = ["日", "一", "二", "三", "四", "五", "六"];

function Calendar() {
  return (
    <div className=" text-xs p-4">
      {/* table herad */}
      <div className=" p-2 bg-slate-50 rounded-t-md">
        <div className="flex justify-between items-center">
          <div>9月 2023</div>
          <div className=" flex justify-center items-center border p-1 rounded-md">
            <button className=" text-slate-300"><BsCaretLeftFill /></button>
            <span>Today</span>
            <button className=" text-slate-300"><BsCaretRightFill /></button>
          </div>
        </div>
      </div>
      {/* table title */}
      <div className=" grid grid-cols-12 border border-l-1 border-gray-200">
        <div className=" col-span-1"></div>
        <div className=" col-span-10 grid grid-cols-7">
          {WeekList.map((day, weekindex) =>
            <div className=" text-center border-l-[1px] border-gray-100 p-1">
              <span key={weekindex}>
                {day}
                <span>
                  01
                </span>
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

