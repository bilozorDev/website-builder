import { PlusIcon } from 'lucide-react';
import React from 'react'

export const ResetLocalStorage = () => {
    const handleReset = () => {
        localStorage.clear();
        window.location.reload(); // Reload the page to reflect changes
    }

  return <button
        type="button"
        className="rounded-full bg-indigo-600 p-1.5 text-white shadow-sm text-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={handleReset}
      >
        Reset local storage
      </button>
}
