import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request,{params:{slug}}){
    try {
        const training=await db.training.findUnique({
            
            where:{
               slug,
            },
            
        })
        return NextResponse.json(training)
    } catch (error) {
        return NextResponse.json({message:"Failed to fetch training",error},{status:500})
    }
}