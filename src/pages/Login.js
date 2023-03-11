import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';
import postToLogin from '../utils/postToLogin';

export default function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [seePassword, setSeePassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const path = location?.state?.from || '/destinations';

  const { signInWithProvider, signInWithMailAndPass, setLoading } =
    useContext(AuthContext);

  const { email, password } = data;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithMailAndPass(email, password)
      .then((res) => {
        const user = res.user;
        toast.success('Logged In Successfully');
        navigate(path, { replace: true });
        postToLogin(user.email, user.displayName);
      })
      .catch((err) => {
        toast.error(err.message.replace('Firebase: ', ''));
        setLoading(false);
      });
  };

  const signUpWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithProvider(googleProvider)
      .then((res) => {
        const user = res.user;
        toast.success('Logged In Successfully');
        navigate(path, { replace: true });
        postToLogin(user.email, user.displayName);
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message.replace('Firebase: ', ''));
      });
  };

  const signUpWithGitHub = () => {
    const githubProvider = new GithubAuthProvider();
    signInWithProvider(githubProvider)
      .then((res) => {
        const user = res.user;
        toast.success('Logged In Successfully');
        navigate(path, { replace: true });
        postToLogin(user.email, user.displayName);
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message.replace('Firebase: ', ''));
      });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Helmet>
        <title>Adventurer - Login</title>
      </Helmet>
      <div className="flex flex-col items-center mb-2">
        <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white -mb-1">
          Login
        </h1>

        <div className="mx-auto">
          <span className="inline-block w-40 h-1 bg-teal-500 rounded-full"></span>
        </div>
      </div>
      <div className="mx-auto w-[90%] md:w-[450px]">
        <div className="border rounded-lg">
          <form className="p-3 space-y-1" onSubmit={handleSubmit}>
            <div className=" flex flex-col justify-center ">
              <label htmlFor="email">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                className="p-1 rounded-[4px] outline-none border"
                onBlur={handleChange}
                required
              />
            </div>
            <div className=" flex flex-col justify-center ">
              <label htmlFor="password">
                Password<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={`${seePassword ? 'text' : 'password'}`}
                  name="password"
                  id="password"
                  placeholder={`Enter Your Password`}
                  className="p-1 rounded-[4px] outline-none border w-full"
                  onBlur={handleChange}
                  required
                />
                {!seePassword ? (
                  <HiOutlineEye
                    className="absolute right-2 top-2"
                    onClick={() => setSeePassword(!seePassword)}
                  />
                ) : (
                  <HiOutlineEyeOff
                    className="absolute right-2 top-2"
                    onClick={() => setSeePassword(!seePassword)}
                  />
                )}
              </div>
            </div>
            <small className="block underline text-teal-500">
              Forgot Password?
            </small>
            <small className="block">
              Don't have an acoount?{' '}
              <Link to="/register" className="underline text-teal-500">
                Register
              </Link>
            </small>
            <button type="submit" className="btn block w-full mt-4">
              Login
            </button>
          </form>
        </div>
        <div className="p-3 -mt-2">
          <button
            type="submit"
            className="btn flex items-center justify-center w-full my-2 gap-1"
            onClick={signUpWithGoogle}
          >
            <FcGoogle className="text-xl mt-[2px]" />
            <span>Sign In With Google</span>
          </button>
          <button
            type="submit"
            className="btn flex items-center justify-center w-full my-2 gap-1"
            onClick={signUpWithGitHub}
          >
            <BsGithub className="text-xl mt-[2px]" />
            <span>Sign In With GitHub</span>
          </button>
        </div>
      </div>
    </div>
  );
}
