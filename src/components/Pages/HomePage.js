import React from 'react'
import { Header } from '../Header/Header'
import { FirstComponent } from '../FirstComponent/FirstComponent'
import { SecondComponent } from '../SecondComponent/SecondComponent'
import { ThirdComponent } from '../ThirdComponent/ThirdComponent'
import { Footer } from '../Footer/Footer'

export const HomePage = () => {
  return (
    <div>
        <Header/>
        <FirstComponent/>
        <SecondComponent/>
        <ThirdComponent/>
        <Footer/>
    </div>
  )
}
