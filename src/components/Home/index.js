import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-container">
          <h1 className="home-title">Find Your Next Favorite Books?</h1>
          <p className="home-text">
            You are in the right place. Tell us what titles or genres you have
            enjoyed in the past, and we will give you surprisingly insightful
            recommendations.
          </p>
          <button type="button" className="find-books-btn">
            Find Books
          </button>
        </div>
      </>
    )
  }
}

export default Home
