import {useState} from 'react';
import ToDo from "./todo";

const Form = () => {

    const [input, setInput] = useState('');
    const [toDo, setToDo] = useState([]);

    const AddToDo = () => {
        console.log(input)
        setToDo([...toDo, input])
        setIsShown(true);
    }

    return(
        <>
            <div className="flex justify-center">
                <div className="flex">
                    <input type="text" className="border-2 border-pink-600 outline-none px-2 rounded-sm"
                    value = {input}
                    onChange = {(e) => setInput(e.target.value)}
                    />
                    <input type="submit" value="Add" className="bg-pink-600 text-white rounded-sm ml-4 px-3 py-1 cursor-pointer"
                    onClick={() => AddToDo()}/>
                </div>
    
            </div>

            {toDo.map((input,i)=>{<ToDo task={input} key={i}/>})}
        </>
    )
}

export default Form;