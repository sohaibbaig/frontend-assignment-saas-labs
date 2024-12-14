import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleLeft, faAngleRight, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import '../stylesheets/pagination.scss';

const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    onPageChange(page);
  };

  const handlePrevious = () => handlePageChange(currentPage - 1);
  const handleNext = () => handlePageChange(currentPage + 1);
  const handleFirst = () => handlePageChange(1);
  const handleLast = () => handlePageChange(totalPages);

  return (
    <div className="pagination">
        <div className="pagination-nav">
            <div className="pagination-button-group">
                <button onClick={handleFirst} disabled={currentPage === 1}>
                    <FontAwesomeIcon icon={faAngleDoubleLeft} />
                </button>
                <button onClick={handlePrevious} disabled={currentPage === 1}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
            </div>
            <span className="page-info">
                Page {currentPage} of {totalPages}
            </span>
            <div className="pagination-button-group">
                <button onClick={handleNext} disabled={currentPage === totalPages}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
                <button onClick={handleLast} disabled={currentPage === totalPages}>
                    <FontAwesomeIcon icon={faAngleDoubleRight} />
                </button>
            </div>
        </div>
    </div>
  );
};

export default Pagination;
