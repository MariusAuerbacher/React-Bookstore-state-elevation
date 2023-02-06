import { Component } from "react";
import { Card } from "react-bootstrap";



class SingleBook extends Component {
  state = {
    selected: false,
    showComment: false
  }
  render() {
    return (
      <>
      <Card onClick={()=>{
        this.props.getAsin(this.props.singleBook.asin)
      }}>
      <Card.Img variant="top" src={this.props.singleBook.img} />
      <Card.Body>
        <Card.Title>
          {this.props.singleBook.title}
        </Card.Title>
        ${this.props.singleBook.price}
      </Card.Body>
      </Card>
   
    </>
    );
  }

}

export default SingleBook;
