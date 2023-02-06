import React from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends React.Component {
  state = {
    comment: "",
    rating: "",
  };
  render() {
    console.log(+this.props.asin)
    return (
      <Form
        onSubmit={async (e) => {
          e.preventDefault();
          let res = await fetch(
            "https://striveschool-api.herokuapp.com/api/comments/",
            {
              method: "POST",
              body: JSON.stringify({
                comment: this.state.comment,
                rate: this.state.rating,
                elementId: +this.props.asin,
              }),
              headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzA5OWU3MzczODAwMTUzNzQzNzIiLCJpYXQiOjE2NzUzNDE2MjYsImV4cCI6MTY3NjU1MTIyNn0.bPwPGuwUuH1beV7mOeR0Y1s_UlFQnOtBnktkiW1JB5I",
                  "Content-Type": "application/json"
              },
            }
          );
          let data = await res.json();
          console.log(data)
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add your comment"
            value={this.state.comment}
            onChange={(e) => this.setState({ comment: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            type="number"
            placeholder="Rating"
            value={this.state.rating}
            onChange={(e) => this.setState({ rating: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default AddComment;
