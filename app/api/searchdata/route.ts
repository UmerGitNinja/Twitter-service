import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { Url } = body;
  try {
    const response = await axios.get(`https://api.twitter.com/2${Url}`, {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_ACCESS_TOKEN}`,
      },
    });

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("Error making Twitter API request:", error.message);
    return new NextResponse(error.status, error.message);
  }
}
