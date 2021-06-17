import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import PropTypes from 'prop-types';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const history = useHistory();

  const onSubmit = (e) => {
    history.push(`?s=${searchQuery}`);
    e.preventDefault();
  };

  return (
    <div className="searchForm">
      <Form action='/' method='get' autoComplete="off" onSubmit={onSubmit}>
        <FormGroup>
          <Label htmlFor='header-search'>
              <span>Search Trips</span>
          </Label>
          <Input
            value={searchQuery}
            onInput={(e) => setSearchQuery(e.target.value)}
            type='text'
            id='header-search'
            placeholder='Search Trips'
            name='s'
          />
        </FormGroup>
        <Button type='submit'>Search</Button>
      </Form>
    </div>
  );
};

SearchBar.propTypes = {
  searchQuery: PropTypes.string,
  setSearchQuery: PropTypes.func,
};

export default SearchBar;
