import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import prisma from "@/app/utilis/connect";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    console.log("userId", userId);
    if (!userId) {
      return NextResponse.json({ erorr: "Unauthorized", status: 401 });
    }

    const { title, description, date, completed, imporant } = await req.json();
    if (!title || !description || !date || !completed || !imporant) {
      return NextResponse.json({
        error: "Missing required fileds",
        status: 400,
      });
    }
    const task = await prisma.task.create({
      data: {
        title,
        description,
        date,
        isCompleted: completed,
        isImportant: imporant,
        userId,
      },
    });
    if (title.length < 3) {
      return NextResponse.json({
        error: "Title must be at least 3 characters long",
        status: 400,
      });
    }
    console.log("task", task);
    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.json({ error: "Error creating task", status: 500 });
  }
}

export async function GET(req: Request) {
  const res = await fetch("http://127.0.0.1:3000/api/tasks");
  return NextResponse.json({ res });
  try {
  } catch (error) {
    return NextResponse.json({ error: "Error getting task", status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
  } catch (error) {
    return NextResponse.json({ error: "Error updating task", status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
  } catch (error) {
    return NextResponse.json({ error: "Error deleting task", status: 500 });
  }
}
