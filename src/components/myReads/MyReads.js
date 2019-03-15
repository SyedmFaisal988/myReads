import React, { Component } from 'react';
import Book from '../book/Book';

class MyReads extends Component {
    state = {
        books: JSON.parse(localStorage.getItem('books')),
        myreads: [],
        readLater: [],
    }
    getValue
    updateState = ()=>{
        const {books, myreads, readLater} = this.getValueFromLocal();
        if (books !== null) {
            this.setState({
                books,
                myreads,
                readLater,
            })
        }else{
            this.setState({
                books: [],
                myreads: [],
                readLater: [],
            })
        }
        this.forceUpdate();
    }
    componentDidMount() {
        this.updateState();
    }
    getValueFromLocal = ()=>{
        var books = JSON.parse(localStorage.getItem('books'));
        var myreads = [];
        var readLater = [];
        if (books !== null) {
            myreads = books.filter(book => book.option === "myRead");
            readLater = books.filter(book => book.option === "readLater");            
        }
        return {myreads, readLater, books}
    }
    render() {
        const {myreads, readLater} = this.getValueFromLocal();
        return (
            <div >
                <h4>
                    Currently Reading
                </h4>
                <hr/>
                <div style={{ display: 'flex', justifyContent: 'center', }} className="center-align">
                {
                    myreads!==null? myreads.map((book, index)=><Book key={Math.random()*1000}
                    name={book.name} 
                    picSource={book.picSource} 
                    val={1}
                    index={index}
                    updateMyReads={this.updateState}/>): <p>You are not Currently Reading any book</p>
                }
                </div>
                <h4>
                    Read Later
                </h4>
                <hr/>
                <div style={{ display: 'flex', justifyContent: 'center', }} className="center-align">
                {
                    readLater!==null? readLater.map((book, index)=><Book key={index}
                    name={book.name} 
                    picSource={book.picSource} 
                    val={1}
                    index={index}
                    updateMyReads={this.updateState}/>): <p>You are not Currently Reading any book</p>
                }
                </div>
            </div>
        );
    }
}

export default MyReads;