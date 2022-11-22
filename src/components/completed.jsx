const Completed = () => {
    return ( 
        <>  
            <div className="flex justify-center flex-col mt-8 items-center">
                <h2 className="text-left text-pink-600 font-bold text-2xl">Completed</h2>

                <div className="flex items-center">
                    <div className="bg-pink-600 text-white rounded-sm px-3 py-2 w-52">
                        <strike>Go shopping with Nana</strike>
                    </div>
                    <button className="border-2 border-black rounded-sm px-2 py-1 m-2">Delete</button>
                </div>
            </div>
        </>
     );
}
 
export default Completed;