// import { Fragment } from 'react'
// import classes from './App.module.css'

import { useState } from 'react'
// import Filter from './components/Filter/Filter';
import List from './components/List/List';
import Wrapper from './components/Wrapper/Wrapper';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// import './App.css';

const App = () => {

  const [tasks, setTasks] = useState([])
  const [activeTasks, setActiveTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])
  // const [filteredTasks, setFilteredTasks] = useState([])
  const [filterType, setFilterType] = useState('All')

  const addTaskHandler = (newTask) => {
    setTasks(prevTasks => {
      return [...prevTasks, newTask]
    })
  }

  const filterAllTasksHandler = (id) => {
    // setTasks(prevTasks => {
    //   return prevTasks.filter((task, index) => {
    //     return id !== index;
    //   });
    // }); 
    setFilterType('All')
  }

  const filterActiveTasksHandler = () => {
    const activeTasks = [...tasks]
    setActiveTasks(activeTasks.filter(task => task.completed === false))
    setFilterType('Active')
  }

  const filterCompletedTasksHandler = () => {
    const completedTasks = [...tasks]
    setCompletedTasks(completedTasks.filter(task => task.completed === true))
    setFilterType('Completed')
  }

  //
  const clearCompletedTasksHandler = () => {
    const completedTasks = [...tasks]
    setTasks(completedTasks.filter(task => task.completed === false))
  }
  //

  const markTaskHandler = (id) => {
    const markedTasks = [...tasks]
    markedTasks[id].completed = !markedTasks[id].completed
    console.log(tasks)
    setTasks(markedTasks)
  };
  // filterType === 'Active' ? tasks.filter(task => task.completed === false) : tasks.filter(task => task.completed === true)
  return (
    <Wrapper>
        <Header />
        <Form onAdd={addTaskHandler}/>
        <List 
        // tasks={tasks}
        filterType={filterType}
        tasks={tasks} 
        activeTasks={activeTasks}
        completedTasks={completedTasks}
        onMarked={markTaskHandler}
        onClearCompleted={clearCompletedTasksHandler}
        onAllFilter={filterAllTasksHandler}
        onActiveFilter={filterActiveTasksHandler}
        onCompletedFilter={filterCompletedTasksHandler}
        />
        <Footer />
    </Wrapper>
  )

}

export default App
