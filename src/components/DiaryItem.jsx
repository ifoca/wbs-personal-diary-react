const DiaryItem = ({ entry }) => {
  return (
    <div className="bg-gray-700 m-8 p-8">
      <div>
        <h2>{entry.title}</h2>
      </div>
      <div>
        <img src={entry.image} alt={entry.title} />
      </div>
    </div>
  );
};

export default DiaryItem;
