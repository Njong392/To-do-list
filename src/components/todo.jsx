import {useState} from 'react';

const ToDo = ({task}) => {

    return ( 
        <>  
    
            <div className="flex items-center justify-center">
                <div className="bg-pink-600 text-white rounded-sm px-3 py-2 w-52">
                    <p>Go to work with Nana</p>
                </div>
                <button className="m-2 border-pink-600 rounded-sm border-2 px-2 py-1">Done</button>
                <button className="border-2 border-black rounded-sm px-2 py-1">Delete</button>
            </div>
            
        </>
     );
}
 
export default ToDo;