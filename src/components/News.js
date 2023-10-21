import React,{useState,useEffect}  from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner.js'
import InfiniteScroll from 'react-infinite-scroll-component';
const News =(props)=> {

  const [articles, setArticles]=useState([]);
  const [loading , setLoading]=useState(true);
  const [page,setPage]=useState(1);
  const [totalResults,setTotalResults]=useState(0);
  

  const updatenews=async()=> {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page}&pagesize=20`;
    setLoading(true);
    props.setProgress(30);
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    props.setProgress(70);
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
    console.log("This is my page number inside if",page)
    console.log(url);

  }
  useEffect(() => {
     document.title = `${capitalize(props.category)}- Samachar`
    updatenews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
 
  const fetchMoreData = async () => {


    // setState({ page: page + 1 });
    const nextpage=page+1;
    
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page+1}&pagesize=20`;
    setPage(nextpage);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    // setState({
    //   articles: articles.concat(parsedData.articles),
    //   totalResults: parsedData.totalResults,
    //   loading: false
    // });
    console.log("This is my page number inside if", page)
    console.log(url);
    console.log(articles.length);
    console.log(totalResults);



  };
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
    return (
      <div className='container mt-5 pt-4'>
        <h2 className='text-center'>Breaking News --- Top {capitalize(props.category)} Headlines</h2>
        <hr />
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {!loading && articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                  <NewsItems title={element.title != null ? element.title : ""} description={element.description != null ? element.description : ""} imageurl={element.urlToImage} newslink={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
              })} 
            </div>
          </div>
        </InfiniteScroll>
        
      </div>
      // {/* using this condition for disabling because this api only allows to see 100 news which means 20 pages */}
    )
  
}

export default News
