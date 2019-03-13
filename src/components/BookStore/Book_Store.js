import React, { Component } from 'react';
import Book from '../book/Book';
import './book-store.css'
class Book_Store extends Component {
    state = {
        books: [{
            name: 'Software Engineering for Science',
            picSource: 'Software_Engineering_for_Science.jpg'
        },{
            name: 'Introduction of Software',
            picSource: 'book2.jpg',
        },{
            name: 'Foundation of Soft Engineering',
            picSource: 'Foundations_of_Software_Engineering.jpg',
        },{
            name: 'SOFTWARE ENGINEERING ESSENTIALS',
            picSource: 'book3.jpg',
        },{
            name: ' Software Requirements',
            picSource: 'book4.jpg',
        }]
    }
    render() {
        return (
            <div className="book-store-container">
                <div className="input-field col s6">
                    <i className="material-icons prefix">search</i>
                    <input id="icon_prefix" type="text" className="validate" />
                    <label htmlFor="icon_prefix">Search</label>
                </div>
                <div className="book-store-wrapper">
                    {
                        this.state.books.map((book, index)=><Book key={index}
                        name={book.name} 
                        picSource={book.picSource} 
                        val={2} 
                        index={index}/>)
                    }
                </div>
            </div>            
        );
    }
}

export default Book_Store;