import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <main className="flex-1">
      <h1>Name of the project - Diary history etc.</h1>
      <p>Hello from the Main Layout</p>
      <div className="m-8">
        All entries
        <div>Entry 1</div>
        <div>Entry 2</div>
        <div>Entry 3</div>
        <div>Entry 4</div>
      </div>
    </main>
  );
};

export default MainLayout;
