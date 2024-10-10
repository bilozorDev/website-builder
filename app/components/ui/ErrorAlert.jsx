import { XCircleIcon } from "@heroicons/react/20/solid";

const ErrorAlert = ({ messages, onClose }) => {
  if (!messages.length) return null;

  return (
    <div className="rounded-md bg-red-50 p-4 my-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon aria-hidden="true" className="h-5 w-5 text-red-400" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">
            There {messages.length === 1 ? "was" : "were"} {messages.length} error{messages.length > 1 ? "s" : ""} with your submission
          </h3>
          <div className="mt-2 text-sm text-red-700">
            <ul role="list" className="list-disc space-y-1 pl-5">
              {messages.map((message, idx) => (
                <li key={idx}>{message}</li>
              ))}
            </ul>
          </div>
        </div>
        <button onClick={onClose} className="ml-auto text-red-400 hover:text-red-600">
          Close
        </button>
      </div>
    </div>
  );
};

export default ErrorAlert;
