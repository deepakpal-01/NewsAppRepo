import React, { Component } from "react";
import './Styles/NewsItem.css'

export default class NewsItem extends Component {
  render() {
    let color="primary"
    
    let {title,description,imgUrl,newsUrl,author,publishedAt,source,category}=this.props;

    if(category==="general" || category==="technology" || category==="health"){
      color="danger"
    }
    else{
      color="primary"
    }
    
    if(imgUrl===null){
      imgUrl="https://cbl.salfordhomesearch.co.uk/choice/images/shared/noimagethumb.jpg"
    }
    if(author===null){
      author="unknown"
    }


    return (
      <div>
        {}
        <div className="card" >
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">

          <span className={`position-absolute top-0 start-100 translate-middle rounded-pill badge bg-${color}`} style={{padding:"5px"}}>
            {source.name}
            </span>

            <h5 className="card-title">{title===null?"No Title Available":`${title.slice(0,45)+"..."}`}</h5>
            <p className="card-text">
                {description===null?"Read the full news here...... ":`${description.slice(0,80)+"..."}`}
            </p>
            <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(publishedAt).toUTCString()}</small></p>
            <a href={newsUrl} className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
