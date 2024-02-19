import {Component} from 'react'

import {BsSearch} from 'react-icons/bs'
import Header from '../Header'

import './index.css'

class Bookshelves extends Component {
  state = {searchInput: ''}

  renderSearchInputField = () => {
    const {searchInput} = this.state

    return (
      <div className="search-input-container">
        <input
          type="search"
          value={searchInput}
          className="search-input"
          placeholder="Search"
        />
        <div className="search-icon-container">
          <BsSearch color="#0F172A" size={14} />
        </div>
      </div>
    )
  }

  render() {
    return (
      <>
        <Header />
        <div className="bookshelves-container">
          {this.renderSearchInputField()}
        </div>
      </>
    )
  }
}

export default Bookshelves
