import React, { Component } from 'react';
import Book_Store from './components/BookStore/Book_Store';
//import Book from './components/Book'
import M from 'materialize-css';
import MyReads from './components/myReads/MyReads';
import './App.css';

class App extends Component {
  state = {
    status: JSON.parse( localStorage.getItem('status')),
  }
  forceUp = ()=>{
    this.forceUp();
  }

  componentDidMount() {
    var force=()=>{
      console.log('state changed ', this.state.status)
      this.setState((prevState)=>({
        status: !prevState.status,
      }));
      localStorage.setItem("status", this.state.status);
      window.location.reload();
      //this.forceUpdate();
    }
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.tabs');
      var instance = M.Tabs.init(elems, {
        inDuration: 3000,
        onShow: ()=>{
          force();
        }
      });
    });
  }

  render() {
    return (
      <div>
        <ul id="tabs-swipe-demo" className="tabs tabs-fixed-width ">
          <li className="tab col s3"><a className={this.state.status?"active":""}  href="#test-swipe-1">Library</a></li>
          <li className="tab col s3"><a className={this.state.status?"":"active"} href="#test-swipe-2">My Reads</a></li>
        </ul>
    <div id="test-swipe-1" className="col s12">{this.state.status?<Book_Store />:<p></p>}</div>
    <div id="test-swipe-2" className="col s12">{this.state.status?<p></p>:<MyReads />}</div>
      </div>

        
    );
  }
}

export default App;
