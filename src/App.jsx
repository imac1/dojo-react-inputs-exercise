import Task1 from "./tasks/Task1"
import Task2 from "./tasks/Task2"
import Task3 from "./tasks/Task3"
import Task4 from "./tasks/Task4"

function App() {
  const tasks = {
    'task1': <Task1 />,
    'task2': <Task2 />,
    'task3': <Task3 />,
    'task4': <Task4 />,
  }

  const path = window.location.pathname.replace(/^\//, '')

  return (
    <>
      <h1>React Inputs Dojo</h1>
      {
        Object.keys(tasks).map(key => <a key={key} href={`/${key}`}>{key}</a>)
      }
      <div>{tasks[path]}</div>
    </>
  )
}

export default App
