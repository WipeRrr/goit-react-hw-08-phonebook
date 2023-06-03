import React from 'react';

import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'Redux/selectors';
import { changeFilter } from 'Redux/sliceFilter';
const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <label className={css.filter__label}>
      Find contacts by name
      <input
        className={css.filter__input}
        type="text"
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </label>
  );
};

export default Filter;
