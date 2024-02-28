import "./Card.css";

const Card = (prop) => {

const handleEdit=() =>{


}
const handleDelete =() =>{


}

  return (
  
      
      <div
  className="flex   bg-gray-800 border border-gray-800 shadow-lg rounded-2xl">
  <div className="">
    <div className="text-center p-3">
      <div   className={` toggler ${prop.isCompleted ? "line-through":""}`}>
    <input id="toggler-1" name="toggler-1" type="checkbox" value="1"/>
    <label for="toggler-1">
        <svg className="toggler-on" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
            <polyline className="path check" points="100.2,40.2 51.5,88.8 29.8,67.5"></polyline>
        </svg>
        <svg className="toggler-off" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
            <line className="path line" x1="34.4" y1="34.4" x2="95.8" y2="95.8"></line>
            <line className="path line" x1="95.8" y1="34.4" x2="34.4" y2="95.8"></line>
        </svg>
    </label>
</div>
      <h2 className="text-xl font-bold py-4 text-gray-200">{prop.todopara}</h2>
      <p className= "text-sm text-gray-500 px-2">
        Do you really want to delete your account? This process cannot be undone
      </p>
    </div>
    <div className="p-2 mt-2  space-x-1 md:block">
      <button
        className="mb-2 md:mb-0 bg-gray-700 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border-2 border-gray-600 hover:border-gray-700 text-gray-300 rounded-full hover:shadow-lg hover:bg-gray-800 transition ease-in duration-300"
      onClick={handleEdit}
      >
        Edit
      </button>
      <button
        className="bg-red-400 hover:bg-red-900 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-300 hover:border-red-500 text-white rounded-full transition ease-in duration-300"
      onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  </div>
</div>

  )
}

export default Card
