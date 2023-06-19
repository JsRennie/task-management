import TaskList from "./Components/TaskList";

export default function Home() {
  return (
    <main className="container flex justify-center mx-auto">
      <div>
        <h1 className="text-2xl font-bold my-4">Task Management System</h1>
        <TaskList />
      </div>
    </main>
  );
}
