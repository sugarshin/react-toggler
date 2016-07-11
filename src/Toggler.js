import React, { PropTypes as T, Children } from 'react';

export default function Toggler(props) {
  const { children, hide, pattern, ...rest } = props;
  if (hide) return null;
  const childs = pattern ? Children.toArray(children).filter((c, i) => pattern[i]) : children;
  return <div {...rest}>{childs}</div>;
}

Toggler.propTypes = {
  hide: T.bool,
  pattern: T.oneOfType([T.arrayOf(T.bool), T.objectOf(T.bool)])
};
Toggler.defaultProps = { className: 'react-toggler' };
