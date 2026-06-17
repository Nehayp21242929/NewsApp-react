import React, { Component } from 'react'
import Navbar1 from './components/Navbar1'
import News from './components/News'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <Router>
      <Navbar1/>          {/* outside Routes so it shows on every page */}
      <Routes>
        <Route path="/" element={<News pageSize="9" country="in" category="breaking"/>} />
        <Route path="/business" element={<News pageSize="9" country="in" category="business"/>} />
        <Route path="/health" element={<News pageSize="9" country="in" category="health"/>} />
        <Route path="/politics" element={<News pageSize="9" country="in" category="politics"/>} />
        <Route path="/sports" element={<News pageSize="9" country="in" category="sports"/>} />
        <Route path="/technology" element={<News pageSize="9" country="in" category="technology"/>} />
        <Route path="/world" element={<News pageSize="9" country="in" category="world"/>} />
        <Route path="/entertainment" element={<News pageSize="9" country="in" category="entertainment"/>} />
        <Route path="/education" element={<News pageSize="9" country="in" category="education"/>} />
        <Route path="/crime" element={<News pageSize="9" country="in" category="crime"/>} />
        <Route path="/lifestyle" element={<News pageSize="9" country="in" category="lifestyle"/>} />
        <Route path="/other" element={<News pageSize="9" country="in" category="other"/>} />
        
      </Routes>
    </Router>
    )
  }
}
