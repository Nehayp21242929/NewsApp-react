import React, { Component } from 'react'
import Navbar1 from './components/Navbar1'
import News from './components/News'
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default class App extends Component {

  apikey = import.meta.env.VITE_NEWS_API;

  state  = {
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  
  render() {
    return (
      <Router>
      <Navbar1/>  
      <LoadingBar
        color="#f11946"
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        <Route path="/" element={<News apikey={this.apikey} setProgress={this.setProgress}  pageSize="9" country="in" category="breaking"/>} />
        <Route path="/business" element={<News apikey={this.apikey} setProgress={this.setProgress} pageSize="9" country="in" category="business"/>} />
        <Route path="/health" element={<News apikey={this.apikey} setProgress={this.setProgress} pageSize="9" country="in" category="health"/>} />
        <Route path="/politics" element={<News apikey={this.apikey} setProgress={this.setProgress} pageSize="9" country="in" category="politics"/>} />
        <Route path="/sports" element={<News apikey={this.apikey} setProgress={this.setProgress} pageSize="9" country="in" category="sports"/>} />
        <Route path="/technology" element={<News apikey={this.apikey} setProgress={this.setProgress} pageSize="9" country="in" category="technology"/>} />
        <Route path="/world" element={<News apikey={this.apikey} setProgress={this.setProgress} pageSize="9" country="in" category="world"/>} />
        <Route path="/entertainment" element={<News apikey={this.apikey} setProgress={this.setProgress} pageSize="9" country="in" category="entertainment"/>} />
        <Route path="/education" element={<News apikey={this.apikey} setProgress={this.setProgress} pageSize="9" country="in" category="education"/>} />
        <Route path="/crime" element={<News apikey={this.apikey} setProgress={this.setProgress} pageSize="9" country="in" category="crime"/>} />
        <Route path="/lifestyle" element={<News apikey={this.apikey} setProgress={this.setProgress} pageSize="9" country="in" category="lifestyle"/>} />
        <Route path="/other" element={<News apikey={this.apikey} setProgress={this.setProgress} pageSize="9" country="in" category="other"/>} />
        
      </Routes>
    </Router>
    )
  }
}
