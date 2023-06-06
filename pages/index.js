
import { useState } from 'react'
export default function Home() {
  const [todo, setTodo] = useState({ title: "", desc: "" })

  const addTodo = () => {
    let todos = localStorage.getItem("todos");
    if (todos) {
      let todosJson = JSON.parse(todos)
      if (todosJson.filter(ob => { return ob.title == todo.title }).length > 0) {
        alert("Todo already exists")
      } else {
        todosJson.push(todo);
        localStorage.setItem("todos", JSON.stringify(todosJson))
        alert("Todo added")
        setTodo({ title: "", desc: "" })
      }
    } else {
      localStorage.setItem("todos", JSON.stringify([todo]))
    }
  }
  
  const onChange = (e) => {

    setTodo({ ...todo, [e.target.name]: e.target.value });
    console.log(todo)

  }
  return (
    <div className="my-2">

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <h1 className='mb-4 ' style={{color:'white'}}> Add a Todo</h1>

          <div class=" bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Add a Todo</h2>
            <div class="relative mb-4">
              <label for="title" class="leading-7 text-sm text-gray-600">Todo Title</label>
              <input onChange={onChange} type="text" id="title" value={todo.title} name="title" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div class="relative mb-4">
              <label for="desc" class="leading-7 text-sm text-gray-600">Todo Text</label>
              <input onChange={onChange} type="text" id="desc" value={todo.desc} name="desc" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button onClick={addTodo} class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-fit">Add Todo</button>

          </div>
        </div>
      </section>
    </div>
  )
}
