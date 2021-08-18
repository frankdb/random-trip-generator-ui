import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/solid";

interface TextInputGroupProps {
  label?: string;
  name: string;
  type?: "text" | "email" | "password";
  id: string;
  value?: string;
  onChange?: any;
  onBlur?: any;
  placeholder?: string;
  throwError?: any;
  errorMessage?: any;
  isTextArea?: boolean;
}

const TextInputGroup = ({
  label,
  type = "text",
  name,
  id,
  placeholder,
  value,
  onChange,
  onBlur,
  throwError,
  errorMessage = "Required",
  isTextArea = false,
}: TextInputGroupProps) => {
  const classes = throwError
    ? "border-red-300 focus:ring-red-500 focus:border-red-500 text-red-900 placeholder-red-300 border-red-300 pr-10"
    : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm";

  return (
    <div className="my-4">
      {label ? (
        <label htmlFor={id} className="block font-medium text-gray-700">
          {label}
        </label>
      ) : null}
      <div className="relative mt-1 rounded-md shadow-sm">
        {isTextArea ? (
          <textarea
            name={name}
            id={id}
            className={`block w-full rounded-md focus:outline-none ${classes}`}
            placeholder={placeholder}
            aria-invalid={throwError}
            aria-describedby={`${name}-error`}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        ) : (
          <input
            type={type}
            name={name}
            id={id}
            className={`block w-full rounded-md focus:outline-none ${classes}`}
            placeholder={placeholder}
            aria-invalid={throwError}
            aria-describedby={`${name}-error`}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        )}

        {throwError ? (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <ExclamationCircleIcon
              className="w-5 h-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        ) : null}
      </div>
      {throwError ? (
        <p className="mt-2 text-sm text-red-600" id={`${id}-error`}>
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
};

export default TextInputGroup;
