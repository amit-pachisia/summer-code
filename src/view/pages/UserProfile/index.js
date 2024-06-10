
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { user } from './mockData';
import { AddWorkHistory } from './components/AddWorkHistory';
import { EditExperience } from './components/EditExperienceForm';
import { EditEducation } from './components/EditEducationForm';
import { Dialog } from '../../common/components/Dialog';
import { AddEducation } from './components/AddEducation';


function UserProfile() {
  const [userData, setUserData] = useState({});
  const [addExpDialog, setAddExpDialog] = useState(false);
  const [addEduDialog, setAddEduDialog] = useState(false);
  const [editingExperience, setEditingExperience] = useState({});
  const [editingEducation, setEditingEducation] = useState({});
  
  const fetchData = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        setUserData(user);
      })
  }

  useEffect(() => {
    fetchData();
  }, [])

  const handleAddExpClick = () => {
    setAddExpDialog(true);
  }

  const handleAddEduClick = () => {
    setAddEduDialog(true);
  }

  const handleCloseExpDialog = () => {
    setAddExpDialog(false);
  }

  const handleCloseEduDialog = () => {
    setAddEduDialog(false);
  }

  const handleEditExperience= (experience) => {
    setEditingExperience(experience);
  };

  const handleEditEducation= (education) => {
    setEditingEducation(education);
  };

  return (
    <><div class="grid gap-4 col-span-7 px-3">

      <div class="md:col-start-1 md:col-end-2 pt-10">
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 px-2 pt-2">

          <div class="flex flex-col items-left pb-10">
            <img class="w-24 h-24 mb-3 rounded-full shadow-lg ms-4" src="/assets/userPlaceholder.png" alt="" />
            <h5 class="mb-1 ms-4 text-xl font-medium text-gray-900 dark:text-white">{userData?.firstName} {userData?.lastName}</h5>
            <span class="text-sm ms-4 text-gray-500 dark:text-gray-400">{userData?.headline}</span>
            <div class="flex-1 min-w-0 ms-4 pt-1">
              <p class="text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                Location
              </p>
              <p class="text-sm text-gray-900 dark:text-white">
                {userData?.location?.city}, {userData?.location?.country}
              </p>
            </div>
            <div class="flex-1 min-w-0 ms-4 pt-1">
              <p class="text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                Email
              </p>
              <p class="text-sm text-gray-900 truncate dark:text-white">
                {userData?.email}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="md:col-start-2 md:col-end-5  md:pt-10 pt-3">
        <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h6 class="mb-2 text-sm font-bold text-gray-900 dark:text-white">Professional Summary</h6>
          <p class="mb-5 text-xs text-gray-500 sm:text-lg dark:text-gray-400">{userData?.summary}</p>

        </div>

        <div class="flow-root ">
          <h6 class="mb-2 text-sm font-bold text-gray-900 dark:text-white pt-5 float-left">Work History</h6>
          <button class="hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center float-right" onClick={handleAddExpClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>
        </div>
        <div class="grid gap-4">
          {userData?.experience?.map((experience) => {
            return (
              <div class="grid mb-8 py-2 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 bg-white dark:bg-gray-800">
                {Object.keys(editingExperience).length === 0 && (
                <div>
                  <button class="hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center float-right" onClick={() => handleEditExperience(experience)}>

                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                </svg>
                </button>
               
                <div class="flex-1 min-w-0 ms-4">
                  <p class="text-xs font-medium text-gray-500 truncate dark:text-gray-400">
                    Job Title
                  </p>
                  <p class="text-sm text-gray-900 truncate dark:text-white">
                    {experience?.title}
                  </p>
                </div>
                <div class="flex-1 min-w-0 ms-4">
                  <p class="text-xs font-medium text-gray-500 truncate dark:text-gray-400">
                    Company
                  </p>
                  <p class="text-sm text-gray-900 truncate dark:text-white">
                    {experience?.company}
                  </p>
                  <p class="text-xs italic text-gray-500 truncate dark:text-gray-400">
                    {experience?.startDate}-{experience?.endDate ? experience?.endDate : 'Present'}
                  </p>
                </div>
                <div class="flex-1 min-w-0 ms-4">
                  <p class="text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                    Description
                  </p>
                  <p class="text-sm text-gray-900 dark:text-white">
                    {experience?.description}
                  </p>
                </div>
                </div>)}
                {Object.keys(editingExperience).length > 0 && (
                <EditExperience experience={editingExperience}/>
              )}
              </div>);
          })}
        </div>
        <div class="flow-root ">
          <h6 class="mb-2 text-sm font-bold text-gray-900 dark:text-white pt-5 float-left">Education</h6>
          <button class="hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center float-right" onClick={handleAddEduClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>


          </button>
        </div>
        <div class="grid md:grid-cols-2 gap-4">
          {userData?.education?.map((educationData) => {
            return (<div class="grid py-2 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 bg-white dark:bg-gray-800">
             {Object.keys(editingEducation).length ==0 && (<><div><button class="hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center float-right" onClick={() => handleEditEducation(educationData)}>

              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
              </svg>
              </button></div>
              <div class="flex-1 min-w-0 ms-4">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Degree
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  {educationData?.degree}
                </p>
              </div>
              <div class="flex-1 min-w-0 ms-4">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Field Of Study
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  {educationData?.fieldOfStudy}
                </p>
                <p class="text-xs italic text-gray-500 truncate dark:text-gray-400">
                  {educationData?.startDate}-{educationData?.endDate ? educationData?.endDate : 'Present'}
                </p>
              </div>
              <div class="flex-1 min-w-0 ms-4">

                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  {educationData?.school}
                </p>
              </div></>)}
              {Object.keys(editingEducation).length > 0 && (
                <EditEducation education={editingEducation}/>
              )}
            </div>);
          })}
        </div>


      </div>

      <div class="md:col-start-5 md:col-end-7 pt-10">
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 px-2 pt-2">

          <div class="flex flex-col items-left pb-10">
            <h6 class="md:mb-2 text-sm font-bold text-gray-900 dark:text-white">Skills</h6>
            <div class="grid md:grid-cols-3">
              {userData?.skills?.map((skill) => {
                return (<div class="grid border md-1 md:mb-1 border-gray-200 rounded-lg shadow-sm dark:border-gray-700 bg-white dark:bg-gray-800">
                  <div
                    class="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900 py-1.5 px-3 font-sans text-xs font-bold uppercase text-white">
                    <span class="">{skill.name}</span>
                  </div>

                </div>);
              })}

            </div>

            <h6 class="mb-2 text-sm font-bold text-gray-900 dark:text-white pt-5">Languages</h6>
            <div class="grid md:grid-cols-3">
              {userData?.languages?.map((language) => {
                return (<div class="grid border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 bg-white dark:bg-gray-800">
                  <div
                    class="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900 py-1.5 px-3 font-sans text-xs font-bold uppercase text-white">
                    <span class="">{language}</span>
                  </div>

                </div>);
              })}
            </div>
            <h6 class="mb-2 text-sm font-bold text-gray-900 dark:text-white pt-5">Links</h6>
            {userData?.links?.map((link) => {
              return (
                <div>
                  <p class="text-sm capitalize font-medium text-gray-500 truncate dark:text-gray-400">
                    {link.type}
                  </p>
                  <p class="text-gray-500 dark:text-gray-400"> <a href={link.url} target="_blank" rel="noreferrer" class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    {link.url}
                  </a></p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </div>
        <Dialog 
        title="Add Work Experience"
        onClose={handleCloseExpDialog} 
        open={addExpDialog}
        children={<AddWorkHistory />}
        />
        <Dialog 
        title="Add Education"
        onClose={handleCloseEduDialog} 
        open={addEduDialog}
        children={<AddEducation />}
        />
        </>
  );
}

export default UserProfile;
