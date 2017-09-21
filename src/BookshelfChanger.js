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
    this.setState({ selected: e.target.value })
  }

  render() {
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
  currentShelf: PropTypes.oneOf(Object.values(shelves))
}

BookshelfChanger.defaultProps = {
  currentShelf: shelves.none
}

export default BookshelfChanger;
