import { useState } from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function AddDestination() {
  const [destinationDetails, setDestinationDetails] = useState({
    name: '',
    image: '',
    expense: '',
    days: '',
  });
  const [desc, setDesc] = useState('');
  const navigate = useNavigate();

  const { name, image, expense, days } = destinationDetails;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDestinationDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const hanldeSubmit = (e) => {
    e.preventDefault();
    console.log({ ...destinationDetails, desc });
    const destination = {
      title: name,
      desc,
      image,
      rating: 4.7,
      price: expense,
      days: `${days} Days`,
      reviewCount: 0,
    };

    fetch('https://adventurer.vercel.app/destinations', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(destination),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success('Destination added');
          navigate('/destinations');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Helmet>
        <title>Adventurer - Add Destination</title>
      </Helmet>
      <div className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-6 mx-auto">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
              Add A Destination
            </h1>
            <div className="mx-auto">
              <span className="inline-block w-48 h-1 bg-blue-500 rounded-full"></span>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-2 w-[90%] max-w-2xl mb-2 border rounded p-2">
          <form className="p-2 space-y-2" onSubmit={hanldeSubmit}>
            <div className=" flex flex-col justify-center ">
              <label htmlFor="name">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name of the destination..."
                className="p-1 rounded-[4px] outline-none border"
                onBlur={handleChange}
                required
              />
            </div>
            <div className=" flex flex-col justify-center ">
              <label htmlFor="image">
                Image<span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                name="image"
                id="image"
                placeholder="Image link of the destination..."
                className="p-1 rounded-[4px] outline-none border"
                onBlur={handleChange}
                required
              />
            </div>
            <div className=" flex flex-col justify-center ">
              <label htmlFor="expense">
                Expense<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="expense"
                id="expense"
                placeholder="Expense of the destination..."
                className="p-1 rounded-[4px] outline-none border"
                onBlur={handleChange}
                required
              />
            </div>
            <div className=" flex flex-col justify-center ">
              <label htmlFor="days">
                Days<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="days"
                id="days"
                placeholder="Number of days..."
                className="p-1 rounded-[4px] outline-none border"
                onBlur={handleChange}
                required
              />
            </div>

            <div className="mt-5">
              <div className="flex justify-between">
                <label htmlFor="desc" className="flex">
                  Description<span className="text-red-500">*</span>
                </label>
                <span
                  className={`${
                    desc.length >= 150 ? 'text-green-500' : 'text-red-500'
                  }`}
                >{`${desc.length}/150`}</span>
              </div>
              <textarea
                name="desc"
                id="desc"
                className="w-full border rounded resize-none h-36 placeholder:p-1 p-2"
                placeholder="Destination description..."
                onChange={(e) => setDesc(e.target.value)}
                minLength="150"
                required
              ></textarea>
            </div>
            <button className="btn w-full">Add Description</button>
          </form>
        </div>
      </div>
    </>
  );
}
