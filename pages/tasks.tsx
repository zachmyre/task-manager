import type { NextPage } from "next";
import AddTaskContainer from '../components/tasks/AddTaskContainer';



const Tasks: NextPage = () => {

  return (
    <main className="mt-3">
        <div>
            <AddTaskContainer />
        </div>
    </main>
  );
};

export default Tasks;
