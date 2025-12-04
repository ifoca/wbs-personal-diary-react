import { useState } from 'react';

const AddEntryModal = ({ buttonText, addToDiary, diaryEntries }) => {
  const initialFormState = {
    title: '',
    date: '',
    image: '',
    content: '',
  };

  const [formState, setFormState] = useState(initialFormState);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    setError('');

    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formState);

    if (!formState.title || !formState.date || !formState.image || !formState.content) {
      setError('Please fill in all fields.');
      console.log(error);
      return; // Stop submission
    }

    const dateExists = diaryEntries.some((entry) => entry.date === formState.date);

    if (dateExists) {
      setError(
        'An entry for this date already exists in your Diary. Please choose a different date or come back tomorrow.'
      );
      return; // Stop submission
    }

    addToDiary(formState);
    setFormState(initialFormState);
    setError('');
    document.getElementById('my_modal_4').close();
  };

  return (
    <>
      <button onClick={() => document.getElementById('my_modal_4').showModal()}>
        {buttonText}
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg p-2 mb-4">Add a new entry to your Diary</h3>
          {error && (
            <div className="alert alert-error bg-base-200 mb-8 text-white font-normal">
              <span>{error}</span>
            </div>
          )}
          <form
            onSubmit={handleSubmit}
            className="fieldset bg-base-200 border-base-300 rounded-box border p-4"
          >
            <label className="label" htmlFor="title">
              Title
            </label>
            <input
              onChange={handleChange}
              type="text"
              className="input w-xs"
              placeholder="Diary title"
              name="title"
              id="title"
              value={formState.title}
            />

            <label className="label" htmlFor="date">
              Date
            </label>
            <input
              onChange={handleChange}
              type="date"
              className="input w-xs"
              placeholder="Date"
              name="date"
              id="date"
              value={formState.date}
            />

            <label className="label" htmlFor="image">
              Image URL
            </label>
            <input
              onChange={handleChange}
              type="text"
              className="input w-auto"
              placeholder="Add a link to an image"
              name="image"
              id="image"
              value={formState.image}
            />

            <label className="label" htmlFor="content">
              Content
            </label>
            <textarea
              onChange={handleChange}
              className="input w-auto"
              placeholder="How do you feel today?"
              name="content"
              id="content"
              value={formState.content}
            />

            <button className="btn btn-neutral mt-4 w-3xs ">Submit</button>
          </form>
          <div className="modal-action">
            <form method="dialog">
              <button onClick={() => setError('')} className="btn">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default AddEntryModal;
