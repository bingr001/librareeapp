import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import BookTableRow from './BookTableRow';



export default class BookList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios.get('/books/')
      .then(res => {
        this.setState({
          books: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.books.map((res, i) => {
      return <BookTableRow obj={res} key={i} />;
    });
  }

// div className="table-wrapper">
  render() {
    return (<div className="bookTable">
      <h1>My Books</h1>
      <Table variant="dark" responsive  hover >
        <thead>
          <tr>
            <th>Name</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Date Finished</th>
            <th>Rating</th>
            <th>Amazon Link</th>
            <th>The Book in 3 Sentences</th>
            <th>Quotes</th>
            <th>Who Should Read this?</th>
            <th>Notes</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}