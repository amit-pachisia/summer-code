
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { user } from './mockData';

function UserProfile() {
  const [userData, setUserData] = useState({});

  const fetchData = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        setUserData(user);
      })
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div class="grid gap-4 col-span-7 px-3">

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

      <div class="md:col-start-2 md:col-end-5  pt-10">
        <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h6 class="mb-2 text-sm font-bold text-gray-900 dark:text-white">Professional Summary</h6>
          <p class="mb-5 text-xs text-gray-500 sm:text-lg dark:text-gray-400">{userData?.summary}</p>

        </div>

        <h6 class="mb-2 text-sm font-bold text-gray-900 dark:text-white pt-5">Work History</h6>
        <div class="grid md:grid-cols-2 gap-4">
          {userData?.experience?.map((experience) => {
            return (
              <div class="grid mb-8 py-2 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 bg-white dark:bg-gray-800">
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
              </div>)
          })}
        </div>
        <h6 class="mb-2 text-sm font-bold text-gray-900 dark:text-white">Education</h6>
        <div class="grid md:grid-cols-2 gap-4">
          {userData?.education?.map((education) => {
            return (<div class="grid py-2 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 bg-white dark:bg-gray-800">
              <div class="flex-1 min-w-0 ms-4">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Degree
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  {education?.degree}
                </p>
              </div>
              <div class="flex-1 min-w-0 ms-4">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Field Of Study
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  {education?.fieldOfStudy}
                </p>
                <p class="text-xs italic text-gray-500 truncate dark:text-gray-400">
                  {education?.startDate}-{education?.endDate ? education?.endDate : 'Present'}
                </p>
              </div>
              <div class="flex-1 min-w-0 ms-4">

                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  {education?.school}
                </p>
              </div>

            </div>)
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

                </div>)
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

                </div>)
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
              )
            })}
          </div>
        </div>
      </div>

    </div>
  );
}

export default UserProfile;
