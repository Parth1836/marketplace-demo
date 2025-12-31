import React from "react";
import PreBuiltIntegrators from "./components/PreBuiltIntegrators";
import ApiExplorerSection from "./components/APIExplorer";
import Keyfatures from "./components/Keyfeatures/Keyfeatures";
import Rangeofapis from "./components/Rangeofapis/Rangeofapis";

export default function App() {
  return (
    <>
      <Keyfatures></Keyfatures>
      <Rangeofapis></Rangeofapis>
      <PreBuiltIntegrators />
      <ApiExplorerSection />
    </>
    // <div className="flex items-center justify-center min-h-screen">

    //   <div className="max-w-lg w-full rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
    //     <h1 className="text-3xl font-bold tracking-tight text-gray-900">Hello, World! 👋</h1>
    //     <p className="mt-2 text-gray-600">
    //       This is a React + Vite + Tailwind starter with unlocked versions.
    //     </p>
    //     <div className="mt-6">
    //       <a
    //         href="https://vitejs.dev"
    //         target="_blank"
    //         rel="noreferrer"
    //         className="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
    //       >
    //         Vite Docs
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
}
