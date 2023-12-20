import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: any) {
    try {
        const data = await req.json();
        const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL as string;
        const loginUrl = `${baseUrl}/users/register`;

        const response = await axios.post(loginUrl, data);
        return NextResponse.json({
            message: "OKOK",
            result: response.data.result,
        });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json(
            {message: (error as any)?.message || "SERVER ERROR"},
            { status: 500 }
        );
    }
}
