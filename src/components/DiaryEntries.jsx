import DiaryItem from './DiaryItem';
const DiaryEntries = ({ diaryEntries }) => {
  return (
    <div>
      {diaryEntries.map((entry) => (
        <DiaryItem key={entry.title} entry={entry} />
      ))}
    </div>
  );
};

export default DiaryEntries;
