import React, { Component } from 'react';
import Book from '../book/Book';

class MyReads extends Component {
    state = {
        books: JSON.parse(localStorage.getItem('books')),
        myreads: [],
        readLater: [],
    }
    updateState = ()=>{
        var books = JSON.parse(localStorage.getItem('books'));
        if (books !== null) {
            var myreads = books.filter(book => book.option === "myRead");
            var readLater = books.filter(book => book.option === "readLater");            
            this.setState({
                books,
                myreads,
                readLater,
            })
        }else{
            this.setState({
                books: [],
                MyReads: [],
                readLater: [],
            })
        }
        this.forceUpdate();
    }
    componentDidMount() {
        this.updateState();
    }
    render() {
        console.log(this.state+ " myread")
        return (
            <div >
                <h4>
                    Currently Reading
                </h4>
                <hr/>
                <div style={{ display: 'flex', justifyContent: 'center', }} className="center-align">
                {
                    this.state.myreads!==null? this.state.myreads.map((book, index)=><Book key={index}
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
                    this.state.readLater!==null? this.state.readLater.map((book, index)=><Book key={index}
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