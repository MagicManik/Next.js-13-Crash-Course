import { NextResponse } from "next/server";
import courses from "./data.json";
import { v4 as uuidv4 } from "uuid";

export async function GET(request) {
    return NextResponse.json(courses);
}

export async function POST(request) {
    const { title, description, link, level } = await request.json();

    const newCourse = {
        _id: uuidv4(),
        title,
        description,
        link,
        level
    }

    courses.push(newCourse);
    return NextResponse.json(courses);
}

// evabe pathailam na karon amader id dorkar chilo
// uuid er jonno command korun: npm i uuid
// export async function POST(request) {
//     const course = await request.json();
//     courses.push(course);
//     return NextResponse.json(courses);
// }