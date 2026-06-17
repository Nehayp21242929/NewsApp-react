import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Button from 'react-bootstrap/Button';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'breaking'
  }

  static PropTypes = {
    country: PropTypes.string,
    pageSize:PropTypes.number,
    category: PropTypes.string

  }

  constructor(){
    super();
    console.log("This is a constructor of news")
    this.state = {
      results : [],
      loading: false,
      nextPage: null,        // stores the token for next page
      pageHistory: [],  
      currentPageToken: null, 
      totalResults: 0
    }
  }

  async componentDidMount(){
    this.fetchNews(null);
  }

 fetchNews = async (pageToken) => {
  this.props.setProgress(0);
  this.setState({ loading: true });

  let url = `https://newsdata.io/api/1/latest?apikey=${this.props.apikey}&category=${this.props.category}&language=en&size=${this.props.pageSize}&country=${this.props.country}`;
  if (pageToken) url += `&page=${pageToken}`;

  let data = await fetch(url);
  let parsedData = await data.json();

  this.setState({
    results: parsedData.results,
    nextPage: parsedData.nextPage,
    currentPageToken: pageToken,   // ← save the token used for THIS page
    totalResults: parsedData.totalResults,
    loading: false
  });
  this.props.setProgress(100);
}

  fetchMoreData = async () => {
    let url = `https://newsdata.io/api/1/latest?apikey=${this.props.apikey}&category=${this.props.category}&language=en&size=${this.props.pageSize}&country=${this.props.country}`;
  
    if (this.state.nextPage) url += `&page=${this.state.nextPage}`;

    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState((prevState) => ({
      results: prevState.results.concat(parsedData.results),  // append, not replace
      nextPage: parsedData.nextPage,
    }));
  };

  render() {

    return (
      <>
        <h1 className='text-center' style={{margin: '30px 0px'}}>NewsApp - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
         <InfiniteScroll
          dataLength={this.state.results.length}
          next={this.fetchMoreData}
          hasMore={this.state.results.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className='row'>
          {this.state.results.map((element) => {
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
}
