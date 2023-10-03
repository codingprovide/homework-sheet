import { useState } from "react";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs"
import { addDays, eachDayOfInterval, endOfWeek, subDays, startOfWeek, format, getDay } from "date-fns";

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

  const handleTodayDate = function (): void {
    setSpecifiedDate(new Date());
  }

  const tbodyRight = "border border-t-0 border-l-0 border-gray-100 border-r-gray-200";

  const tuesdayCourse = [
    {
      teacher:"林基源",
      course:"數位邏輯概論",
      classroom:"工程館5F,E531"
    }
  ]

  return (
    <div className=" text-sm p-4">
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
        {weekList.map((day, weekindex) =>
          <div className=" flex-row justify-center items-center border-l-[1px] border-gray-100">
            <span key={weekindex} className=" w-full inline-block text-center mt-2">
              {day}
            </span>
            <div className=" flex justify-center items-center mb-3 mt-2">
              <span className={
                format(specifiedDate, "dd") === format(weekDates[weekindex], "dd") ?
                  "bg-blue-500  w-6 h-6 inline-block rounded-full leading-6 text-center text-white" :
                  "  inline-block leading-6 w-full text-center"
              }>
                {format(weekDates[weekindex], "dd")}
              </span>
            </div>
          </div>
        )}
        {/* <div className=" border-l border-gray-100 col-span-1"></div> */}
      </div>
      {/* table body */}
      <div className="flex h-screen w-full relative">
        <div className=" border border-t-0 flex-none w-2/6 grid grid-rows-10 text-center text-xs">
          <div>第10節</div>
          <div>18:10 - 18:55</div>
          <div>第11節</div>
          <div>19:00 - 19:45</div>
          <div>第12節</div>
          <div>19:50 - 20:35</div>
          <div>第13節</div>
          <div>20:40 - 21:25</div>
          <div>第14節</div>
          <div>21:30 - 22:15</div>
        </div>
        <div className="h-full w-4/6 grid grid-rows-10">
          <div className={tbodyRight}></div>
          <div className={tbodyRight}></div>
          <div className={tbodyRight}></div>
          <div className={tbodyRight}></div>
          <div className={tbodyRight}></div>
          <div className={tbodyRight}></div>
          <div className={tbodyRight}></div>
          <div className={tbodyRight}></div>
          <div className={tbodyRight}></div>
          <div className={`${tbodyRight} border-b-2`} ></div>
        </div>

        {getDay(specifiedDate) === 2 && (
          <div className="h-full w-4/6 grid grid-rows-5 absolute z-10 right-0 p-1">
            <div className=" bg-blue-50 text-center">
                <div>{tuesdayCourse[0].teacher}</div>
                <div>{tuesdayCourse[0].course}</div>
                <div>{tuesdayCourse[0].classroom}</div>
            </div>
            <div className=" bg-blue-50 text-center">
                <div>{tuesdayCourse[0].teacher}</div>
                <div>{tuesdayCourse[0].course}</div>
                <div>{tuesdayCourse[0].classroom}</div>
            </div>
            <div className=" bg-blue-50 text-center">
                <div>{tuesdayCourse[0].teacher}</div>
                <div>{tuesdayCourse[0].course}</div>
                <div>{tuesdayCourse[0].classroom}</div>
            </div>
            <div className=" bg-green-50 mt-1"></div>
            <div className=" bg-orange-50 mt-1"></div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Calendar

