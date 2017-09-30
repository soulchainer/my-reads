import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { shelves } from './utils/constants';

class BookshelfChanger extends Component {
  state = {
    selected: this.props.currentShelf
  };

  handleOnChange = e => {
    const selectedShelf = e.target.value
    const currentShelf = this.state.selected
    const {book, onUpdateBook} = this.props
    if (selectedShelf !== currentShelf) {
      this.setState({ selected: selectedShelf })
      onUpdateBook(book, selectedShelf)
    }
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select
          onChange={this.handleOnChange}
          value={this.props.currentShelf}
        >
          <option disabled>Move to...</option>
          {Object.keys(shelves).map((shelf) => (
            <option
              key={shelf}
              value={shelf}
            >
              {shelves[shelf]}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

BookshelfChanger.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.required,
    cover: PropTypes.string,
    title: PropTypes.string,
    authors: PropTypes.arrayOf(PropTypes.string)
  }),
  currentShelf: PropTypes.oneOf(Object.keys(shelves)),
  onUpdateBook: PropTypes.func.isRequired
}

BookshelfChanger.defaultProps = {
  currentShelf: 'none'
}

export default BookshelfChanger;
