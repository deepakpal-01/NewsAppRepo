import React, { Component } from "react";
import NewsItem from "./NewsItem";
import "./Styles/News.css";
import Loader from "./Loader";
import PropTypes from 'prop-types'

export default class News extends Component {
    static defaultProps={
        category:"science",
        country:"in"
    }
    static propTypes={
        category:PropTypes.string.isRequired
    }

    constructor(props){
        super(props)
        this.state={
            articles:[],
            loading:false,
            page:1,
            totalResults:0,
        }    
        let cat=this.props.category;
        cat=cat.charAt(0).toUpperCase()+cat.slice(1)
        document.title=`${cat} Latest News :- NewWaveOnline`;    
    }    
    async updateNews(currPage){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3bad83dfa6074ef2886b4fa8fba8ca93&page=${currPage}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let response=await fetch(url);
        let data=await response.json()
           this.setState({
            articles:data.articles,
            totalResults:data.totalResults,
            loading:false
        })
    }   
    
    async componentDidMount(){
        this.updateNews(1);
    }    
    handlePrevPage =async()=>{ 
        this.updateNews(this.state.page-1);   
        this.setState({page:this.state.page-1}) 
    }
    handleNextPage =async()=>{ 
        this.updateNews(this.state.page+1);
        this.setState({page:this.state.page+1})
    }
    
    render() { 
        return (
            <>
            {/* <Outlet/> */}
                {<h2>NewsWave :- Top <b style={{color:"#a92c2c",fontFamily:"cursive"}}>{this.props.category}</b> Headlines..</h2>}
                    {this.state.loading && <Loader/>}
                {!this.state.loading && <div id="mainBox" className=" newsBox container">
                   { this.state.articles.map((i)=>{
                        return <NewsItem title={i.title} imgUrl={i.urlToImage} description={i.content} newsUrl={i.url} author={i.author} publishedAt={i.publishedAt}
                        source={i.source} category={this.props.category}/>
                    }) }         
                <br />
                </div>}
                 {!this.state.loading && <div className="container navBtn d-flex justify-content-between">

                   <button disabled={this.state.page<=1} onClick={this.handlePrevPage} type="button" className="btn btn-dark">&larr; Prev</button>
                    <button disabled={(this.state.page>Math.ceil(this.state.totalResults/this.props.pageSize)-1)}  id="next" onClick={this.handleNextPage} type="button" className="btn btn-dark">Next &rarr;</button>
                </div>}
            </>
        );
    }
}

