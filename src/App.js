import React from 'react';
import {Route, Routes, Link} from "react-router-dom"
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import Book from "./pages/Book";
import NewBook from "./pages/NewBook";
import NoutFound from "./pages/NotFound";
function App(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-dark">
                <ul className="navbar-nav">
                    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/books">Books</Link></li>
                </ul>
            </nav>
            <Routes>
                {/* <Route path="/" element={<Home/>}/>
                <Route path="/books" element={<BookList/>}/>
                <Route path="/books/:id" element={<BookList/>}/> */}
                <Route path='/books'>
                  <Route index element={<BookList/>}></Route>
                  <Route path=':id' element={<Book/>}></Route>
                  <Route path='new' element={<NewBook/>}></Route>
                  <Route path='*' element={<NoutFound/>}></Route>
                </Route>
            </Routes>
        </div>
    );
}
export default App;