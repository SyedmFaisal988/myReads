import React, { Component } from 'react';
import './book.css';
import M from 'materialize-css';

class Book extends Component {
    state = {
        name: this.props.name,
        picSource: this.props.picSource,
        option: '',
        loaded: false,
        elems: "",
    }
    addHandler = (option) => {
        var books = JSON.parse(localStorage.getItem("books"));
        const temp = this.state;
        if(books === null)
            books = [];
        //var i = 0;
        for(let i=0; i< books.length; i++){            
            if(books[i].name === this.state.name){                
                alert("This book is already in your: ");
                return;
            }        
        }
        switch(option){
            case 1:
                temp.option = "myRead";
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

    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillUnmount() {
        if(this.state.loaded){
        document.removeEventListener(".dropdown-trigger", this);
        document.addEventListener('DOMContentLoaded', function() {
            //console.log(ele)
            var elems = document.querySelectorAll('.dropdown-trigger');
            var instances = M.Dropdown.getInstance(elems);
            instances.destroy();
        })
    }
        console.log('hello');
        this.initDrop();           
    }
              
    initDrop=()=>{
        if(this.state.loaded){
            document.addEventListener('DOMContentLoaded', function() {
                var elems = document.querySelectorAll('.dropdown-trigger');
                var instances = M.Dropdown.init(elems);
              });   
              console.log('hry elelle')
        }
    }
    componentDidMount(){
          this.setState({
              loaded: true
          });
    }
    dropHandler = ()=>{
            document.addEventListener('DOMContentLoaded', function() {
                var elem = document.querySelector('.dropdown-trigger');
                var instance = M.Dropdown.getInstance(elem);
                //console.log(instance);
                instance.open();
              });   
              console.log("ehllo")
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
                {this.initDrop()
                }
                {this.state.name}
            </div>
        );
    }
}

export default Book;