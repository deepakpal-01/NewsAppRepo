import React,{Component} from 'react'
import './App.css';
import NavBar from './Components/NavBar'
import News from './Components/News'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// import Footer from './Components/Footer';

export default class App extends Component{
  pageSize=20; 
  constructor(){
    super();
    this.state={
      pageCountry:"in",
    }
  }

  setCountry=(country)=>{
    if(country==="US"){
      this.setState({
        pageCountry:"us",
      })
    }
    else if(country==="Japan"){
      this.setState({
        pageCountry:"jp",
      })
    }
    else if(country==="Canada"){
      this.setState({
        pageCountry:"cn",
      })
    }
    else if(country==="South Korea"){
      this.setState({
        pageCountry:"kr",
      })
    }
      else{
        this.setState({
          pageCountry:"in",
        })
      }
    
    console.log(country,":::",this.state.pageCountry)
  }
  
  
  render(){
    
    return(
      <>
      <Router>
          <NavBar  setCountry={this.setCountry}/>
            <Routes>
            <Route exact path="/" element={<News key={this.state.pageCountry} pageSize={this.pageSize} category={"general"} country={this.state.pageCountry}/>}/>
                <Route exact path="/science" element={<News key={"science"} pageSize={this.pageSize} category={"science"} country={this.state.pageCountry}/>}/>
                <Route exact path="/sports" element={<News key={"sports"} pageSize={this.pageSize} category={"sports"} country={this.state.pageCountry}/>}/>
                <Route exact path="/technology" element={<News key={"technology"} pageSize={this.pageSize} category={"technology"} country={this.state.pageCountry}/>}/>
                <Route exact path="/business" element={<News key={"business"} pageSize={this.pageSize} category={"business"} country={this.state.pageCountry}/>}/>
                <Route exact path="/health" element={<News key={"health"} pageSize={this.pageSize} category={"health"} country={this.state.pageCountry}/>}/>
                <Route exact path="/entertainment" element={<News key={"entertainment"} pageSize={this.pageSize} category={"entertainment"} country={this.state.pageCountry}/>}/>
 


                
             </Routes>
            {/* <Footer/> */}
        </Router>

      
      </>
    )
  }
}

