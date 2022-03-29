import React from 'react'

import "./Input.scss";

function Input({
    type = "text",
    label = "input-01",
    id = "input-01",
    value = "",
    placeholder = "",
    handleChange = () => {},
    handleBlur = () => {},
    handleInput = () => {},
    errorMessage,
    hasErrorMessage,
    ...props
  }) {
    return (
        <>
          <div className="form__group field">
            <input
            className="form__field" 
              type={type}
              id={id}
              name={id}
              placeholder={placeholder}
              value={value}
              onChange={handleChange}
              onBlur={handleBlur}
              onInput={handleInput}
              {...props}
            />
            {hasErrorMessage && errorMessage && (
              <p className="error-msg">{errorMessage}</p>
            )}
            <label className="form__label" htmlFor={id}>{label}</label>
          </div>
        </>
      );
    }

export default Input