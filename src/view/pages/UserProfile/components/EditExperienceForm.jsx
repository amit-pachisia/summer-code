import React, { useState } from "react";

export const EditExperience = ({ experience }) => {
  
    const [editingExperience, setEditingExperience] = useState(experience);
  
    const onChange = (label, value, e) => setEditingExperience({
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
          setEditingExperience({
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
                  Job Title
              </p>
              <input
                  class="text-sm text-gray-500 truncate dark:text-gray-400"
                  type="text"
                  aria-label="Field name"
                  value={editingExperience.title}
                  onChange={(e) => onChange('title', editingExperience.title, e)}
                  onKeyDown={onKeyDown}
                  onBlur={(e) => onBlur('title', editingExperience.title, e)} />
          </div><div class="flex-1 min-w-0 ms-4">
              <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Company
              </p>
              <input
                  class="text-sm text-gray-500 truncate dark:text-gray-400"
                  type="text"
                  aria-label="Field name"
                  value={editingExperience.company}
                  onChange={(e) => onChange('company', editingExperience.company, e)}
                  onKeyDown={onKeyDown}
                  onBlur={(e) => onBlur('company', editingExperience.company, e)} />
              <p class="text-xs italic text-gray-500 truncate dark:text-gray-400">
                  {editingExperience?.startDate}-{editingExperience?.endDate ? editingExperience?.endDate : 'Present'}
              </p>
          </div><div class="flex-1 min-w-0 ms-4">
          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Description
              </p>
              <input
                  class="text-sm text-gray-500 truncate dark:text-gray-400"
                  type="text"
                  aria-label="Field name"
                  value={editingExperience.description}
                  onChange={(e) => onChange('description', editingExperience.description, e)}
                  onKeyDown={onKeyDown}
                  onBlur={(e) => onBlur('description', editingExperience.description, e)} />
          </div></>
  );
};