import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class BookTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteBook = this.deleteBook.bind(this);
    }

    deleteBook() {
        axios.delete('http://localhost:4000/books/delete-book/' + this.props.obj._id)
            .then((res) => {
                console.log('Book successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.author}</td>
                <td>{this.props.obj.genre}</td>
                <td>{this.props.obj.date}</td>
                <td>{this.props.obj.rating}</td>
                <td>{this.props.obj.amazonlink}</td>
                <td>{this.props.obj.sentences}</td>
                <td>{this.props.obj.quotes}</td>
                <td>{this.props.obj.whoshouldread}</td>
                <td>{this.props.obj.notes}</td>
                <td>
                    <Link className="edit-link" to={"/edit-book/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteBook} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}