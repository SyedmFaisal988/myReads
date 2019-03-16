import React, { Component } from 'react';
import Book from '../book/Book';
import './book-store.css'
class Book_Store extends Component {
    state = {
        searchVal: '',
        books: [{
            name: 'Software Engineering for Science',
            picSource: 'Software_Engineering_for_Science.jpg',
            key: '1book',
        },{
            name: 'Introduction of Software',
            picSource: 'book2.jpg',
            key: '2book',
        },{
            name: 'Foundation of Soft Engineering',
            picSource: 'Foundations_of_Software_Engineering.jpg',
            key: '3book',
        },{
            name: 'SOFTWARE ENGINEERING ESSENTIALS',
            picSource: 'book3.jpg',
            key: '3book',
        },{
            name: ' Software Requirements',
            picSource: 'book4.jpg',
            key: '4book',
        }],
        searchRes: [{
            name: 'Software Engineering for Science',
            picSource: 'Software_Engineering_for_Science.jpg'
        }],
    }
    textChangeHandler = (e)=>{
        var patt = new RegExp(e.target.value, 'i')
        const res = this.state.books.filter(book=>patt.test(book.name));
        if(res!==null && res.length!==0){

            this.setState({
                searchRes: res,
                searchVal: e.target.value,
            })
        }
        else{
            const books = this.state.books;
            this.setState({
                searchRes: books,
                searchVal: e.target.value
            })
        }
    }

    //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
    componentWillUpdate(nextProps, nextState) {
        
    }

    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {
        const api = 'https://www.googleapis.com/books/v1/volumes?q=react';
        fetch(api, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-allow-Methods': 'POST, GET'
            }
        })
        .then(respond=>respond.json())
        .then(json=>{
            let RawBooks = JSON.parse(JSON.stringify(json))
            console.log(RawBooks)
            let books = RawBooks.items.map(bookDetails=>{
                return{
                name: bookDetails.volumeInfo.title,
                picSource: bookDetails.volumeInfo.imageLinks.thumbnail
                }
            })
            this.setState({
                books: books
            })

            console.log('books ', books)
        })
        .catch()
    }

    componentDidMount() {
        const books = this.state.books;
            this.setState({
                searchRes: books,
            })
        
    }
    render() {
        console.log('array '+this.state.searchRes)
        return (
            <div className="book-store-container">
                <div className="input-field col s6">
                    <i className="material-icons prefix">search</i>
                    <input id="icon_prefix" type="text" value={this.state.searchVal} onChange={this.textChangeHandler} className="validate" />
                    <label htmlFor="icon_prefix">Search</label>
                </div>
                <div className="book-store-wrapper">
                    {
                        this.state.books.map((book)=>{
                            var index = Math.trunc(Math.random()*1000); 
                            return <Book key={index}
                                        name={book.name} 
                                        picSource={book.picSource} 
                                        val={2} 
                                        index={index}    />
                    })
                    }
                </div>
            </div>            
        );
    }
}

export default Book_Store;