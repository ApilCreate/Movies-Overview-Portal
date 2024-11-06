import React from 'react'
import { Star } from 'lucide-react';

export function Revies({Rating, Title, Review, Date, User, Ratings}) {
  return (
    <div className='container mx-auto bg-indigo-500 p-5 w-4/5 flex flex-row rounded-xl my-5 shadow-lg shadow-indigo-500/50'>
        <div className="justify-items-start text-white p-5 items-center mb-1">
            <div className="flex flex-row gap-1 ">
            <h1>Rating: </h1>
            <p><Star fill='#ff980a' color='#ff980a'/></p>
            <p>{Rating}</p>
            </div>
            <h1 className='text-xl font-bold'>{Title}</h1>
            <p>{Review}</p>
            <p className='font-semibold'>Published Date: {Date}</p>
            <p className='font-semibold'>Published By: {User}</p>
            <div>
              <h2>Ratings:</h2>
              {Ratings.map((rating,index) =>{
                <p key={index}>
                  {rating.Source} : {rating.Value}
                </p>
              })}
              Source : Value
            </div>
        </div>
    </div>
    
  )
}
