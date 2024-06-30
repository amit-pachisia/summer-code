import React, { useState } from "react";

export const EditLink = ({ link }) => {
  const [editingLink, setEditingLink] = useState(link);

  const onChange = (label, e) =>
    setEditingLink({
      ...editingLink,
      [label]: e.target.value,
    });

  const onKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "Escape") {
      event.target.blur();
    }
  };

  const onBlur = (label, e) => {
    if (e.target.value.trim() !== "") {
      setEditingLink({
        ...editingLink,
        [label]: e.target.value,
      });
    }
  };

  const handleSubmit = () => {
    console.log(editingLink); ;
  };

  return (
    <>
      <div>
        <button
          className="hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center float-right"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
      <div className="flex-1 min-w-0 ms-4">
        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
          Name
        </p>
        <input
          className="text-sm text-gray-500 truncate dark:text-gray-400 border border-black"
          type="text"
          aria-label="Site name"
          value={editingLink.siteName}
          onChange={(e) => onChange("siteName", e)}
          onKeyDown={onKeyDown}
          onBlur={(e) => onBlur("siteName", e)}
        />
      </div>
      <div className="flex-1 min-w-0 ms-4">
        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
          Link
        </p>
        <input
          className="text-sm text-gray-500 truncate dark:text-gray-400 border border-black"
          type="text"
          aria-label="Link"
          value={editingLink.link}
          onChange={(e) => onChange("link", e)}
          onKeyDown={onKeyDown}
          onBlur={(e) => onBlur("link", e)}
        />
      </div>
    </>
  );
};
