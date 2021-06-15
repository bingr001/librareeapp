import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateBook extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeBookName = this.onChangeBookName.bind(this);
    this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
    this.onChangeBookGenre = this.onChangeBookGenre.bind(this);
    this.onChangeBookRating = this.onChangeBookRating.bind(this);
    this.onChangeBookNotes = this.onChangeBookNotes.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      author: '',
      genre: ''
    }
  }

  onChangeBookName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeBookAuthor(e) {
    this.setState({ author: e.target.value })
  }

  onChangeBookGenre(e) {
    this.setState({ genre: e.target.value })
  }

  onChangeBookRating(e) {
    this.setState({ rating: e.target.value })
  }

  onChangeBookNotes(e) {
    this.setState({ notes: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const bookObject = {
      name: this.state.name,
      author: this.state.author,
      genre: this.state.genre,
      rating: this.state.rating,
      notes: this.state.notes
    };

    axios.post('http://localhost:4000/books/create-book', bookObject)
      .then(res => console.log(res.data));

    this.setState({
      name: '',
      author: '',
      genre: '',
      rating:'',
      notes: ''
    });
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Book</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeBookName} />
        </Form.Group>

        <Form.Group controlId="Author">
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" value={this.state.author} onChange={this.onChangeBookAuthor} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Genre</Form.Label>
          <Form.Control type="text" value={this.state.genre} onChange={this.onChangeBookGenre} />
        </Form.Group>

        <Form.Group controlId="Rating">
          <Form.Label>Rating</Form.Label>
          <Form.Control type="number" value={this.state.rating} onChange={this.onChangeBookRating} />
        </Form.Group>

        <Form.Group controlId="Notes">
          <Form.Label>Notes</Form.Label>
          <Form.Control as="textarea" rows={3} type="text" value={this.state.notes} onChange={this.onChangeBookNotes} />
        </Form.Group>
        <Form.Group>
          <Form.Label>
          </Form.Label>
        </Form.Group>        
        <Button variant="primary" size="lg" block="block" type="submit">
          Add Book Review
        </Button>
      </Form>
    </div>);
  }
}