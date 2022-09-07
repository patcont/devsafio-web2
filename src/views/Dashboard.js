import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../context/authContext";

const JobReady = React.lazy(() =>
  import("../components/jobConditon/jobReady.js")
);
const JobActive = React.lazy(() =>
  import("../components/jobConditon/jobActive.js")
);
const JobBoardLayout = React.lazy(() => import("../layout/JobBoardLayout.js"));
const CompleteProfile = React.lazy(() =>
  import("../layout/CompleteProfile.js")
);

const Dashboard = () => {
  const { user, handleLogOut } = useContext(authContext);
  const { status } = user.user;

  return (
    <>
      {
        <html>
          <head>
            <meta charset="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
            />
            <title>Dashboard - Brand</title>
          </head>

          <body id="page-top">
            <div id="wrapper" class="md:flex flex-row h-100% ">
              <nav class="flex relative md:h-100% flex-wrap justify-between   items-start p-0   leading-6 bg-primary bg-cover md:w-56 box-border text-slate-500 ">
                <div class="  mt-1  py-0 px-6 mx-auto w-full box-border ">
                  <hr class="mx-4 mt-0 mb-4 h-px border-b-0 border-t border-white border-solid opacity-25 box-border border-x-0" />
                  <ul class="flex flex-col pl-0 my-0 box-border text-slate-50  place-items-center md:place-items-stretch">
                    <li class="relative text-left box-border">
                      <a
                        class="block relative py-3 px-4 w-24 font-bold leading-5 text-center text-white cursor-pointer md:block md:w-56 md:p-4 md:text-left md:text-sm box-border hover:text-white focus:text-white"
                        href="/dashboard"
                      >
                        <i class="inline-block text-base not-italic font-black leading-none md:mr-1 md:text-sm box-border"></i>
                        <span class="block text-sm md:inline box-border md:text-lg">
                          Dashboard
                        </span>
                      </a>
                    </li>
                    <li class="relative text-left box-border">
                      <a
                        class="block relative py-3 px-4 w-24 leading-5 text-center text-white cursor-pointer md:block md:w-56 md:p-4 md:text-left md:text-sm box-border hover:text-white focus:text-white"
                        href="/profile"
                      >
                        <i class="inline-block text-base not-italic font-black leading-none md:mr-1 md:text-sm box-border"></i>
                        <span class="block text-sm md:inline box-border md:text-lg">
                          Profile
                        </span>
                      </a>
                    </li>
                    <li class="relative text-left box-border"></li>
                    <li class="relative text-left box-border"></li>
                    <li class="relative mb-4 text-left box-border"></li>
                  </ul>
                </div>
              </nav>

              <div id="content-wrapper">
                <div id="content" class="mt-3.5">
                  <div class="px-6 mx-auto w-full leading-6 box-border text-slate-500 flex flex-col place-items-center ml-20">
                    <div className="flex flex-row items-center">
                      <h3 class="mr-2 text-3xl font-normal xl:text-3xl box-border text-zinc-700">
                        Estado:
                      </h3>
                      <div>{<JobReady />}</div>
                    </div>
                    <div class="p-4 mb-0 mt-2 leading-6 break-words border-b border-solid box-border border-slate-200 bg-slate-50 text-slate-500 w-max">
                      <div class="card-header py-3">
                        <p class="m-0 font-bold leading-6 text-primary break-words box-border text-xl">
                          Trabajos
                        </p>
                      </div>
                      <div class="flex-auto p-4 leading-6 break-words box-border text-slate-500 ">
                        <div class="md:flex flex-row">
                          <div
                            class="flex-shrink-0 px-3 mt-0 w-full max-w-full leading-6 whitespace-nowrap
                            break-words md:w-1/2 md:flex-none box-border text-slate-500"
                          ></div>
                          <div class="md:flex-shrink-0 px-3 mt-0 w-full max-w-full leading-6 break-words md:w-1/2 md:flex-none box-border text-slate-500">
                            <div
                              class="break-words md:text-right box-border"
                              id="dataTable_filter"
                            >
                              <label class="inline-block mb-2 text-right cursor-default box-border hidden">
                                <input
                                  type="search"
                                  class="block py-1 px-2 m-0 w-full text-sm font-normal leading-normal bg-clip-padding bg-white rounded border border-solid appearance-none cursor-text box-border border-slate-300 focus:border-indigo-300 focus:bg-white focus:text-slate-500"
                                  aria-controls="dataTable"
                                  placeholder="Search"
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                        <div>{<JobBoardLayout />}</div>

                        <div class="flex flex-wrap -mx-3 mt-1 leading-6 break-words box-border text-slate-500">
                          <div class="flex-shrink-0 hidden self-center px-3 mt-0 w-full max-w-full break-words md:w-1/2 md:flex-none box-border">
                            <p
                              id="dataTable_info"
                              class="mt-0 mb-4 box-border"
                              role="status"
                              aria-live="polite"
                            >
                              Showing 1 to 10 of 27
                            </p>
                          </div>
                          <div class="flex-shrink-0 px-3 mt-0 w-full max-w-full break-words md:w-1/2 md:flex-none box-border">
                            <nav class="lg:flex lg:justify-end box-border">
                              <ul class="flex pl-0 mt-0 mb-4 box-border hidden">
                                <li class="text-left box-border ">
                                  <a
                                    class="block relative py-1 px-3 bg-white border border-solid cursor-pointer pointer-events-none box-border border-zinc-200 hover:border-zinc-200 hover:bg-slate-200 hover:text-blue-800 focus:bg-slate-200 focus:text-blue-800"
                                    aria-label="Previous"
                                    href="#"
                                  >
                                    <span aria-hidden="true" class="box-border">
                                      «
                                    </span>
                                  </a>
                                </li>
                                <li class="text-left box-border" s>
                                  <a
                                    class="block relative py-1 px-3 text-white bg-indigo-500 border border-indigo-500 border-solid cursor-pointer box-border hover:border-zinc-200 hover:bg-slate-200 hover:text-blue-800 focus:bg-slate-200 focus:text-blue-800"
                                    href="#"
                                  >
                                    1
                                  </a>
                                </li>
                                <li class="text-left box-border" s>
                                  <a
                                    class="block relative py-1 px-3 text-indigo-500 bg-white border border-solid cursor-pointer box-border border-zinc-200 hover:border-zinc-200 hover:bg-slate-200 hover:text-blue-800 focus:bg-slate-200 focus:text-blue-800"
                                    href="#"
                                  >
                                    2
                                  </a>
                                </li>
                                <li class="text-left box-border">
                                  <a
                                    class="block relative py-1 px-3 text-indigo-500 bg-white border border-solid cursor-pointer box-border border-zinc-200 hover:border-zinc-200 hover:bg-slate-200 hover:text-blue-800 focus:bg-slate-200 focus:text-blue-800"
                                    href="#"
                                  >
                                    3
                                  </a>
                                </li>
                                <li class="text-left box-border">
                                  <a
                                    class="block relative py-1 px-3 text-indigo-500 bg-white border border-solid cursor-pointer box-border border-zinc-200 hover:border-zinc-200 hover:bg-slate-200 hover:text-blue-800 focus:bg-slate-200 focus:text-blue-800"
                                    aria-label="Next"
                                    href="#"
                                  >
                                    <span aria-hidden="true" class="box-border">
                                      »
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </body>
        </html>
      }
    </>
  );
};

export default Dashboard;
