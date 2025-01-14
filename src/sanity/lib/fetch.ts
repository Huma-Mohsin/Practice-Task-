import React from 'react'
import { createClient } from "next-sanity";



const client= createClient({
  projectId:"rtxt0a5n" ,
  dataset:"production",
  useCdn:true,
  apiVersion: "2023-10-10"
})



 async function Fetch_Data_By_Sanity ({query,params={}}:{query:string,params?:any}){
  return await client.fetch(query,params)
 
}

export default Fetch_Data_By_Sanity
