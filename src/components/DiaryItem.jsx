const DiaryItem = ({ entry, onOpenModal }) => {
  return (
    <div className="card bg-base-100 image-full h-96 w-96 shadow-sm">
      <figure className="image-full ">
        <img className="aspect-3/2 object-cover" src={entry.image} alt={entry.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{entry.title}</h2>
        <p className="self-start text-xs font-light">{entry.date}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={() => onOpenModal(entry)}>
            See more
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiaryItem;
