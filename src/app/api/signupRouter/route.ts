import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    // Here you would typically:
    // 1. Validate input
    // 2. Check if user already exists
    // 3. Hash password
    // 4. Save user to database

    // For demo purposes, we'll just return success
    return NextResponse.json(
      {
        message: "Registration successful",
        user: { name, email },
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
