import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Story from './pages/Story'
import Contact from './pages/Contact'

export default function App() {
  return <div className="app"><Header/><Routes><Route path="/" element={<Home/>}/><Route path="/collection" element={<Collection/>}/><Route path="/story" element={<Story/>}/><Route path="/contact" element={<Contact/>}/></Routes><Footer/></div>
}
