import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditBook extends Component {

  constructor(props) {
    super(props)

    this.onChangeBookName = this.onChangeBookName.bind(this);
    this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
    this.onChangeBookGenre = this.onChangeBookGenre.bind(this);
    this.onChangeBookRating = this.onChangeBookRating.bind(this);
    this.onChangeBookNotes = this.onChangeBookNotes.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: '',
      author: '',
      genre: '',
      rating:'',
      notes:''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/books/edit-book/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          author: res.data.author,
          genre: res.data.genre,
          rating: res.data.rating,
          notes: res.data.notes
        });
      })
      .catch((error) => {
        console.log(error);
      })
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

    axios.put('http://localhost:4000/books/update-book/' + this.props.match.params.id, bookObject)
      .then((res) => {
        console.log(res.data)
        console.log('Book successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Book List 
    this.props.history.push('/book-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeBookName} />
        </Form.Group>

        <Form.Group controlId="Author">
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" value={this.state.author} onChange={this.onChangeBookAuthor} />
        </Form.Group>

        <Form.Group controlId="Genre">
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

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Book
        </Button>
      </Form>
    </div>);
  }
}