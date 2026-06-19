import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function NewsItem(props) {
    let {title, description, imageUrl, newsId, newsUrl, source, date}= props;
    return (
      <div>
        <Card style={{margin: "10px"}}>
         <Card.Img variant="top" src={imageUrl} />
         <Card.Body>
          <Card.Title>{title}...</Card.Title>
          <Card.Text>
           {description}...
          </Card.Text>
           <Button variant="primary" href={newsUrl} target="_blank">Read More</Button>
         </Card.Body>
         <Card.Footer>
          <small className="text-muted">
  Source-   <span className="text-primary">{source}</span> Published on <span className="text-primary">{new Date(date).toGMTString()}</span>
          </small>
        </Card.Footer>
       </Card>
       
      </div>
      
    )
  }