import { NavLink } from 'react-router-dom';

const RegisterNow = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-700 sm:text-4xl dark:text-white">
            Join us and get the update <br /> from anywhere
          </h2>

          <div className="mt-6 sm:-mx-2">
            <div className="inline-flex w-full sm:w-auto sm:mx-2">
              <NavLink to="/register" className="btn">
                Register Now
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterNow;
