import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {useLoaderData} from 'react-router-dom'

function Github() {

const data = useLoaderData();

  /*
  const [data,setData] = useState([])
  useEffect(() => {
    fetch("https://api.github.com/users/anuradhakumari2025")
    .then(response => response.json())
    .then(data => {
      setData(data)
    })
  }, []);

  */

  return (
    <div className="bg-gray-600 text-white m-4 text-center p-4 text-3xl">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="Git Pic" width={300}></img>
    </div>
  );
  

}

export default Github;

export const githubInfoLoader = async() => {
  const response = await  fetch("https://api.github.com/users/anuradhakumari2025")
  return response.json()

}