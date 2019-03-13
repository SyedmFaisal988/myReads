import React, { Component } from 'react';
import './book.css';
import M from 'materialize-css';

class Book extends Component {
    state = {
        name: this.props.name,
        picSource: this.props.picSource,
        option: '',
    }
    addHandler = (option) => {
        var books = JSON.parse(localStorage.getItem("books"));
        const temp = this.state;
        if(books === null)
            books = [];
        switch(option){
            case 1:
                temp.option = "myRead";
                console.log(temp);
                books.push(temp);
                localStorage.setItem("books",JSON.stringify(books));
                if(this.props.updateMyReads)
                    this.props.updateMyReads();
            return;
            case 2:
                temp.option = "readLater";
                books.push(temp);
                localStorage.setItem("books",JSON.stringify(books));
                if(this.props.updateMyReads)
                    this.props.updateMyReads();
            return;
            case 3:
                if(books!==null){
                    books = books.filter(book=>book.name!==this.state.name);
                }
                localStorage.setItem('books', JSON.stringify(books));
                if(this.props.updateMyReads)
                    this.props.updateMyReads();
            return;
        }
    }
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.dropdown-trigger');
            var instances = M.Dropdown.init(elems);
          });
    }
    render() {
        const backImg = require('../../images/' + this.state.picSource);
        return (
            <div className="book-container">
                <div style={{ backgroundImage: `url(` + backImg + `)` }} id="book-img">
                    <div className="book-btn">
                        <a className="dropdown-trigger btn-floating btn-large waves-effect waves-light teal lighten-2" data-target={'dropdown'+this.props.val+this.props.index} ><i className="material-icons">add</i></a>
                        <ul id={'dropdown'+this.props.val+this.props.index} className='dropdown-content'>
                            <li onClick={()=>this.addHandler(1)}><a href="#">My Read</a></li>
                            <li onClick={()=>this.addHandler(2)}><a href="#">Read Later</a></li>
                            <li onClick={()=>this.addHandler(3)}><a href="#">None</a></li>
                        </ul>
                    </div>
                </div>
                {this.state.name}
            </div>
        );
    }
}

export default Book;