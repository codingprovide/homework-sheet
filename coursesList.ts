interface CourseList {
    course?: string,
    classroom?: string,
    courseColor?: string,
    classNumber?:number,
    id?:string
}

function createCourse( id:string, course: string, classroom: string | undefined, courseColor: string | undefined,classNumber:number): CourseList {
    return { id, course, classroom, courseColor,classNumber };
}

function createEmptyCourse(): CourseList {
    return {course: undefined, classroom: undefined, courseColor: undefined,classNumber:undefined };
}

export let mondayCourse: CourseList[] = [
    createCourse("92651579-a552-4731-97cd-f6e4d8a86122","國文(一)", "國秀樓, 411", "blue",10),
    createCourse("def09c73-72f0-4a07-8fc4-db739c7529a1","國文(一)", "國秀樓, 411", "blue",11),
    createCourse("605931e0-9bd5-4198-9a46-8fe0df5a6254","全校共同時間", undefined, "green",12),
    createCourse("78e0c3f1-b5b0-48ce-a2fb-049e1b11eab9","全校共同時間", undefined, "green",13),
    createEmptyCourse(),
];

export let tuesdayCourse: CourseList[] = [
    createCourse("7073a5ad-c56b-4e10-95a6-ebd454460646","數位邏輯概論", "工程館5F,E531", "blue",10),
    createCourse("262cc2fc-6c3b-4da5-90b9-b9943ce1fa11","數位邏輯概論", "工程館5F,E531", "blue",11),
    createCourse("9265433a-e258-4f4a-939a-034be48d357b","數位邏輯概論", "工程館5F,E531", "blue",12),
    createEmptyCourse(),
    createEmptyCourse(),
];

export let wednesdayCourse: CourseList[] = [
    createCourse("b014c0a6-1594-4a45-8a0b-12bb55166154","體育(一)", "青永館4F,桌球教室", "blue",10),
    createCourse("db736262-3c93-450d-9062-d719ba29386f", "體育(一)", "青永館4F,桌球教室", "blue",11),
    createCourse("f151d775-f9d7-47e2-9a47-16ba7342fdfe","微積分(一)", "國秀樓,411", "green",12),
    createCourse("d2e9859b-ed3e-499f-bd81-5d23f2ec868b","微積分(一)", "國秀樓,411", "green",13),
    createCourse("d63c9895-0e69-4ef6-bb82-2ae9bcd2be0b","微積分(一)", "國秀樓,411", "green",14),
];

export let thuresdayCourse: CourseList[] = [
    createEmptyCourse(), 
    createEmptyCourse(), 
    createEmptyCourse(), 
    createCourse("bbbfd86a-6bc4-463d-bc78-697f419ed750","國文(一)", "國秀樓, 411", "blue",13),
    createCourse("2a528624-5c1f-4bfc-a145-1819c044914f","國文(一)", "國秀樓, 411", "blue",14),
];


export let fridayCourse: CourseList[] = [
    createCourse("e26e9343-3e28-4208-b8d0-8122ac59ff96","計算機概論", "工程館5F, E529", "blue",10),
    createCourse("372e5d3c-bb11-4270-b7f8-71fc1c11c274","計算機概論", "工程館5F, E529", "blue",11),
    createCourse("02cfd2bc-e1c9-476b-a48b-d021491c95b6","計算機概論", "工程館5F, E529", "blue",12),
    createCourse("411f266f-65b2-4547-a54c-a939472b85e0","英文(一)", "國秀樓,411", "green",13),
    createCourse("a2cbde7b-163b-4486-9dfc-bf505f97d749","英文(一)", "國秀樓,411", "green",14),
];