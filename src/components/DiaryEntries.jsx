import DiaryItem from './DiaryItem';
const DiaryEntries = ({ diaryEntries }) => {
  return (
    <div className="grid grid-cols-3 gap-12 m-2 justify-items-center">
      {diaryEntries.map((entry) => (
        <DiaryItem key={entry.title} entry={entry} />
      ))}
    </div>
  );
};

export default DiaryEntries;
