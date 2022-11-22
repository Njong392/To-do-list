import Completed from "./completed";
import Form from "./form";
import ToDo from "./todo";

const Home = () => {
    return(
        <>
            <div className="text-center m-5">
                <h1 className="text-3xl font-bold text-pink-600">Emy's to-do list</h1>
            </div>

            <Form />
            <div className="flex justify-center flex-col items-center mt-8">
                <h2 className="text-left text-pink-600 font-bold text-2xl" >Tasks</h2>
                <ToDo />
            </div>
          
            <Completed />
        </>
    )
}

export default Home;