import { NextBreadcrumb } from "@lib/components/Breadcrumbs/Breadcrumbs";
import { Title } from "@lib/components/Title/Title";

export default function Projects() {
  return (
    <>
      <section className="bg-main-bg px-5 laptop:px-24 gap-3 pt-10 pb-32 desktop:px-44 space-y-10">
        <Title>Usługi</Title>
        <NextBreadcrumb
          homeElement={"Strona Główna"}
          separator={
            <svg
              className="w-6 h-6 text-text"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          }
          activeClasses="text-amber-500"
          containerClasses="flex py-5 bg-gradient-to-r from-purple-600 to-blue-600"
          listClasses="hover:underline mx-2 font-bold text-text"
          capitalizeLinks
        />
        <div className="">
          <div className="flex items-center justify-center min-h-screen">
            <ul className="mx-auto grid max-w-full w-full grid-cols-3 gap-x-5 px-8">
              <li className="">
                <input
                  className="peer sr-only"
                  type="radio"
                  value="yes"
                  name="answer"
                  id="yes"
                  checked
                />
                <label
                  className="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out"
                  htmlFor="yes"
                >
                  Details
                </label>

                <div className="absolute bg-white shadow-lg left-0 p-6 border mt-2 border-indigo-300 rounded-lg w-[97vw] mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis, voluptatum! Sequi consequatur error nulla
                  quaerat rem fugit provident tempore nihil a aspernatur ad
                  laboriosam, dolor nisi qui? Esse, mollitia? Nostrum? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis, voluptatum! Sequi consequatur error nulla
                  quaerat rem fugit provident tempore nihil a aspernatur ad
                  laboriosam, dolor nisi qui? Esse, mollitia? Nostrum? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis, voluptatum! Sequi consequatur error nulla
                  quaerat rem fugit provident tempore nihil a aspernatur ad
                  laboriosam, dolor nisi qui? Esse, mollitia? Nostrum? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis, voluptatum! Sequi consequatur error nulla
                  quaerat rem fugit provident tempore nihil a aspernatur ad
                  laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?
                </div>
              </li>

              <li className="">
                <input
                  className="peer sr-only"
                  type="radio"
                  value="no"
                  name="answer"
                  id="no"
                />
                <label
                  className="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out"
                  htmlFor="no"
                >
                  About
                </label>

                <div className="absolute bg-white shadow-lg left-0 p-6 border mt-2 border-indigo-300 rounded-lg w-[97vw] mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis, voluptatum! Sequi consequatur error nulla
                  quaerat rem fugit provident tempore nihil a aspernatur ad
                  laboriosam, dolor nisi qui? Esse, mollitia? Nostrum? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis, voluptatum! Sequi consequatur error nulla
                  quaerat rem fugit provident tempore nihil a aspernatur ad
                  laboriosam, dolor nisi qui? Esse, mollitia? Nostrum? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis, voluptatum! Sequi consequatur error nulla
                  quaerat rem fugit provident tempore nihil a aspernatur ad
                  laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?
                </div>
              </li>

              <li className="">
                <input
                  className="peer sr-only"
                  type="radio"
                  value="yesno"
                  name="answer"
                  id="yesno"
                />
                <label
                  className="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out "
                  htmlFor="yesno"
                >
                  Something
                </label>

                <div className="absolute bg-white shadow-lg left-0 p-6 border mt-2 border-indigo-300 rounded-lg w-[97vw] mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis, voluptatum! Sequi consequatur error nulla
                  quaerat rem fugit provident tempore nihil a aspernatur ad
                  laboriosam, dolor nisi qui? Esse, mollitia? Nostrum? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis, voluptatum! Sequi consequatur error nulla
                  quaerat rem fugit provident tempore nihil a aspernatur ad
                  laboriosam, dolor nisi qui? Esse, mollitia? Nostrum? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis, voluptatum! Sequi consequatur error nulla
                  quaerat rem fugit provident tempore nihil a aspernatur ad
                  laboriosam, dolor nisi qui? Esse, mollitia? Nostrum? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis, voluptatum! Sequi consequatur error nulla
                  quaerat rem fugit provident tempore nihil a aspernatur ad
                  laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
