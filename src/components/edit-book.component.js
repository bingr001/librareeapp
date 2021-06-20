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
    this.onChangeBookDate = this.onChangeBookDate.bind(this);
    this.onChangeBookRating = this.onChangeBookRating.bind(this);
    this.onChangeBookAmazonLink = this.onChangeBookAmazonLink.bind(this);
    this.onChangeBookSentences = this.onChangeBookSentences.bind(this);
    this.onChangeBookQuotes = this.onChangeBookQuotes.bind(this);
    this.onChangeBookWhoShouldRead = this.onChangeBookWhoShouldRead.bind(this);
    this.onChangeBookNotes = this.onChangeBookNotes.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: '',
      author: '',
      genre: '',
      date: '',
      rating: '',
      amazonlink: '',
      sentences: '',
      quotes: '',
      whoshouldread: '',
      notes: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/books/edit-book/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          author: res.data.author,
          genre: res.data.genre,
          date: res.data.date,
          rating: res.data.rating,
          amazonlink: res.data.whoshouldread,
          sentences: res.data.sentences,
          quotes: res.data.quotes,
          whoshouldread: res.data.whoshouldread,
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

  onChangeBookSentences(e) {
    this.setState({ sentences: e.target.value })
  }

  onChangeBookQuotes(e) {
    this.setState({ quotes: e.target.value })
  }

  onChangeBookWhoShouldRead(e) {
    this.setState({ whoshouldread: e.target.value })
  }

  onChangeBookAmazonLink(e) {
    this.setState({ amazonlink: e.target.value })
  }

  onChangeBookDate(e) {
    this.setState({ date: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const bookObject = {
      name: this.state.name,
      author: this.state.author,
      genre: this.state.genre,
      date: this.state.date,
      rating: this.state.rating,
      amazonlink: this.state.amazonlink,
      sentences: this.state.sentences,
      quotes: this.state.quotes,
      whoshouldread: this.state.whoshouldread,
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
          <Form.Label>Book</Form.Label>
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

        <Form.Group controlId="Date">
          <Form.Label>Date Finished</Form.Label>
          <Form.Control rows={3} type="date" value={this.state.date} onChange={this.onChangeBookDate} />
        </Form.Group>

        <Form.Group controlId="Rating">
          <Form.Label>Rating</Form.Label>
          <Form.Control type="number" value={this.state.rating} onChange={this.onChangeBookRating}  placeholder="1-10"/>
        </Form.Group>

        <Form.Group controlId="AmazonLink">
          <Form.Label>Amazon Link</Form.Label>
          <Form.Control type="text" value={this.state.amazonlink} onChange={this.onChangeBookAmazonLink} />
        </Form.Group>

        <Form.Group controlId="Sentences">
          <Form.Label>The Book In 3 Sentences</Form.Label>
          <Form.Control as="textarea" rows={3} type="text" value={this.state.sentences} onChange={this.onChangeBookSentences} />
        </Form.Group>

        <Form.Group controlId="Quotes">
          <Form.Label>Top 3 Quotes</Form.Label>
          <Form.Control as="textarea" rows={3} type="text" value={this.state.quotes} onChange={this.onChangeBookQuotes} />
        </Form.Group>

        <Form.Group controlId="WhoShouldRead">
          <Form.Label>Who Should Read It?</Form.Label>
          <Form.Control as="textarea" rows={3} type="text" value={this.state.whoshouldread} onChange={this.onChangeBookWhoShouldRead} />
        </Form.Group>

        <Form.Group controlId="Notes">
          <Form.Label>Notes </Form.Label>
          <Form.Control as="textarea" rows={5} type="text" value={this.state.notes} onChange={this.onChangeBookNotes} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Book
        </Button>
      </Form>
    </div>);
  }
}