import { useState } from 'react';
import DiaryItem from './DiaryItem';
import ItemModal from './ItemModal';
const DiaryEntries = ({ diaryEntries }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <div className="grid grid-cols-3 gap-12 m-2 justify-items-center">
        {diaryEntries.map((entry) => (
          <DiaryItem key={entry.date} entry={entry} onOpenModal={setSelectedItem} />
        ))}
      </div>
      {selectedItem && <ItemModal entry={selectedItem} onClose={() => setSelectedItem(null)} />}
    </>
  );
};

export default DiaryEntries;
