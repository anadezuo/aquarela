import { Children, cloneElement, useState } from "react";
import PropTypes from "prop-types";

const AccordionGroup = ({ children }) => {
  const [childIndex, setIndex] = useState(-1);

  const handleChange = (index) => {
    const newIndex = index === childIndex ? -1 : index;
    setIndex(newIndex);
  };

  return Children.map(children, (child, index) => {
    return cloneElement(child, {
      open: childIndex === index,
      onChange: () => handleChange(index),
    });
  });
};

AccordionGroup.propTypes = {
  children: PropTypes.node,
};

AccordionGroup.defaultProps = {
  children: undefined,
};

export default AccordionGroup;
