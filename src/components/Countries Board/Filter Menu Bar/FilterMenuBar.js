import React, { useState, useRef, useEffect } from 'react';
import './FilterMenuBar.scss';

/**
 * Method is used for handled outside click when click on filter selection.
 * sets state for filter status
 * @param {*} regionFilterRef
 * @param {*} setFilterStatus
 */

const useOutsideClick = (regionFilterRef, setFilterStatus) => {
  const handleSideClick = (event) => {
    if (
      regionFilterRef.current &&
      !regionFilterRef.current.contains(event.target)
    ) {
      setFilterStatus(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleSideClick);
    return () => {
      document.removeEventListener('mousedown', handleSideClick);
    };
  });
};

const FilterMenuBar = ({
  searchCountry,
  darkMode,
  regionFilter,
  onSearchCountryChange,
  onRegionChange,
  scrollTo,
}) => {
  const [filterStatus, setFilterStatus] = useState(false);
  const regionFilterRef = useRef(null);
  useOutsideClick(regionFilterRef, setFilterStatus);

  return (
    <div
      ref={scrollTo}
      className={`filterMenu container ${darkMode ? `dark` : `light`}`}
    >
      <span className={darkMode ? `darkThemeElements` : `lightThemeElements`}>
        <i className='fas fa-search'></i>
        <input
          data-testid='search-input'
          type='text'
          placeholder='Search Country'
          onChange={(event) => onSearchCountryChange(event.target.value)}
          value={searchCountry}
        />
      </span>

      <div className='regionFilter' ref={regionFilterRef}>
        <div
          className={darkMode ? `darkThemeElements` : `lightThemeElements`}
          onClick={() => setFilterStatus(!filterStatus)}
        >
          <span>
            {regionFilter && (
              <button
                className={
                  darkMode ? `darkThemeElements` : `lightThemeElements`
                }
                onClick={() => onRegionChange('')}
              >
                <i className='fas fa-times'></i>
              </button>
            )}
            {regionFilter
              ? regionFilter.charAt(0).toUpperCase() + regionFilter.slice(1)
              : 'Filter by Region'}
          </span>
          <i
            className={`fas fa-arrow-left ${
              filterStatus ? 'arrowUp' : 'arrowDown'
            }`}
          ></i>
        </div>
        {filterStatus && (
          <ul
            aria-labelledby='fruits-heading'
            className={darkMode ? `darkThemeElements` : `lightThemeElements`}
            onClick={async (e) => {
              await onRegionChange(e.target.innerHTML);
              setFilterStatus(!filterStatus);
            }}
          >
            <li>africa</li>
            <li>americas</li>
            <li>asia</li>
            <li>europe</li>
            <li>oceania</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default FilterMenuBar;
