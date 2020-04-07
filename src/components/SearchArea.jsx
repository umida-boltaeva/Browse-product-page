import React from 'react';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

function SearchArea(){
    return (
        <div className="search-area">
        <TextField id="outlined-basic" label="Search" variant="outlined" />
        <Button
        variant="contained"
        color="secondary"
        className="search-button"
        startIcon={<SearchIcon />}
      >
        Search
      </Button>
    </div>
    )
}

export default SearchArea;