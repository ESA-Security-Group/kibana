import React from 'react';
import PropTypes from 'prop-types';
import { EuiSelect } from '@elastic/eui';

export const SimpleMathFunction = ({ onChange, value, inputRef, onlymath }) => {
  const options = [
    { text: 'Average', value: 'mean' },
    { text: 'Count', value: 'size' },
    { text: 'First', value: 'first' },
    { text: 'Last', value: 'last' },
    { text: 'Max', value: 'max' },
    { text: 'Median', value: 'median' },
    { text: 'Min', value: 'min' },
    { text: 'Sum', value: 'sum' },
  ];

  if (!onlymath) options.unshift({ text: 'Value', value: '' });

  return (
    <EuiSelect
      options={options}
      inputRef={inputRef}
      defaultValue={value || ''}
      onChange={onChange}
    />
  );
};

SimpleMathFunction.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  inputRef: PropTypes.func,
  onlymath: PropTypes.bool,
};
