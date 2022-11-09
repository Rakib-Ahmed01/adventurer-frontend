export default function Review({ review }) {
  const { userName, reviewText, userPic, time } = review;
  return (
    <div className="border p-4 space-y-2 rounded">
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
  );
}
