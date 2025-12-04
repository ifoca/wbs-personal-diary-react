import AddEntryModal from '../components/AddEntryModal';
import DiaryEntries from '../components/DiaryEntries';

const Home = ({ diaryEntries, addToDiary }) => {
  return (
    <div className="p-4 m-10">
      {diaryEntries.length > 0 ? (
        <div className="m-8">
          <DiaryEntries diaryEntries={diaryEntries} />
        </div>
      ) : (
        <div className="flex flex-col gap-8 items-center m-4 p-4">
          <div>
            <p className="font-normal text-lg">
              It seems like you don't have any entries in your personal diary so far
            </p>
          </div>
          <div className="btn bg-primary p-2">
            <AddEntryModal buttonText="Add first entry" addToDiary={addToDiary} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
