import toast from 'react-hot-toast';

export default function AllReviews({ review, setReviews }) {
  const { userName, reviewText, userPic, time, serviceImg, serviceName, _id } =
    review;

  const handleUpdate = () => {};

  const handleDelete = () => {
    const wantToDelete = window.confirm('Do you want to delete the review?');

    if (wantToDelete) {
      fetch(`http://localhost:5000/reviews/${_id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            toast.success('Review Deleted');
            setReviews((prevReviews) =>
              prevReviews.filter((review) => review._id !== _id)
            );
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="border space-y-2 rounded">
      <div className="relative w-full">
        <img
          src={serviceImg}
          alt={serviceName}
          className="w-full destination-img"
        />
      </div>
      <h3 className="text-blue-400 font-medium text-xl text-center">
        {serviceName}
      </h3>
      <div className="px-2 flex gap-2">
        <button className="delete-btn" onClick={handleDelete}>
          Delete
        </button>
        <button className="update-btn" onClick={handleUpdate}>
          Update
        </button>
      </div>
      <div className="px-2 py-1 space-y-2 -mt-2">
        <div className="flex gap-4 items-center">
          <img
            className="object-cover rounded-full w-14 h-14"
            src={userPic}
            alt={userName}
          />
          <div className="flex flex-col">
            <h3>{userName}</h3>
            <h3>
              {`${new Date(time).toDateString()}  ${new Date(
                time
              ).toLocaleTimeString()}`}
            </h3>
          </div>
        </div>
        <h4>{reviewText}</h4>
      </div>
    </div>
  );
}
