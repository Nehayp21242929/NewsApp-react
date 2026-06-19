import React, {useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Button from 'react-bootstrap/Button';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {

  const [results,setResults]= useState([]);
  const [loading,setLoading]= useState(true);
  const [totalResults,setTotalResults]= useState(0);
  const [nextPage,setNextPage]=useState(null);

  useEffect(()=>{
    fetchNews(null);

  },[])

  const fetchNews = async (pageToken) => {
  props.setProgress(0);
  setLoading(true);   // ✅ fixed

  let url = `https://newsdata.io/api/1/latest?apikey=${props.apikey}&category=${props.category}&language=en&size=${props.pageSize}&country=${props.country}`;
  if (pageToken) url += `&page=${pageToken}`;

  let data = await fetch(url);
  let parsedData = await data.json();

  setResults(parsedData.results);
  setLoading(false);
  setTotalResults(parsedData.totalResults);
  setNextPage(parsedData.nextPage);

  props.setProgress(100);
}

  const fetchMoreData = async () => {
    let url = `https://newsdata.io/api/1/latest?apikey=${props.apikey}&category=${props.category}&language=en&size=${props.pageSize}&country=${props.country}`;
  
    if (nextPage) url += `&page=${nextPage}`;

    let data = await fetch(url);
    let parsedData = await data.json();

    setResults(results.concat(parsedData.results));
    setNextPage(parsedData.nextPage)

    // this.setState((prevState) => ({
    //   results: prevState.results.concat(parsedData.results),  // append, not replace
    //   nextPage: parsedData.nextPage,
    // }));
  };
    return (
      <>
        <h1 className='text-center' style={{margin : '70px 0px 20px 0px'}}>NewsApp - Top Headlines</h1>
        {loading && <Spinner/>}
         <InfiniteScroll
          dataLength={results.length}
          next={fetchMoreData}
          hasMore={results.length !== totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className='row'>
          {results.map((element) => {
            return <div className="col-md-4" key={element.article_id}>
                <NewsItem title={element.title?element.title.slice(0,50):""} 
                description={element.description?element.description.slice(0,88):""} 
                imageUrl={element.image_url?element.image_url:"https://img.etimg.com/thumb/msid-131682868,resizemode-4,width-1200,height-900,imgsize-77088,overlay-etpanache/articleshow.jpg"} 
                newsId={element.article_id} 
                newsUrl={element.source_url}
                source={element.source_name}
                date={element.pubDate}/>
            </div>
          })}
        </div>
        </div>
        </InfiniteScroll>
      </>
    )
  }

News.defaultProps = {
  country: 'in',
  pageSize: 9,
  category: 'breaking'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
