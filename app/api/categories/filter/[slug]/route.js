import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request,{params:{slug}}){
    try {
        const category=await db.category.findUnique({
            
            where:{
               slug,
            },
            include:{
                products:true
            }
            
        })
        return NextResponse.json(category)
    } catch (error) {
        return NextResponse.json({message:"Failed to fetch Categories",error},{status:500})
    }
}