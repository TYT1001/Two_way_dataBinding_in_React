import React,{useState} from 'react';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
import './App.css';

const App = () => {
  const [courseGoals,setCourseGoals] = useState([
    {id:'cg1',text:'first goal'},
    {id:'cg2',text:'second goal'},
    {id:'cg3',text:'third goal'}
  ]);

const addNewGoalHandler = (newGoal) => {
  //  setCourseGoals(courseGoals.concat(newGoal));
  setCourseGoals((preCourseGoals)=>{
    return [].concat(newGoal,courseGoals);
  })
  // console.log(setCourseGoals);
};

  return (
    <div className='course-goals'>
      <h2 >Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler}/>
      <GoalList  goals={courseGoals}/>
    </div>
  );
};

export default App;
