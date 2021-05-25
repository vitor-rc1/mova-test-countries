import React from 'react';
import PropTypes from 'prop-types';
import Pagination from '@material-ui/lab/Pagination';
import './SwitchPage.css';

function SwitchPage({ page, setPage, numberOfPages }) {
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <div className="pagination">
      <Pagination
        count={numberOfPages}
        page={page}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
}

SwitchPage.propTypes = {
  numberOfPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default SwitchPage;
