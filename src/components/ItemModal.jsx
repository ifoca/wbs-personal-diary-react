const ItemModal = ({ entry }) => {
  return (
    <>
      <button onClick={() => document.getElementById('my_modal_5').showModal()}>See more</button>
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="card lg:card-side bg-base-100 shadow-sm">
            <figure>
              <img src={entry.image} alt={entry.title} />
            </figure>
            <div className="flex flex-col card-body max-w-lg gap-4">
              <h2 className="flex card-title self-center font-stretch-normal">{entry.title}</h2>
              <p className="self-start font-extralight font-stretch-normal text-sm text-justify">
                {entry.content}
              </p>
              <p className="self-start text-xs font-light mt-3">{entry.date}</p>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ItemModal;
