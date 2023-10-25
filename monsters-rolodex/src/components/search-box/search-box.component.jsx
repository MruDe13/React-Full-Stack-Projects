import { Component } from "react";

class SearchBox extends Component {
  render() {
    const { onSearchChangeHandler } = this.props;
    return (
      <input
        className="search-box"
        type="search"
        placeholder="Search Monsters"
        onChange={onSearchChangeHandler}
        autoFocus
      />
    );
  }
}

export default SearchBox;
