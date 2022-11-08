export default function Review({ review }) {
  const { name, comment, image } = review;
  return (
    <div className="border p-4 space-y-2 rounded">
      <div className="flex gap-4 items-center">
        <img
          className="object-cover rounded-full w-14 h-14"
          src={image}
          alt={name}
        />
        <div className="flex flex-col">
          <h3>{name}</h3>
          <h3>
            {`${new Date().toDateString()}  ${new Date().toLocaleTimeString()}`}
          </h3>
        </div>
      </div>
      <h4>{comment}</h4>
    </div>
  );
}
