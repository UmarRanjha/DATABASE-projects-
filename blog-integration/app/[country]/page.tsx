"use client"
import React from 'react'
import { useParams,notFound  } from 'next/navigation';
import countriesData from '../../data/countries';
import CountriesContent from '@/pages/CountriesContent';

const Page = () => {
const params = useParams();

const countryInfo = countriesData.find(country => country.link === `/${params?.country}`);

if(!countryInfo){
    notFound() 
}
  return (
        <CountriesContent info={countryInfo}/>
  )
}

export default Page
