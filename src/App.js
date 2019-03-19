import React, { Component } from 'react';
import {Link, BrowserRouter, Route ,Switch } from 'react-router-dom';
import BookStore from './components/BookStore/Book_Store';

//import Book from './components/Book'
import M from 'materialize-css';
import MyReads from './components/myReads/MyReads';
import './App.css';

class App extends Component {
  state = {
    status: true,
  }
  // forceUp = ()=>{
  //   this.forceUp();
  // }

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.tabs');
      var instance = M.Tabs.init(elems, {
        inDuration: 3000,
        onShow: ()=>{
          //force();
        }
      });
    });
  }

  changeStatus = ()=>{
    this.setState((prevState)=>({
      status: !prevState.status,
    }))
  }

  TabsRender = ()=>{
    return <div>
      <ul id="tabs-swipe-demo" className="tabs tabs-fixed-width ">
          <li className="tab col s3"><a onClick={this.changeStatus} className={this.state.status?"active":""}  href="#test-swipe-1"><Link to="/">Library</Link></a></li>
          <li className="tab col s3"><a onClick={this.changeStatus} className={this.state.status?"":"active"} href="#test-swipe-2"><Link to="/myreads" >My Reads</Link></a></li>
        </ul>
    </div>
  }

  render() {
    return (
      <div>
        <BrowserRouter>
        <div>
          <this.TabsRender />
        </div>
        <Switch>
          <Route exact path="/" component={BookStore} />
          <Route exact path="/myreads" component={MyReads} />
        </Switch>
            </BrowserRouter>

      </div>

        
    );
  }
}

export default App;
