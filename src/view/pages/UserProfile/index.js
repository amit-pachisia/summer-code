import React, { useEffect, useState } from "react";
import axios from "axios";
import { user } from "./mockData";
import { AddWorkHistory } from "./components/AddWorkHistory";
import { AddEducation } from "./components/AddEducation";
import { AddSkills } from "./components/AddSkills";
import { AddLanguage } from "./components/AddLanguage";
import { AddLink } from "./components/AddLink";
import { EditExperience } from "./components/EditExperienceForm";
import { EditEducation } from "./components/EditEducationForm";
import { EditLink } from "./components/EditLink";
import { Dialog } from "../../common/components/Dialog";

function UserProfile() {
  const [userData, setUserData] = useState({});
  const [addExpDialog, setAddExpDialog] = useState(false);
  const [addEduDialog, setAddEduDialog] = useState(false);
  const [addSklDialog, setAddSklDialog] = useState(false);
  const [addLngDialog, setAddLngDialog] = useState(false);
  const [addLinkDialog, setAddLinkDialog] = useState(false);
  const [editingExperience, setEditingExperience] = useState({});
  const [editingExperienceIndex, setEditingExperienceIndex] = useState(null);
  const [editingEducation, setEditingEducation] = useState({});
  const [editingEducationIndex, setEditingEducationIndex] = useState(null);
  const [editingLink, setEditingLink] = useState({});
  const [editingLinkIndex, setEditingLinkIndex] = useState(null);

  const fetchData = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      setUserData(user);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddExpClick = () => {
    setAddExpDialog(true);
  };

  const handleAddEduClick = () => {
    setAddEduDialog(true);
  };

  const handleAddSklClick = () => {
    setAddSklDialog(true);
  };

  const handleAddLngClick = () => {
    setAddLngDialog(true);
  };

  const handleCloseExpDialog = () => {
    setAddExpDialog(false);
  };

  const handleCloseEduDialog = () => {
    setAddEduDialog(false);
  };

  const handleCloseSklDialog = () => {
    setAddSklDialog(false);
  };

  const handleCloseLngDialog = () => {
    setAddLngDialog(false);
  };

  const handleAddLinkClick = () => {
    setAddLinkDialog(true);
  };

  const handleCloseLinkDialog = () => {
    setAddLinkDialog(false);
  };
  const handleEditExperience = (experience, index) => {
    setEditingExperience(experience);
    setEditingExperienceIndex(index);
  };

  const handleEditEducation = (education, index) => {
    setEditingEducation(education);
    setEditingEducationIndex(index);
  };
  const handleEditLink = (link, index) => {
    setEditingLink(link);
    setEditingLinkIndex(index);
  };

  const updateExperience = (index, newData) => {
    const updatedExperience = [...userData.experience];
    updatedExperience[index] = { ...updatedExperience[index], ...newData };
    setUserData({ ...userData, experience: updatedExperience });
    setEditingExperience({});
    setEditingExperienceIndex(null);
  };

  const updateEducation = (index, newData) => {
    const updatedEducation = [...userData.education];
    updatedEducation[index] = { ...updatedEducation[index], ...newData };
    setUserData({ ...userData, education: updatedEducation });
    setEditingEducation({});
    setEditingEducationIndex(null);
  };

  const updateLink = (index, newData) => {
    const updatedLinks = [...userData.links];
    if (index >= updatedLinks.length) {
      updatedLinks.push(newData);
    } else {
      updatedLinks[index] = { ...updatedLinks[index], ...newData };
    }
    setUserData({ ...userData, links: updatedLinks });
    setEditingLink({});
    setEditingLinkIndex(null);
  };

  return (
    <>
      <div class="col-span-7 grid gap-4 px-3">
        <div class="pt-10 md:col-start-1 md:col-end-2">
          <div class="w-full max-w-sm rounded-lg border border-gray-200 bg-white px-2 pt-2 shadow dark:border-gray-700 dark:bg-gray-800">
            <div class="items-left flex flex-col pb-10">
              <img
                class="mb-3 ms-4 h-24 w-24 rounded-full shadow-lg"
                src="/assets/userPlaceholder.png"
                alt=""
              />
              <h5 class="mb-1 ms-4 text-xl font-medium text-gray-900 dark:text-white">
                {userData?.firstName} {userData?.lastName}
              </h5>
              <span class="ms-4 text-sm text-gray-500 dark:text-gray-400">
                {userData?.headline}
              </span>
              <div class="ms-4 min-w-0 flex-1 pt-1">
                <p class="truncate text-sm font-medium text-gray-500 dark:text-gray-400">
                  Location
                </p>
                <p class="text-sm text-gray-900 dark:text-white">
                  {userData?.location?.city}, {userData?.location?.country}
                </p>
              </div>
              <div class="ms-4 min-w-0 flex-1 pt-1">
                <p class="truncate text-sm font-medium text-gray-500 dark:text-gray-400">
                  Email
                </p>
                <p class="truncate text-sm text-gray-900 dark:text-white">
                  {userData?.email}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="pt-3 md:col-start-2  md:col-end-5 md:pt-10">
          <div class="w-full rounded-lg border border-gray-200 bg-white p-4 shadow sm:p-8 dark:border-gray-700 dark:bg-gray-800">
            <h6 class="mb-2 text-sm font-bold text-gray-900 dark:text-white">
              Professional Summary
            </h6>
            <p class="mb-5 text-xs text-gray-500 sm:text-lg dark:text-gray-400">
              {userData?.summary}
            </p>
          </div>
          {/* Work Exp */}
          <div class="flow-root">
            <h6 class="float-left mb-2 pt-5 text-sm font-bold text-gray-900 dark:text-white">
              Work History
            </h6>
            <button
              class="float-right inline-flex items-center rounded px-4 py-2 font-bold text-gray-800 hover:bg-gray-400"
              onClick={handleAddExpClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </div>

          <div class="h-48 overflow-y-scroll">
            <div class="grid gap-4">
              {userData?.experience?.map((experience, index) => {
                return (
                  <div class="my-4 grid rounded-lg border border-gray-800 bg-white py-2 shadow-sm md:mb-4 dark:border-gray-700 dark:bg-gray-800">
                    {editingExperienceIndex !== index && (
                      <div>
                        <button
                          class="float-right inline-flex items-center rounded px-4 py-2 font-bold text-gray-800 hover:bg-gray-400"
                          onClick={() =>
                            handleEditExperience(experience, index)
                          }
                        >
                          <svg
                            class="h-6 w-6 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                            />
                          </svg>
                        </button>

                        <div class="ms-4 min-w-0 flex-1">
                          <p class="truncate text-xs font-medium text-gray-500 dark:text-gray-400">
                            Job Title
                          </p>
                          <p class="truncate text-sm text-gray-900 dark:text-white">
                            {experience?.title}
                          </p>
                        </div>
                        <div class="ms-4 min-w-0 flex-1">
                          <p class="truncate text-xs font-medium text-gray-500 dark:text-gray-400">
                            Company
                          </p>
                          <p class="truncate text-sm text-gray-900 dark:text-white">
                            {experience?.company}
                          </p>
                          <p class="truncate text-xs italic text-gray-500 dark:text-gray-400">
                            {experience?.startDate}-
                            {experience?.endDate
                              ? experience?.endDate
                              : "Present"}
                          </p>
                        </div>
                        <div class="ms-4 min-w-0 flex-1">
                          <p class="truncate text-sm font-medium text-gray-500 dark:text-gray-400">
                            Description
                          </p>
                          <p class="text-sm text-gray-900 dark:text-white">
                            {experience?.description}
                          </p>
                        </div>
                      </div>
                    )}
                    {editingExperienceIndex === index && (
                      <EditExperience
                        experience={editingExperience}
                        onSave={(newData) => updateExperience(index, newData)}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education Section */}
          <div class="flow-root ">
            <h6 class="float-left mb-2 pt-5 text-sm font-bold text-gray-900 dark:text-white">
              Education
            </h6>
            <button
              class="float-right inline-flex items-center rounded px-4 py-2 font-bold text-gray-800 hover:bg-gray-400"
              onClick={handleAddEduClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </div>
          <div class="h-48 overflow-y-scroll">
            <div class="grid gap-4">
              {userData?.education?.map((educationData, index) => {
                return (
                  <div class="grid rounded-lg border border-gray-800 bg-white py-2 shadow-sm md:mb-12 dark:border-gray-700 dark:bg-gray-800">
                    {editingEducationIndex !== index && (
                      <>
                        <div>
                          <button
                            class="float-right inline-flex items-center rounded px-4 py-2 font-bold text-gray-800 hover:bg-gray-400"
                            onClick={() =>
                              handleEditEducation(educationData, index)
                            }
                          >
                            <svg
                              class="h-6 w-6 text-gray-800 dark:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                              />
                            </svg>
                          </button>
                        </div>
                        <div class="ms-4 min-w-0 flex-1">
                          <p class="truncate text-sm font-medium text-gray-900 dark:text-white">
                            Degree
                          </p>
                          <p class="truncate text-sm text-gray-500 dark:text-gray-400">
                            {educationData?.degree}
                          </p>
                        </div>
                        <div class="ms-4 min-w-0 flex-1">
                          <p class="truncate text-sm font-medium text-gray-900 dark:text-white">
                            Field Of Study
                          </p>
                          <p class="truncate text-sm text-gray-500 dark:text-gray-400">
                            {educationData?.fieldOfStudy}
                          </p>
                          <p class="truncate text-xs italic text-gray-500 dark:text-gray-400">
                            {educationData?.startDate}-
                            {educationData?.endDate
                              ? educationData?.endDate
                              : "Present"}
                          </p>
                        </div>
                        <div class="ms-4 min-w-0 flex-1">
                          <p class="truncate text-sm text-gray-500 dark:text-gray-400">
                            {educationData?.school}
                          </p>
                        </div>
                      </>
                    )}
                    {editingEducationIndex === index && (
                      <EditEducation
                        education={editingEducation}
                        onSave={(newData) => updateEducation(index, newData)}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Skills section */}
        <div class="pt-10 md:col-start-5 md:col-end-7">
          <div class="w-full max-w-sm rounded-lg border border-gray-200 bg-white px-2 pt-2 shadow dark:border-gray-700 dark:bg-gray-800">
            <div class="items-left flex flex-col pb-10">
              <h6 className="text-sm font-bold text-gray-900 md:mb-2 dark:text-white">
                Skills
                <button
                  className="float-right inline-flex items-center rounded px-4 py-2 font-bold text-gray-800 hover:bg-gray-400"
                  onClick={handleAddSklClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </button>
              </h6>

              <div className="grid md:grid-cols-3">
                {userData?.skills?.map((skill, index) => (
                  <div
                    key={index}
                    className="md-1 grid rounded-lg border border-gray-200 bg-white shadow-sm md:mb-1 dark:border-gray-700 dark:bg-gray-800"
                  >
                    <div className="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 font-sans text-xs font-bold uppercase text-white">
                      <span>{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>

              <h6 className="text-sm font-bold text-gray-900 md:mb-2 dark:text-white">
                Languages
                <button
                  className="float-right inline-flex items-center rounded px-4 py-2 font-bold text-gray-800 hover:bg-gray-400"
                  onClick={handleAddLngClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </button>
              </h6>

              <div className="grid md:grid-cols-3">
                {userData?.languages?.map((language, index) => (
                  <div
                    key={index}
                    className="md-1 grid rounded-lg border border-gray-200 bg-white shadow-sm md:mb-1 dark:border-gray-700 dark:bg-gray-800"
                  >
                    <div className="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 font-sans text-xs font-bold uppercase text-white">
                      <span>{language}</span>
                    </div>
                  </div>
                ))}
              </div>

              <h6 className="mb-2 pt-5 text-sm font-bold text-gray-900 dark:text-white">
                Links
                <button
                  className="float-right inline-flex items-center rounded px-4 py-2 font-bold text-gray-800 hover:bg-gray-400"
                  onClick={handleAddLinkClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </button>
              </h6>
              {userData?.links?.map((link, index) => (
                <div key={index}>
                  {editingLinkIndex !== index ? (
                    <div>
                      <button
                        className="float-right inline-flex items-center rounded px-4 py-2 font-bold text-gray-800 hover:bg-gray-400"
                        onClick={() => handleEditLink(link, index)}
                      >
                        <svg
                          className="h-6 w-6 text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                          />
                        </svg>
                      </button>
                      <p className="truncate text-sm font-medium capitalize text-gray-500 dark:text-gray-400">
                        {link.type}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center font-medium text-blue-600 hover:underline dark:text-blue-500"
                        >
                          {link.url}
                        </a>
                      </p>
                    </div>
                  ) : (
                    <EditLink
                      link={editingLink}
                      onSave={(newData) => updateLink(index, newData)}
                    />
                  )}
                </div>
              ))}
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
      <Dialog
        title="Add Skills"
        onClose={handleCloseSklDialog}
        open={addSklDialog}
        children={<AddSkills />}
      />
      <Dialog
        title="Add Language"
        onClose={handleCloseLngDialog}
        open={addLngDialog}
        children={<AddLanguage />}
      />
      <Dialog
        title="Add Link"
        onClose={handleCloseLinkDialog}
        open={addLinkDialog}
        children={
          <AddLink
            onSave={(newData) => updateLink(userData.links.length, newData)}
          />
        }
      />
    </>
  );
}

export default UserProfile;
