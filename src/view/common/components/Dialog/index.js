import React from 'react'

export const Dialog = (props) => {
   const  { title, children, open, onClose } = props;
    return(
        <>
        {open && (
          <div id="authentication-modal" tabindex="-1" class="fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center w-full h-full backdrop-blur-sm">
              <div class="relative p-4 w-full max-w-md max-h-full">
    
                <div class="relative bg-white rounded-3xl shadow dark:bg-gray-700">
    
                  <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                      {title}
                    </h3>
                    <button type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal" onClick={onClose}>
                      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                  </div>
    
                  <div class="p-4 md:p-5">
                      {children}
                  </div>
                </div>
              </div>
            </div>)}
            </>
    )
};