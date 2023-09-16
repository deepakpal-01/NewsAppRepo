import React, { Component } from 'react'
import "./Styles/NavBar.css"
import {Link} from 'react-router-dom'

export default class NavBar extends Component {
  handleClick(e){
    let tags=document.getElementsByClassName('a-link')
    for(let tag of tags){
        tag.classList.remove('active')
    }
    e.target.classList.toggle('active')
  }
  
  updateDropDown=(e)=>{
    let country_list=document.getElementsByClassName('dropdown-item')
    for(let item of country_list){
        item.classList.remove('selected')
    }
    e.target.classList.add('selected')
    let showCountry=document.getElementById('country_selected')    
    showCountry.innerHTML=e.target.innerHTML;
    this.props.setCountry(e.target.innerHTML);
    let tags=document.getElementsByClassName('a-link')
    for(let tag of tags){
        tag.classList.remove('active')
    }
    let homeBtn=document.getElementById('home')
    homeBtn.classList.add('active')

    // console.log(e.target.innerHTML) 
    // console.log(this.props.setCountry)
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">NewsWaveOnline</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul id="country" className="navbar-nav">
                <li  className="nav-item dropdown">
                    <a id="country_selected" className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Country
                    </a>
                  <ul className="dropdown-menu">
                    <li><Link onClick={this.updateDropDown} className="dropdown-item" to="/">India</Link></li>
                    <li><Link onClick={this.updateDropDown} className="dropdown-item" to="/">US</Link></li>
                    <li><Link onClick={this.updateDropDown} className="dropdown-item" to="/">Japan</Link></li>
                    <li><Link onClick={this.updateDropDown} className="dropdown-item" to="/">Canada</Link></li>
                    <li><Link onClick={this.updateDropDown} className="dropdown-item" to="/">South Korea</Link></li>
                  </ul>
                </li>
            </ul>
                <ul id="category" className="navbar-nav">
                <li className="nav-item">
                <Link id="home" onClick={this.handleClick} className="nav-link a-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link onClick={this.handleClick} className="nav-link a-link " to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link onClick={this.handleClick} className="nav-link a-link" to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link onClick={this.handleClick} className="nav-link a-link" to="/technology">Technology</Link>
              </li>
              <li className="nav-item">
                <Link onClick={this.handleClick} className="nav-link a-link" to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link onClick={this.handleClick} className="nav-link a-link" to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link onClick={this.handleClick} className="nav-link a-link" to="/entertainment">entertainment</Link>
              </li>
              
          </ul>
            
        </div>
      </div>
    </nav>
    )
  }
}
