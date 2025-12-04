import { NavLink } from 'react-router';
import AddEntryModal from './AddEntryModal';

const Navbar = ({ addToDiary, diaryEntries }) => {
  // handle onClick event to add an entry
  return (
    <nav className="mb-8">
      <div className="bg-neutral text-neutral-content">
        <nav className="flex navbar navbar-center">
          <div className="px-8 mr-auto text-xl">
            <NavLink to={'/'}>Logo</NavLink>
          </div>
          <div className="flex content-end">
            <div className="btn btn-ghost text-xl">
              <NavLink to={'/'}>Homepage</NavLink>
            </div>
            <div className="btn btn-ghost text-xl">
              <AddEntryModal
                buttonText="Add Diary Entry"
                addToDiary={addToDiary}
                diaryEntries={diaryEntries}
              />
            </div>
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
