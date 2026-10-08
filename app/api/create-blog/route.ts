import { NextResponse } from "next/server";
import {getToken} from "@/lib/auth-server";

export async function POST() {
    const token = await getToken();
    console.log("token",token );
    return NextResponse.json({ success:true})
}