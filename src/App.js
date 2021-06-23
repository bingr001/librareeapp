import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateBook from "./components/create-book.component";
import EditBook from "./components/edit-book.component";
import BookList from "./components/book-list.component";
import Login from "./components/login.component";
import Signup from "./components/signup.component";

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/book-list"} className="nav-link">
                Libraree
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-book"} className="nav-link">
                  Add Book
                </Link>
              </Nav>

              {/* <Nav>
                <Link to={"/edit-book/:id"} className="nav-link">
                  Edit Book
                </Link>
              </Nav> */}

              <Nav>
                <Link to={"/book-list"} className="nav-link">
                  Book List
                </Link>
              </Nav>

              <Nav>
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </Nav>

              <Nav>
                <Link to={"/signup"} className="nav-link">
                  Sign Up
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={BookList} />
                <Route path="/create-book" component={CreateBook} />
                <Route path="/edit-book/:id" component={EditBook} />
                <Route path="/book-list" component={BookList} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;