import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <main className="flex-1">
      <p>Hello from the Main Layout</p>
      <Outlet />
    </main>
  );
};

export default MainLayout;
