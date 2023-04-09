import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Restaurant from './components/Restaurant'
import RestView from './components/RestView'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
     <Route path='/' element={<Restaurant></Restaurant>}/>
     <Route path='/view-restaurant/:id' element={<RestView></RestView>}> </Route>
     </Routes>
     
     <Footer></Footer>
    </div>
  )
}

export default App
