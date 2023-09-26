import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs"


function App() {
  const toDay:Date = new Date();
  const weekDayNameList: string[] = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
  return (
    <>
      <div className=" container m-auto mt-5">
        <div className=" bg-white w-full h-screen outline outline-slate-200 rounded-xl">

          <div className=" bg-slate-200 h-20 flex justify-start items-center p-5 text-2xl gap-5">
            <span>{toDay.getMonth()+1}月</span>
            <span>{toDay.getFullYear()}年</span>
          </div>

          <div className="flex justify-between items-center">
            {
              weekDayNameList.map((name, index) =>
                <span className=" text-3xl md:text-xl h-full mx-5" key={index}>{name}</span>
              )
            }
          </div>


        </div>
      </div>
    </>
  )
}

export default App