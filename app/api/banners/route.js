import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function POST(request){
try {
    const {title,link,imageUrl,isActive}=await request.json()
    const newBanner=await db.banner.create({
        data:{
            title,link,imageUrl,isActive
        }
    })
    return NextResponse.json(newBanner)
} catch (error) {
    console.log(error)
    return NextResponse.json({message:"Failed to create banner",error},{status:500})
}
}
export async function GET(request){
    try {
        const banners=await db.banner.findMany({
            orderBy:{
                createdAt:"desc"
            }
        })
        return NextResponse.json(banners)
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:"Failed to fetch banners",error},{status:500})
    }
}
