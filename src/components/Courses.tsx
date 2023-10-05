import getDay from "date-fns/getDay"
import clsx from "clsx"
import { parse, isWithinInterval } from "date-fns"
import { useState, useEffect } from 'react'

interface CourseList {
    course?: string,
    classroom?: string,
    courseColor?: string,
    classNumber?: number
}

interface Color {
    blue: string,
    green: string
}

interface Courses {
    specifiedDate: Date,
    mondayCourse: CourseList[],
    tuesdayCourse: CourseList[],
    wednesdayCourse: CourseList[],
    thuresdayCourse: CourseList[],
    fridayCourse: CourseList[],
    colorVariants: Color

}


function Courses({ specifiedDate, mondayCourse, tuesdayCourse, wednesdayCourse, thuresdayCourse, fridayCourse, colorVariants }: Courses) {

    const [currentClassNumber, setCurrentClassNumber] = useState<number | undefined>(undefined);

    interface ClassTimeList {
        classNumber: number
        startTime: Date
        endTime: Date,
    }


    const currentTime = new Date();

    const classTimeList: ClassTimeList[] = [
        {
            classNumber: 10,
            startTime: parse("18:10", "HH:mm", new Date()),
            endTime: parse("18:55", "HH:mm", new Date())
        },
        {
            classNumber: 11,
            startTime: parse("19:00", "HH:mm", new Date()),
            endTime: parse("19:45", "HH:mm", new Date())
        },
        {
            classNumber: 12,
            startTime: parse("19:00", "HH:mm", new Date()),
            endTime: parse("20:35", "HH:mm", new Date())
        },
        {
            classNumber: 13,
            startTime: parse("20:40", "HH:mm", new Date()),
            endTime: parse("21:25", "HH:mm", new Date())
        },
        {
            classNumber: 14,
            startTime: parse("21:30", "HH:mm", new Date()),
            endTime: parse("22:15", "HH:mm", new Date())
        }
    ]

    function checkCurrentTime() {
        let newCurrentClassNumber: number | undefined = undefined;
        for (const timeRange of classTimeList) {
            const { startTime, endTime, classNumber } = timeRange;
            if (isWithinInterval(currentTime, { start: startTime, end: endTime })) {
                newCurrentClassNumber = classNumber
                break;
            }
        }

        setCurrentClassNumber(newCurrentClassNumber);
    }

    useEffect (() => {
        checkCurrentTime();
        console.log("FirstcurrentClassNumber:", currentClassNumber)
        const intervalId = setInterval(checkCurrentTime, 10000);

        return () => {
            clearInterval(intervalId);
        }

    }, [])

    useEffect(() => {
        console.log("SecondcurrentClassNumber:",currentClassNumber);
    },[currentClassNumber])

    interface CourseData {
        1: CourseList[]
        2: CourseList[]
        3: CourseList[]
        4: CourseList[]
        5: CourseList[]
    }

    const courseData: CourseData = {
        1: mondayCourse,
        2: tuesdayCourse,
        3: wednesdayCourse,
        4: thuresdayCourse,
        5: fridayCourse
    }

    const getDayOfWeek = Number(getDay(specifiedDate));

    return (
        <>
            {courseData[getDayOfWeek as keyof CourseData] && (
                <div className="h-full w-4/6 grid grid-rows-5 absolute z-10 right-0 p-1 text-sm pt-0">
                    {courseData[getDayOfWeek as keyof CourseData].map((course, index) => (
                        <div className={clsx(
                            colorVariants[course.courseColor as keyof Color],
                            "text-center rounded-sm justify-center items-center grid mt-1",
                            {
                                " shadow-lg animate-pulseA": course.classNumber !== undefined &&
                                    course.classNumber === currentClassNumber &&
                                    specifiedDate.toDateString() === currentTime.toDateString()&&
                                    course.courseColor === "blue"
                            },
                            {
                                " shadow-lg animate-pulseB": course.classNumber !== undefined &&
                                course.classNumber === currentClassNumber &&
                                specifiedDate.toDateString() === currentTime.toDateString()&&
                                course.courseColor === "green"
                            }
                        )} key={index}>
                            <div>{course.course}</div>
                            <div>{course.classroom}</div>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default Courses