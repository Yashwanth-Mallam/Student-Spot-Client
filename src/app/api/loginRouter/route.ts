import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    // Here you would typically validate credentials against your database
    // For demo purposes, we'll use a simple check
    if (email === "demo@example.com" && password === "password123") {
      return NextResponse.json(
        { message: "Login successful" },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
