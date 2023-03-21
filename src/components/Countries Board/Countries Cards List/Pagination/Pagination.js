import React from 'react';
import { INCREMENT, DECREMENT } from '../../../../constant';
import './Pagination.scss';

const handleScrollBar = (scrollTo) => {
  scrollTo.current.scrollIntoView({ behavior: 'smooth' });
};

const onSetCurrentPage = (
  setCurrentPage,
  currentPage,
  pageNumberStatus,
  scrollTo
) => {
  switch (pageNumberStatus) {
    case INCREMENT: {
      handleScrollBar(scrollTo);
      setCurrentPage(currentPage + 1);
      break;
    }
    case DECREMENT: {
      handleScrollBar(scrollTo);
      setCurrentPage(currentPage - 1);
      break;
    }
    default:
      break;
  }
};

/**
 *  Create Pagination for first and last page
 */

const firstNLastPage = (currentPage, totalPages, setCurrentPage, srcollTo) => {
  return (
    <>
      <button
        onClick={
          currentPage + 1 === totalPages
            ? () => {
                setCurrentPage(0);
                handleScrollBar(srcollTo);
              }
            : undefined
        }
      >
        1
      </button>

      <button className='elipsis'>
        <i className='fas fa-ellipsis-h'></i>
      </button>
      <button
        className={currentPage + 1 === totalPages ? 'isActive' : undefined}
        onClick={
          currentPage + 1 === 1
            ? () => {
                setCurrentPage(totalPages - 1);
                handleScrollBar(srcollTo);
              }
            : undefined
        }
      >
        {totalPages}
      </button>
    </>
  );
};

/**
 *  Create Pagination for second and secondLast
 */

const secondNSecondLastPage = (
  currentPage,
  totalPages,
  setCurrentPage,
  scrollTo
) => {
  return (
    <>
      <button
        onClick={() => {
          setCurrentPage(0);
          handleScrollBar(scrollTo);
        }}
      >
        1
      </button>
      {currentPage + 1 === 2 ? (
        <>
          <button className='isActive'>2</button>
          <button className='elipsis'>
            <i className='fas fa-ellipsis-h'></i>
          </button>
        </>
      ) : (
        <>
          <button className='elipsis'>
            <i className='fas fa-ellipsis-h'></i>
          </button>
          <button className='isActive'>{totalPages - 1}</button>
        </>
      )}
      <button
        onClick={() => {
          setCurrentPage(totalPages - 1);
          handleScrollBar(scrollTo);
        }}
      >
        {totalPages}
      </button>
    </>
  );
};

const middleSectionPagination = (
  currentPage,
  totalPages,
  setCurrentPage,
  scrollTo
) => {
  totalPages === 1 && <button className='isActive'>1</button>;

  switch (currentPage + 1) {
    case 1:
    case totalPages: {
      return firstNLastPage(currentPage, totalPages, setCurrentPage, scrollTo);
    }
    case 2:
    case totalPages - 1: {
      return secondNSecondLastPage(
        currentPage,
        totalPages,
        setCurrentPage,
        scrollTo
      );
    }
    default: {
      return (
        <>
          <button
            onClick={() => {
              setCurrentPage(0);
              handleScrollBar(scrollTo);
            }}
          >
            1
          </button>
          <button className='elipsis'>
            <i className='fas fa-ellipsis-h'></i>
          </button>
          <button className='isActive'>{currentPage + 1}</button>
          <button className='elipsis'>
            <i className='fas fa-ellipsis-h'></i>
          </button>
          <button
            onClick={() => {
              setCurrentPage(totalPages - 1);
              handleScrollBar(scrollTo);
            }}
          >
            {totalPages}
          </button>
        </>
      );
    }
  }
};

const Pagination = ({
  darkMode,
  currentPage,
  setCurrentPage,
  totalPages,
  scrollTo,
}) => {
  return (
    <div className={`pagination ${darkMode ? `dark ` : `light `}`}>
      <button
        onClick={() => {
          onSetCurrentPage(setCurrentPage, currentPage, DECREMENT, scrollTo);
        }}
        disabled={currentPage === 0}
      >
        <i className='fas fa-arrow-left'></i>
      </button>

      {middleSectionPagination(
        currentPage,
        totalPages,
        setCurrentPage,
        scrollTo
      )}

      <button
        className='nextPage'
        onClick={() => {
          onSetCurrentPage(setCurrentPage, currentPage, INCREMENT, scrollTo);
        }}
        disabled={currentPage + 1 === totalPages}
      >
        <i className='fas fa-arrow-left'></i>
      </button>
    </div>
  );
};

export default Pagination;
