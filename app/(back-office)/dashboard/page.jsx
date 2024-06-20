import CustomDataTable from '@/components/backoffice/CustomDataTable'
import DashboardCharts from '@/components/backoffice/DashboardCharts'
import FarmerDashboard from '@/components/backoffice/FarmerDashboard'
import Heading from '@/components/backoffice/Heading'
import LargeCards from '@/components/backoffice/LargeCards'
import SmallCards from '@/components/backoffice/SmallCards'
import UserDashboard from '@/components/backoffice/UserDashboard'
import { authOptions } from '@/lib/authOptions'
import { getData } from '@/lib/getData'
import { getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import React from 'react'

const page = async () => {
 const session=await getServerSession(authOptions)

  const role=session?.user?.role
  const sales=await getData('sales')
  const orders=await getData('orders')
  const products=await getData("products")
  console.log(role,'role')
  // if(role==="FARMER"){
  // return  <FarmerDashboard/>
  // }
  if(role==="USER"){
  return  <UserDashboard/>
  }
  return (
    <div>
     <Heading title={"Dashboard Overview"}/>
     <LargeCards sales={sales} orders={orders}/>
    {orders && <SmallCards  orders={orders}/>}
     <DashboardCharts sales={sales}/>
     {/* <CustomDataTable/> */}
    </div>
  )
}

export default page
