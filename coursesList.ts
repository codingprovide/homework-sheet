interface CourseList {
    course?: string,
    classroom?: string,
    courseColor?: string,
    classNumber?:number
}

function createCourse( course: string, classroom: string | undefined, courseColor: string | undefined,classNumber:number): CourseList {
    return {  course, classroom, courseColor,classNumber };
}

function createEmptyCourse(): CourseList {
    return { course: undefined, classroom: undefined, courseColor: undefined,classNumber:undefined };
}

export let mondayCourse: CourseList[] = [
    createCourse("國文(一)", "國秀樓, 411", "blue",10),
    createCourse("國文(一)", "國秀樓, 411", "blue",11),
    createCourse("全校共同時間", undefined, "green",12),
    createCourse("全校共同時間", undefined, "green",13),
    createEmptyCourse(),
];

export let tuesdayCourse: CourseList[] = [
    createCourse("數位邏輯概論", "工程館5F,E531", "blue",10),
    createCourse("數位邏輯概論", "工程館5F,E531", "blue",11),
    createCourse("數位邏輯概論", "工程館5F,E531", "blue",12),
    createEmptyCourse(),
    createEmptyCourse(),
];

export let wednesdayCourse: CourseList[] = [
    createCourse( "體育(一)", "青永館4F,桌球教室", "blue",10),
    createCourse( "體育(一)", "青永館4F,桌球教室", "blue",11),
    createCourse( "微積分(一)", "國秀樓,411", "green",12),
    createCourse( "微積分(一)", "國秀樓,411", "green",13),
    createCourse( "微積分(一)", "國秀樓,411", "green",14),
];

export let thuresdayCourse: CourseList[] = [
    createEmptyCourse(), 
    createEmptyCourse(), 
    createEmptyCourse(), 
    createCourse( "國文(一)", "國秀樓, 411", "blue",13),
    createCourse( "國文(一)", "國秀樓, 411", "blue",14),
];


export let fridayCourse: CourseList[] = [
    createCourse( "計算機概論", "工程館5F, E529", "blue",10),
    createCourse( "計算機概論", "工程館5F, E529", "blue",11),
    createCourse( "計算機概論", "工程館5F, E529", "blue",12),
    createCourse( "英文(一)", "國秀樓,411", "green",13),
    createCourse( "英文(一)", "國秀樓,411", "green",14),
];