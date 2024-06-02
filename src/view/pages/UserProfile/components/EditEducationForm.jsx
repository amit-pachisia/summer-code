import React, { useState } from "react";

export const EditEducation = ({ education }) => {
  
    const [editingEducation, setEditingEducation] = useState(education);
  
    const onChange = (label, value, e) => setEditingEducation({
      [label]: e.target.value
    }
    );

    const onKeyDown = (event) => {
        if (event.key === "Enter" || event.key === "Escape") {
          event.target.blur();
        }
      }

      const onBlur = (label, value, e) => {
        if (e.target.value.trim() !== "") {
          setEditingEducation({
            [label]: e.target.value
          })
        } 
      }
  

  const handleSubmit = (data) => {
    console.log(data)
  };

  return (
    
    <><div><button class="hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center float-right" onClick={handleSubmit}>

          Save
      </button></div><div class="flex-1 min-w-0 ms-4">
              <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Degree
              </p>
              <input
                  class="text-sm text-gray-500 truncate dark:text-gray-400"
                  type="text"
                  aria-label="Field name"
                  value={editingEducation.degree}
                  onChange={(e) => onChange('degree', editingEducation.degree, e)}
                  onKeyDown={onKeyDown}
                  onBlur={(e) => onBlur('degree', editingEducation.degree, e)} />
          </div><div class="flex-1 min-w-0 ms-4">
              <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Field Of Study
              </p>
              <input
                  class="text-sm text-gray-500 truncate dark:text-gray-400"
                  type="text"
                  aria-label="Field name"
                  value={editingEducation.fieldOfStudy}
                  onChange={(e) => onChange('fieldOfStudy', editingEducation.fieldOfStudy, e)}
                  onKeyDown={onKeyDown}
                  onBlur={(e) => onBlur('fieldOfStudy', editingEducation.fieldOfStudy, e)} />
              <p class="text-xs italic text-gray-500 truncate dark:text-gray-400">
                  {editingEducation?.startDate}-{editingEducation?.endDate ? editingEducation?.endDate : 'Present'}
              </p>
          </div><div class="flex-1 min-w-0 ms-4">
              <input
                  class="text-sm text-gray-500 truncate dark:text-gray-400"
                  type="text"
                  aria-label="Field name"
                  value={editingEducation.school}
                  onChange={(e) => onChange('school', editingEducation.school, e)}
                  onKeyDown={onKeyDown}
                  onBlur={(e) => onBlur('school', editingEducation.school, e)} />
          </div></>
  );
};