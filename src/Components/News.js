// import React, { Component } from 'react'
import React,{useEffect,useState} from 'react' 

import Newsitem from './Newsitem'
import Spin from './Spin';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



//12 unit ka bootsrap page hota hein col-md-4 matlap 4 karke 3 half mein divide kardiya componentdidmount a lifecycle runs after render
//d-flex justify-content-between this is found in bootstrap flex ,this.state.page=page number ,text-center is a bootsrtap class 
//react life cycle : mounting(birth of your component), Update (Growth of component) ,Unmount (Death of your component)

// export class News extends Component {

//   // static defaultProps = {
//   //   country: 'in',
//   //   pageSize: 8,
//   //   category: 'general'
//   // }

//   // static propTypes = {
//   //   country: PropTypes.string,
//   //   pageSize: PropTypes.number,
//   //   category: PropTypes.string
//   // }

//   capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }
//   constructor(props) {
//     super(props);
//     //console.log('This is constructor from news component');
//     this.state = {
//       articles: [],
//       loading: true,
//       page: 1,
//       totalResults:0 
//     }
//     document.title = `${this.capitalizeFirstLetter(props.category)}-NewsApp`;
//   }

//   async componentDidMount() {
//     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=db987b30cfee4f36802e85d3b8ff55ba&pageSize=${props.pageSize}`;
//     // this.setState({ loading: true });  //jab app start ho raha hein tab loading karo 
//     // let data = await fetch(url);
//     // let parseddata = await data.json();
//     // this.setState({ articles: parseddata.articles, totalResults: parseddata.totalResults, loading: false });
//     this.Updatenews();
//   }

//   async Updatenews(){
//     props.setProgress(10);
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=db987b30cfee4f36802e85d3b8ff55ba&page=${this.state.page}&pageSize=${props.pageSize}`;
//     this.setState({ loading: true });  //jab app start ho raha hein tab loading karo 
//     let data = await fetch(url);
//     props.setProgress(30);
//     let parseddata = await data.json();
//     props.setProgress(70);
//     this.setState({ articles: parseddata.articles, totalResults: parseddata.totalResults, loading: false });
//     props.setProgress(100);
//   }

//   handleprev = async () => {
//     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=db987b30cfee4f36802e85d3b8ff55ba&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
//     // this.setState({ loading: true });
//     // let data = await fetch(url);
//     // let parseddata = await data.json();


//     // this.setState({
//     //   page: this.state.page - 1,
//     //   articles: parseddata.articles,
//     //   loading: false
//     // })

//     this.state.setState({
//       page : this.state.page-1 
//     });

//     this.Updatenews();
//   }
//   handlenext = async () => {

//     // if (this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)) {

//     // }
//     // else {
//     //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=db987b30cfee4f36802e85d3b8ff55ba&page=
//     // ${this.state.page + 1}&pageSize=${props.pageSize}`;
//     //   this.setState({ loading: true });
//     //   let data = await fetch(url);
//     //   let parseddata = await data.json();

//     //   this.setState({
//     //     page: this.state.page + 1,
//     //     articles: parseddata.articles,
//     //     loading: false
//     //   })
//     // }

//     this.setState({page:this.state.page+1});
//     this.Updatenews();

//   }

//   fetchMoreData = async () => {
//     this.setState({page:this.state.page+1});
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=db987b30cfee4f36802e85d3b8ff55ba&page=${this.state.page}&pageSize=${props.pageSize}`;
//     // this.setState({ loading: true });  //jab app start ho raha hein tab loading karo 
//     let data = await fetch(url);
//     let parseddata = await data.json();

//     this.setState({ articles: this.state.articles.concat(parseddata.articles), totalResults: parseddata.totalResults });
//   };


//   render() {
//     return (
//       <div className='container my-3' style={{ margin: '35px' }}>
//         <h1 className='text-center'>News -Top headlines from {this.capitalizeFirstLetter(props.category)} </h1>
//         {this.state.loading && <Spin/>}
//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length!==this.state.totalResults}
//           loader={<Spin/>}
//         >
//           <div className='container'>
//           <div className='row'>
//             {this.state.articles.length > 0 && this.state.articles.map((element) => {
//               return <div className='col-md-4' key={element.url}>
//                 <Newsitem title={element.title ? element.title.slice(0, 50) : ""} description={element.description ? element.description.slice(0, 100) : ""} imgurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
//               </div>
//             })}

//           </div>
//           </div>
//         </InfiniteScroll>
//         {/* <div className='container d-flex justify-content-between'>
//           <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handleprev}>&laquo; Previous</button>
//           <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={this.handlenext}>Next &raquo;</button>
//         </div> */}
//       </div>
//     )
//   }
// }

const News =(props)=>  {

  const [articles,setArticles]= useState([]);
  const [loading,setLoading]=useState(true);
  const [page,setPage] =useState(1);
  const [totalResults,settotalResults]=useState(0);
  

  const capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  

  const Updatenews= async ()=>{
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=db987b30cfee4f36802e85d3b8ff55ba&page=${page}&pageSize=${props.pageSize}`;
     
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parseddata = await data.json();
    props.setProgress(70);

    setArticles(parseddata.articles);
    settotalResults(parseddata.totalResults);
    setLoading(false);

    
    props.setProgress(100);
  }

  useEffect(()=>{
    document.title = `${capitalizeFirstLetter(props.category)}-NewsApp`;
    Updatenews();
    //eslint-disable-next-line
  },[])

  

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=db987b30cfee4f36802e85d3b8ff55ba&page=${page+1}&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });  //jab app start ho raha hein tab loading karo 
    setPage(page+1);
    let data = await fetch(url);
    let parseddata = await data.json();
    setArticles(articles.concat(parseddata.articles));
    settotalResults(parseddata.totalResults);
    
  };


  
    return (
      <div className='container my-3' style={{ margin: '35px'}}>
        <h1 className='text-center'style={{marginTop:'90px'}}>News -Top headlines from {capitalizeFirstLetter(props.category)} </h1>
        {loading && <Spin/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spin/>}
        >
          <div className='container'>
          <div className='row'>
            {articles.length > 0 && articles.map((element) => {
              return <div className='col-md-4' key={element.url}>
                <Newsitem title={element.title ? element.title.slice(0, 50) : ""} description={element.description ? element.description.slice(0, 100) : ""} imgurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}

          </div>
          </div>
        </InfiniteScroll>
        
      </div>
    )
}

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News
