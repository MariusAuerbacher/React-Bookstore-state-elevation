
import React from "react";
import { Col, Row, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";


class BooksList extends React.Component {
  state= {
    searchQuery: ""
  }
  render() {
  return (
    <div>
    <Row className="justify-content-center">
     <Col lg={4} xs={12} sm={4}>
      <Form.Group>
       <Form.Control
      type="text"
      placeholder="Search by book title"
      value={this.state.searchQuery}
      onChange={(event) => this.setState({ searchQuery: event.target.value })}
      />
      </Form.Group>
    </Col>
  </Row>
    <Row>
      {this.props.books
      .filter((book) =>
              book.title.includes(this.state.searchQuery)
            )
      .map((book) => {
        return (

          <Col xs={12} md={4} lg={2} key={book.asin}>
            <SingleBook singleBook={book} getAsin={this.props.getAsin}/>
         
          </Col>
          
        );
   
      })}
      
    </Row>
 
  </div>
  );
}
}

export default BooksList;
