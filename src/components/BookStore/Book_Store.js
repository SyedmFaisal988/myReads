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
        //this.forceUpdate();   
    }
    componentDidMount() {
        const books = this.state.books;
            this.setState({
                searchRes: books,
            })
    }
    render() {
        return (
            <div className="book-store-container">
                <div className="input-field col s6">
                    <i className="material-icons prefix">search</i>
                    <input id="icon_prefix" type="text" value={this.state.searchVal} onChange={this.textChangeHandler} className="validate" />
                    <label htmlFor="icon_prefix">Search</label>
                </div>
                <div className="book-store-wrapper">
                <p>{this.state.searchRes[0].name}</p>
                    {
                        this.state.searchRes.map((book)=>{
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