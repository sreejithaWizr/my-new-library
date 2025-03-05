import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import { Loader } from 'lucide-react';

const Button = ({
  variant = 'primary',
  size = 'medium',
  label,
  loading = false,
  disabled = false,
  icon: IconComponent = null,
  imageSrc = null,
  ...props
}) => {
  return (
    <button
      type="button"
      className={`custom-button custom-button--${variant} custom-button--${size} ${loading ? 'custom-button--loading' : ''} ${disabled ? 'custom-button--disabled' : ''}`.trim()}
      disabled={disabled || loading}
      {...props}
    >
      {imageSrc && <img src={imageSrc} alt="button-img" className="button-image" />}
      {IconComponent && <IconComponent className="button-icon" />}
      {loading ? <Loader className="button-loader" /> : label}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'icon',
    'text',
    'outline',
    'loading',
    'disabled',
    'image',
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.elementType,
  imageSrc: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  label: 'Button',
  loading: false,
  disabled: false,
  icon: null,
  imageSrc: null,
};

export default Button;
