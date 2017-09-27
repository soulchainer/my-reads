import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { shelves } from './utils/constants';

class BookshelfChanger extends Component {
  state = {
    selected: this.props.currentShelf
  };

  componentDidMount () {
    this.setState({ selected: this.props.currentShelf })
  }

  handleOnClick (e) {
    const selectedShelf = e.target.value
    const {book, currentShelf, onUpdateBook} = this.props
    if (selectedShelf !== currentShelf) {
      this.setState({ selected: selectedShelf })
      onUpdateBook(book, selectedShelf)
    }
  }

  render() {
    const { currentShelf, onUpdateBook } = this.props
    return (
      <div className="book-shelf-changer">
        <select defaultValue={this.state.selected}>
          <option disabled>Move to...</option>
          {Object.keys(shelves).map((shelf) => (
            <option
              key={shelf}
              value={shelf}
              onClick={this.handleOnClick}
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
  })
  currentShelf: PropTypes.oneOf(Object.values(shelves)),
  onUpdateBook: PropTypes.func.isRequired
}

BookshelfChanger.defaultProps = {
  currentShelf: shelves.none
}

export default BookshelfChanger;
