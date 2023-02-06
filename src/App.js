import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import books from './books/history.json'
import BooksList from './components/BookList';
import CommentArea from './components/CommentArea'
import { Component } from 'react';




class App extends Component {
  state = {
    asin: null
  }
  constructor(props) {
    super(props)
    this.getAsin= this.getAsin.bind(this)
  }

  getAsin(asin) {
    this.setState({asin: asin})
  }

  render() {
    return (
      <div>
         <MyNav/>
         <Welcome/>
         <CommentArea asin={this.state.asin}/>
         <BooksList books={books} getAsin={this.getAsin}/>
      
         <Footer/>
      </div>
     );
  }

}

export default App;
