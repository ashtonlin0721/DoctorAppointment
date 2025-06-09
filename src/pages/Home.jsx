import React from 'react'
import DoctorListPage from './DoctorListPage'
import CarouselShow from '../components/CarouselShow'
import Category from '../components/Category'


export default function Home() {

  return (
    <div>
      <CarouselShow />
      <Category />
      <DoctorListPage />
    </div>
  )
}
