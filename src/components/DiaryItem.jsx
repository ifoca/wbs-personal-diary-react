import ItemModal from './ItemModal';
const DiaryItem = ({ entry }) => {
  return (
    <div className="card bg-base-100 image-full w-96 shadow-sm">
      <figure>
        <img src={entry.image} alt={entry.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{entry.title}</h2>
        <p className="self-start text-xs font-light">{entry.date}</p>
        <div className="card-actions justify-end">
          <div className="btn btn-primary">
            <ItemModal entry={entry} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiaryItem;
