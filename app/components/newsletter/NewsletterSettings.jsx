import React from 'react'
import {useSelectedElements} from "@/app/contexts/SelectedElementsContext";

const NewsletterSettings = () => {
    const {newsletter, setNewsletter} = useSelectedElements();
    return (
        <div className="relative flex items-start">
            <div className="flex h-6 items-center">
                <input
                    id="newsletter"
                    name="newsletter"
                    type="checkbox"
                    aria-describedby="features-description"
                    checked={newsletter.display}
                    onChange={() => {
                        setNewsletter({
                            ...newsletter,
                            display: !newsletter.display,
                        })
                    }}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
            </div>

            <div className="ml-3 text-sm leading-6">
                <label htmlFor="newsletter" className="font-medium text-gray-900">
                    Add Newsletter
                </label>
                <p id="newsletter-description" className="text-gray-500">
                    Add newsletter section
                </p>
            </div>
        </div>
    );
};

export default NewsletterSettings