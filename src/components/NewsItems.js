import React  from 'react'

const NewsItems=(props)=> {
  
    let {title,description ,imageurl,newslink,author,date,source} =props;
  return (
      <div className='my-3'>
        <div className="card" style={{width: 18+'rem'}}>
          <img src={imageurl===null?"https://th.bing.com/th/id/OIP._Tz_35U_WMSIKp2wYCTJCwHaGR?pid=ImgDet&rs=1":imageurl} className="card-img-top" alt="..."/>
          <span className=" my-2 badge rounded-pill text-bg-primary">{source}</span>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-body-secondary">{author ? `By ${author}`: "unknown"} on {new Date(date).toGMTString()}</small></p>
              <a rel="noreferrer" href={newslink} target="_blank"  className="btn btn-sm btn-dark">Full Article</a>
            </div>
        </div>
      </div>
    )
  
}

export default NewsItems
