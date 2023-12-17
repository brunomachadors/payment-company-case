import PropTypes from 'prop-types';
import { CategoryType } from './style';
import { useState } from 'react';

function Category({ categoryName }) {
  const [category] = useState(categoryName);

  return <CategoryType>{category}</CategoryType>;
}

Category.propTypes = {
  categoryName: PropTypes.string,
};

export default Category;
