import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { useState } from 'react'

const Projects = () => {
  const [showItems, setShowItems] = useState(true);
  const [showItemsSecond, setShowItemsSecond] = useState(true);

  return (
    <div className="lg:ml-[300px] mt-36 p-8 lg:p-12 border-2 border-indigo-500 mx-4 rounded-xl">

    <div className="flex justify-between space-x-1">
      <h2 className="text-gray-500 text-3xl"> Projects </h2>

      <div className="grid grid-cols-1">
        <ul className="list-disc list-outside">
          <li className="text-lime-500"> <span className="text-slate-400"> Done </span></li>
          <li className="text-orange-400"> <span className="text-slate-400"> In Progress </span></li>
          <li className="text-red-500"><span className="text-slate-400"> Failed </span></li>
        </ul>
      </div>
    </div>

    <div className="block">
      <div className="grid grid-cols-1 mt-3">
        <ul className="list-disc list-outside text-2xl">
        <li className="list-none"><TiArrowSortedDown onClick={() => setShowItems(!showItems)} className="inline text-indigo-600 cursor-pointer"> </TiArrowSortedDown> <span className="text-slate-400"> #1 Our first project </span></li>
            { showItems ? <ul className="list-disc list-outside text-base pl-4 pt-3">
              <li className="text-lime-500 mt-1 ml-5"> <span className="text-slate-400"> 1. Our first task in first project </span></li>
              <li className="text-lime-500 mt-1 ml-5"> <span className="text-slate-400"> 2. Our second task in first project </span></li>
              <li className="text-lime-500 mt-1 ml-5"> <span className="text-slate-400"> 3. Our third task in first project </span></li>
              <li className="text-orange-400 mt-1 ml-5 pb-3"> <span className="text-slate-400"> 4. Our fourth task in first project </span></li> 
            </ul> : null }
            <li className="list-none"><TiArrowSortedDown onClick={() => setShowItemsSecond(!showItemsSecond)} className="inline text-indigo-600 cursor-pointer"> </TiArrowSortedDown> <span className="text-slate-400"> #2 Our second project </span></li>
            { showItemsSecond ? <ul className="list-disc list-outside text-base pl-4 pt-3">
              <li className="text-lime-500 mt-1 ml-5"> <span className="text-slate-400"> 1. Our first task in second project </span></li>
              <li className="text-orange-400 mt-1 ml-5"> <span className="text-slate-400"> 2. Our second task in second project </span></li>
              <li className="text-red-500 mt-1 ml-5"> <span className="text-slate-400"> 3. Our third task in second project </span></li>
              <li className="text-orange-400 mt-1 ml-5 pb-3"> <span className="text-slate-400"> 4. Our fourth task in second project </span></li>
            </ul> : null }
          <li className="list-none"><TiArrowSortedDown className="inline text-indigo-600 cursor-pointer"> </TiArrowSortedDown><span className="text-slate-400"> #3 Our third project </span></li>
          <li className="list-none"><TiArrowSortedDown className="inline text-indigo-600 cursor-pointer"> </TiArrowSortedDown><span className="text-slate-400"> #4 Our fourth project </span></li>
          <li className="list-none"><TiArrowSortedDown className="inline text-indigo-600 cursor-pointer"> </TiArrowSortedDown><span className="text-slate-400"> #5 Our fifth project </span></li>
        </ul>
      </div>
    </div>

    </div>
  )
}

export default Projects