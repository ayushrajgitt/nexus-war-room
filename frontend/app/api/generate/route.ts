import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const idea = body.idea;

    const genAI = new GoogleGenerativeAI(
      process.env.GEMINI_API_KEY as string
    );

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const prompt = `
You are a professional marketing strategist.

Create a campaign plan for the idea: "${idea}"

Return response in this JSON format:
{
  "strategy": "...",
  "targetAudience": "...",
  "tagline": "..."
}
Only return JSON. No extra text.
`;

    const result = await model.generateContent(prompt);
    const response = await result.response.text();

    // Parse AI JSON safely
    const parsed = JSON.parse(response);

    return NextResponse.json(parsed);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
