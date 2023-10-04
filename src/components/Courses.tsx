import getDay from "date-fns/getDay"
import clsx from "clsx"

interface CourseList {
    teacher?: string,
    course?: string,
    classroom?: string,
    courseColor?: string
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

    return (
        <>
            {getDay(specifiedDate) === 1 && (
                <div className="h-full w-4/6 grid grid-rows-5 absolute z-10 right-0 p-1 text-sm pt-0">
                    {mondayCourse.map((course, index) => (
                        <div className={clsx(
                            colorVariants[course.courseColor as keyof Color],
                            "text-center rounded-sm justify-center items-center grid mt-1"
                        )} key={index}>
                            <div>{course.teacher}</div>
                            <div>{course.course}</div>
                            <div>{course.classroom}</div>
                        </div>
                    ))}
                </div>
            )}

            {getDay(specifiedDate) === 2 && (
                <div className="h-full w-4/6 grid grid-rows-5 absolute z-10 right-0 p-1 text-sm pt-0">
                    {tuesdayCourse.map((course, index) => (
                        <div className={clsx(
                            colorVariants[course.courseColor as keyof Color],
                            "text-center rounded-sm justify-center items-center grid mt-1"
                        )} key={index}>
                            <div>{course.teacher}</div>
                            <div>{course.course}</div>
                            <div>{course.classroom}</div>
                        </div>
                    ))}
                </div>
            )}
            {getDay(specifiedDate) === 3 && (
                <div className="h-full w-4/6 grid grid-rows-5 absolute z-10 right-0 p-1 text-sm pt-0">
                    {wednesdayCourse.map((course, index) => (
                        <div className={clsx(
                            colorVariants[course.courseColor as keyof Color],
                            "text-center rounded-sm justify-center items-center grid mt-1"
                        )} key={index}>
                            <div>{course.teacher}</div>
                            <div>{course.course}</div>
                            <div>{course.classroom}</div>
                        </div>
                    ))}
                </div>
            )}
            {getDay(specifiedDate) === 4 && (
                <div className="h-full w-4/6 grid grid-rows-5 absolute z-10 right-0 p-1 text-sm pt-0">
                    {thuresdayCourse.map((course, index) => (
                        <div className={clsx(
                            colorVariants[course.courseColor as keyof Color],
                            "text-center rounded-sm justify-center items-center grid mt-1"
                        )} key={index}>
                            <div>{course.teacher}</div>
                            <div>{course.course}</div>
                            <div>{course.classroom}</div>
                        </div>
                    ))}
                </div>
            )}
            {getDay(specifiedDate) === 5 && (
                <div className="h-full w-4/6 grid grid-rows-5 absolute z-10 right-0 p-1 text-sm pt-0">
                    {fridayCourse.map((course, index) => (
                        <div className={clsx(
                            colorVariants[course.courseColor as keyof Color],
                            "text-center rounded-sm justify-center items-center grid mt-1"
                        )} key={index}>
                            <div>{course.teacher}</div>
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