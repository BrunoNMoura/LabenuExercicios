import { COURSE_STACK, TCourse, TStudents } from "./types"

export const courses: TCourse[] = [
    {
        id: "c001",
        name: "React",
        lessons: 12,
        stack: COURSE_STACK.FRONT
    },
    {
        id: "c002",
        name: "Styled Components",
        lessons: 4,
        stack: COURSE_STACK.FRONT
    },
    {
        id: "c003",
        name: "Express",
        lessons: 5,
        stack: COURSE_STACK.BACK
    }
]

console.table(courses);

export const students:TStudents[]=[
    {
        id:"s001",
        name:"Fulano",
        age: 18
    },
    {
        id:"s002",
        name:"Beltrano",
        age:28
    },
]

console.table(students);