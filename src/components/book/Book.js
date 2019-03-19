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
        num: 0,
    }
    addHandler = (option) => {
        var books = JSON.parse(localStorage.getItem("books"));
        const temp = this.state;
        if(books === null)
            books = [];
        //var i = 0;
        switch(option){
            case 1:
            for(let i=0; i< books.length; i++){            
                if(books[i].name === this.state.name){                
                    if(books[i].option!=="myRead"){
                        books[i].option= "myRead";
                        localStorage.setItem("books",JSON.stringify(books));
                        this.props.updateMyReads()
                        return;
                    }else{
                        alert("This book is already in your: ");
                        return;
                    }
                    return;
                }        
            }
                temp.option = "myRead";
                books.push(temp);
                localStorage.setItem("books",JSON.stringify(books));
                if(this.props.updateMyReads)
                    this.props.updateMyReads();
            return;
            case 2:
            for(let i=0; i< books.length; i++){            
                if(books[i].name === this.state.name){                
                    if(books[i].option!=="readLater"){
                        books[i].option= "readLater";
                        localStorage.setItem("books",JSON.stringify(books));
                        this.props.updateMyReads()
                        return;

                    }else{
                    alert("This book is already in your: "+books[i].option);
                    return;
                }
                }
            }
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
            document.removeEventListener("DOMContentLoaded", this.vla(this.props.val));
        //     document.addEventListener('DOMContentLoaded', function() {     
        //        var elems = document.querySelectorAll('.dropdown-trigger'+val);
        //         var instances = M.Dropdown.getInstance(elems);
        //     instances.destroy();
        // })
    
        //console.log('hello');
     //   this.initDrop();           
    }
              
    // initDrop=()=>{
        
    //     if(this.state.loaded){
            
    //           console.log('hry elelle')
    //     }
    // }
    vla = (val)=>{
            var elems = document.querySelectorAll('.dropdown-trigger'+val);
            var instances = M.Dropdown.init(elems);   
    }
    componentDidMount(){
        // var num = this.state.num;
        document.addEventListener('DOMContentLoaded', this.vla(this.props.val))
    }
    render() {
        const backImg =  this.state.picSource;        
        return (
            <div className="book-container">
                <div style={{ backgroundImage: `url(` + backImg + `)` }} id="book-img">
                    <div className="book-btn">
                        <a className={"dropdown-trigger"+this.props.val +" btn-floating btn-large waves-effect waves-light teal lighten-2"} data-target={'dropdown'+this.props.index}  > <i className="material-icons">add</i></a>
                        <ul id={'dropdown'+this.props.index} className='dropdown-content'>
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