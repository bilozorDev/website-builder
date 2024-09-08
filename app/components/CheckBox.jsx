import React from 'react'

const CheckBox = ({value=false, onChange, title="checkbox", description="default description"}) => {
  return (
    <div className="relative flex items-start">
        <div className="flex h-6 items-center">
          <input
            id={title}
            name={title}
            type="checkbox"
            checked={value}
            onChange={onChange || null}
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
        </div>

        <div className="ml-3 text-sm leading-6">
          <label htmlFor={title} className="font-medium text-gray-900">
            {title}
          </label>
          <p className="text-gray-500">
            {description}
          </p>
        </div>
      </div>
  )
}

export default CheckBox