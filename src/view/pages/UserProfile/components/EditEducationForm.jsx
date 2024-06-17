import React, { useState } from "react";

export const EditEducation = ({ education }) => {
  const [editingEducation, setEditingEducation] = useState(education);

  const onChange = (label, value, e) =>
    setEditingEducation({
      [label]: e.target.value,
    });

  const onKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "Escape") {
      event.target.blur();
    }
  };

  const onBlur = (label, value, e) => {
    if (e.target.value.trim() !== "") {
      setEditingEducation({
        [label]: e.target.value,
      });
    }
  };

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div>
        <button
          class="float-right inline-flex items-center rounded px-4 py-2 font-bold text-gray-800 hover:bg-gray-400"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
      <div class="ms-4 min-w-0 flex-1">
        <p class="truncate text-sm font-medium text-gray-900 dark:text-white">
          Degree
        </p>
        <input
          class="truncate text-sm text-gray-500 dark:text-gray-400"
          type="text"
          aria-label="Field name"
          value={editingEducation.degree}
          onChange={(e) => onChange("degree", editingEducation.degree, e)}
          onKeyDown={onKeyDown}
          onBlur={(e) => onBlur("degree", editingEducation.degree, e)}
        />
      </div>
      <div class="ms-4 min-w-0 flex-1">
        <p class="truncate text-sm font-medium text-gray-900 dark:text-white">
          Field Of Study
        </p>
        <input
          class="truncate text-sm text-gray-500 dark:text-gray-400"
          type="text"
          aria-label="Field name"
          value={editingEducation.fieldOfStudy}
          onChange={(e) =>
            onChange("fieldOfStudy", editingEducation.fieldOfStudy, e)
          }
          onKeyDown={onKeyDown}
          onBlur={(e) =>
            onBlur("fieldOfStudy", editingEducation.fieldOfStudy, e)
          }
        />
        <p class="truncate text-xs italic text-gray-500 dark:text-gray-400">
          {editingEducation?.startDate}-
          {editingEducation?.endDate ? editingEducation?.endDate : "Present"}
        </p>
      </div>
      <div class="ms-4 min-w-0 flex-1">
        <input
          class="truncate text-sm text-gray-500 dark:text-gray-400"
          type="text"
          aria-label="Field name"
          value={editingEducation.school}
          onChange={(e) => onChange("school", editingEducation.school, e)}
          onKeyDown={onKeyDown}
          onBlur={(e) => onBlur("school", editingEducation.school, e)}
        />
      </div>
    </>
  );
};
