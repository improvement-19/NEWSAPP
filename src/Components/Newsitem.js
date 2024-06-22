//import React, { Component } from 'react'
import React from 'react'

//rel="noreferrer" to remove warning against target="_blank"
// export class Newsitem extends Component {
//   render() {
//     let {title,description,imgurl,newsurl,author,date,source} = this.props;

//     return (
//       <div className='my-3'>
//         <div className="card" style={{width:"18rem"}}>
//         <img src={imgurl?imgurl:"https://telecomtalk.info/wp-content/uploads/2023/08/jio-could-soon-announce-2-new-5g.jpg"} className="card-img-top" alt="..."/>
//   <div className="card-body">
//     <h5 className="card-title">{title}...</h5>
//     <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//     {source}
//   </span>
//     <p className="card-text">{description}...</p>
//     <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toGMTString()} 3 mins ago</small></p>
//     <a rel='noreferrer'  href={newsurl} target="_blank" className="btn btn-primary">Read More..</a>
//   </div>
// </div>
//       </div>
//     )
//   }
// }

const Newsitem=(props)=>  {
  
    let {title,description,imgurl,newsurl,author,date,source} = props;

    return (
      <div className='my-3'>
        <div className="card" style={{width:"18rem"}}>
        <img src={imgurl?imgurl:"https://telecomtalk.info/wp-content/uploads/2023/08/jio-could-soon-announce-2-new-5g.jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {source}
  </span>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toGMTString()} 3 mins ago</small></p>
    <a rel='noreferrer'  href={newsurl} target="_blank" className="btn btn-primary">Read More..</a>
  </div>
</div>
      </div>
    )
  }

export default Newsitem
