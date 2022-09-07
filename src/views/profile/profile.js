import React from "react";

const Profile = () => {
  return (
    <>
      <h3 class="mt-0 mb-6 text-3xl font-normal xl:text-3xl box-border text-zinc-700">
        Profile
      </h3>
      <div class="lg:flex flex-row mb-1">
        <div class="flex-shrink-0 px-3 mt-0 w-full max-w-full leading-6 lg:w-1/3 lg:flex-none box-border text-slate-500">
          <div class="flex relative flex-col mb-4 min-w-0 break-words bg-clip-border bg-white rounded-md border border-solid box-border border-slate-200">
            <div class="flex-auto p-4 text-center box-border shadow-md">
              <img
                class="mt-6 mb-4 align-middle box-border"
                src=""
                width="160"
                height="160"
              />
              <div class="mb-4 box-border">
                <button
                  class="inline-block py-1 px-2 m-0 text-sm font-normal leading-normal text-white normal-case align-middle bg-indigo-500 rounded border border-indigo-500 border-solid cursor-pointer select-none box-border hover:border-blue-800 hover:bg-indigo-700 hover:text-white focus:border-blue-800 focus:bg-indigo-700 focus:text-white"
                  type="button"
                >
                  Change Photo
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-grow flex-shrink-0 px-3 mt-0 lg:w-fit max-w-full leading-6 box-border text-slate-500">
          <div class="flex relative flex-col shadow-md mb-4 min-w-0 break-words bg-clip-border bg-white rounded-md border border-solid box-border border-slate-200">
            <div class="p-4 mb-0 border-b border-solid box-border border-slate-200 bg-slate-50">
              <p class="m-0 font-bold text-indigo-500 box-border">
                User Settings
              </p>
            </div>
            <div class="flex-auto p-4 box-border">
              <form class="box-border">
                <div class="flex flex-wrap -mx-3 mt-0 box-border">
                  <div class="flex-grow flex-shrink-0 px-3 mt-0 w-full max-w-full box-border">
                    <div class="mb-4 box-border">
                      <label
                        class="inline-block mb-2 cursor-default box-border"
                        for="username"
                      >
                        <strong class="box-border">Username</strong>
                      </label>
                      <input
                        class="block py-1 px-3 m-0 w-full text-base font-normal leading-normal bg-clip-padding rounded-md border border-solid appearance-none cursor-text box-border border-slate-300 focus:border-indigo-300 focus:bg-white focus:text-slate-500"
                        type="text"
                        id="username"
                        placeholder="user.name"
                        name="username"
                      />
                    </div>
                  </div>
                  <div class="flex-grow flex-shrink-0 px-3 mt-0 w-full max-w-full box-border">
                    <div class="mb-4 box-border">
                      <label
                        class="inline-block mb-2 cursor-default box-border"
                        for="email"
                      >
                        <strong class="box-border">Email Address</strong>
                      </label>
                      <input
                        class="block py-1 px-3 m-0 w-full text-base font-normal leading-normal bg-clip-padding rounded-md border border-solid appearance-none cursor-text box-border border-slate-300 focus:border-indigo-300 focus:bg-white focus:text-slate-500"
                        type="email"
                        id="email"
                        placeholder="user@example.com"
                        name="email"
                      />
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mt-0 box-border">
                  <div class="flex-grow flex-shrink-0 px-3 mt-0 w-full max-w-full box-border">
                    <div class="mb-4 box-border">
                      <label
                        class="inline-block mb-2 cursor-default box-border"
                        for="first_name"
                      >
                        <strong class="box-border">First Name</strong>
                      </label>
                      <input
                        class="block py-1 px-3 m-0 w-full text-base font-normal leading-normal bg-clip-padding rounded-md border border-solid appearance-none cursor-text box-border border-slate-300 focus:border-indigo-300 focus:bg-white focus:text-slate-500"
                        type="text"
                        id="first_name"
                        placeholder="John"
                        name="first_name"
                      />
                    </div>
                  </div>
                  <div class="flex-grow flex-shrink-0 px-3 mt-0 w-full max-w-full box-border">
                    <div class="mb-4 box-border">
                      <label
                        class="inline-block mb-2 cursor-default box-border"
                        for="last_name"
                      >
                        <strong class="box-border">Last Name</strong>
                      </label>
                      <input
                        class="block py-1 px-3 m-0 w-full text-base font-normal leading-normal bg-clip-padding rounded-md border border-solid appearance-none cursor-text box-border border-slate-300 focus:border-indigo-300 focus:bg-white focus:text-slate-500"
                        type="text"
                        id="last_name"
                        placeholder="Doe"
                        name="last_name"
                      />
                    </div>
                  </div>
                </div>
                <div class="mb-4 box-border">
                  <button
                    class="inline-block py-1 px-2 m-0 text-sm font-normal leading-normal text-center text-white normal-case align-middle bg-indigo-500 rounded border border-indigo-500 border-solid cursor-pointer select-none box-border hover:border-blue-800 hover:bg-indigo-700 hover:text-white focus:border-blue-800 focus:bg-indigo-700 focus:text-white"
                    type="submit"
                  >
                    Save Settings
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="flex relative flex-col shadow-md min-w-0 break-words bg-clip-border bg-white rounded-md border border-solid box-border border-slate-200">
            <div class="p-4 mb-0 border-b  border-solid box-border border-slate-200 bg-slate-50">
              <p class="m-0 font-bold text-indigo-500 box-border">
                Contact Settings
              </p>
            </div>
            <div class="flex-auto p-4 box-border">
              <form class="box-border">
                <div class="mb-4 box-border">
                  <label
                    class="inline-block mb-2 cursor-default box-border"
                    for="address"
                  >
                    <strong class="box-border">Address</strong>
                  </label>
                  <input
                    class="block py-1 px-3 m-0 w-full text-base font-normal leading-normal bg-clip-padding rounded-md border border-solid appearance-none cursor-text box-border border-slate-300 focus:border-indigo-300 focus:bg-white focus:text-slate-500"
                    type="text"
                    id="address"
                    placeholder="Sunset Blvd, 38"
                    name="address"
                  />
                </div>
                <div class="flex flex-wrap -mx-3 mt-0 box-border">
                  <div class="flex-grow flex-shrink-0 px-3 mt-0 w-full max-w-full box-border">
                    <div class="mb-4 box-border">
                      <label
                        class="inline-block mb-2 cursor-default box-border"
                        for="city"
                      >
                        <strong class="box-border">City</strong>
                      </label>
                      <input
                        class="block py-1 px-3 m-0 w-full text-base font-normal leading-normal bg-clip-padding rounded-md border border-solid appearance-none cursor-text box-border border-slate-300 focus:border-indigo-300 focus:bg-white focus:text-slate-500"
                        type="text"
                        id="city"
                        placeholder="Los Angeles"
                        name="city"
                      />
                    </div>
                  </div>
                  <div class="flex-grow flex-shrink-0 px-3 mt-0 w-full max-w-full box-border">
                    <div class="mb-4 box-border">
                      <label
                        class="inline-block mb-2 cursor-default box-border"
                        for="country"
                      >
                        <strong class="box-border">Country</strong>
                      </label>
                      <input
                        class="block py-1 px-3 m-0 w-full text-base font-normal leading-normal bg-clip-padding rounded-md border border-solid appearance-none cursor-text box-border border-slate-300 focus:border-indigo-300 focus:bg-white focus:text-slate-500"
                        type="text"
                        id="country"
                        placeholder="USA"
                        name="country"
                      />
                    </div>
                  </div>
                </div>
                <div class="mb-4 box-border">
                  <button
                    class="inline-block py-1 px-2 m-0 text-sm font-normal leading-normal text-center text-white normal-case align-middle bg-indigo-500 rounded border border-indigo-500 border-solid cursor-pointer select-none box-border hover:border-blue-800 hover:bg-indigo-700 hover:text-white focus:border-blue-800 focus:bg-indigo-700 focus:text-white"
                    type="submit"
                  >
                    Save&nbsp;Settings
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
