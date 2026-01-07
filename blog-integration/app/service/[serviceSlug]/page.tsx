"use client"
import React from 'react'
import { useParams,notFound  } from 'next/navigation';
import servicesData from '../../../data/services';
import ServicesContent from '@/pages/ServicesContent';


const Page = () => {
const params = useParams<{ serviceSlug: string }>();

console.log(params);

const serviceInfo = servicesData.find(service => service.link === `/${params?.serviceSlug}`);

if(!serviceInfo){
    notFound() 
}
  return (
        <ServicesContent info={serviceInfo}/>
  )
}

export default Page
