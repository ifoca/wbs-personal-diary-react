import { BrowserRouter, Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import { useState } from 'react';
import { getLocalStorage, addToLocalStorage } from './utils/shared';

function App() {
  const [diaryEntries, setDiaryEntries] = useState(getLocalStorage());

  const addToDiary = (item) => {
    addToLocalStorage(item);
    setDiaryEntries((prev) => [...prev, item]);
  };

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar addToDiary={addToDiary} />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home diaryEntries={diaryEntries} addToDiary={addToDiary} />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

/*
To do: 
- a user-friendly interface that displays daily entries sorted by date
- with each entry presented as a card featuring a preview image and title
- Users can click on a card to view full details in a modal window
- Additionally, you will implement functionality to add new entries, 
  ensuring they are validated and stored in localStorage.


    Add Entry Form Fields:
      - Form Validation: Block submission unless all fields are populated.

    One-Entry-Per-Day Check: ??
      - If an entry already exists for the selected day, 
        prompt the user to come back the next day.

    Homepage List:
    - Display diary entries sorted newest-first.
    Load Entries on Startup	:
    - Read and render stored entries when the app first mounts.
        Card Layout:
        - Show each entry as a card with preview image, date and title.
            Entry Detail Modal:
            - Clicking a card opens a modal showing full entry 
            (title, date, image, content). Control showing/hiding 
            the preview modal, as well as its content, with state.
*/
