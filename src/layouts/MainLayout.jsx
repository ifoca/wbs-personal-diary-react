import { Outlet } from 'react-router';
import DiaryItem from '../components/DiaryItem';

const MainLayout = () => {
  return (
    <main className="flex-1">
      <div className="text-center font-semibold text-3xl m-2 p-2">
        <p>More than a story, a Personal Diary</p>
      </div>
      <Outlet />
    </main>
  );
};

export default MainLayout;
