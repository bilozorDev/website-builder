import { useSelectedElements } from '@/app/contexts/SelectedElementsContext';
import React from 'react'

const HeroSettings = () => {
  const { hero, setHero} = useSelectedElements();
  return (
    <div className="relative flex items-start">
            <div className="flex h-6 items-center">
              <input
                id="comments"
                name="comments"
                type="checkbox"
                aria-describedby="comments-description"
                checked={hero.display}
                onChange={() => setHero({ ...hero, display: !hero.display })}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>

            <div className="ml-3 text-sm leading-6">
              <label htmlFor="comments" className="font-medium text-gray-900">
                Add Hero
              </label>
              <p id="comments-description" className="text-gray-500">
                Add hero section
              </p>
            </div>
          </div>
  )
}

export default HeroSettings