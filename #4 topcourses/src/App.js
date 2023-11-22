import React from "react";
import Navbar from "./componenets/Navbar";
import Filter from "./componenets/Filter";
import Cards from "./componenets/Cards"
import {apiUrl, filterData} from "./data"
import { useState,useEffect } from "react";
import Spinner from "./componenets/Spinner";
import {toast} from "react-toastify";

const App =()=> {
    
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title)

   async function fetchdata(){
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();

      ///Output
      setCourses(output.data);
    }
    catch(e){
       toast.error("Network me koi dikkat hai")
    }
    setLoading(false);
  }

  useEffect (()=>{
    fetchdata();
  },[])

  return (
    <div className="min-h-screen bg-gray-600 flex flex-col">
      <div>
      <Navbar/>
      </div>
      
      <div>
      <div>
      <Filter
        filterData={filterData}
         category={category}
         setCategory={setCategory}
      />
      </div>

      <div className="w-11/12 max-w-[1200px] mx-auto  flex flex-wrap justify-center items-center min-h-[50vh]">
      {
        loading ? (<Spinner/>):(<Cards courses={courses} category={category}/>)
      }
      </div>
      </div>

      
    </div>
  );
  
} 

export default App;
