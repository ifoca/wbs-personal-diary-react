import { NavLink } from 'react-router';

const Navbar = () => {
  // handle onClick event to add an entry
  return (
    <div className="mb-8">
      <div className="bg-neutral text-neutral-content">
        <nav className="flex navbar navbar-center">
          <div className="px-8 mr-auto text-xl">
            <NavLink to={'/'}>Logo</NavLink>
          </div>
          <div className="flex content-end">
            <div className="btn btn-ghost text-xl">
              <button onClick={() => console.log('Button was clicked')}>Add Diary Entry</button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
