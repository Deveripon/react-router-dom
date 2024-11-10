import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    /*  throw new Error("Error"); */
    function handleLogin() {
        navigate("/dashboard");
    }
    return (
        <div className='flex justify-center items-center h-screen w-full bg-gray-500'>
            <button
                onClick={handleLogin}
                className='bg-green-500 px-6 py-2 rounded-md text-white'>
                Login
            </button>
        </div>
    );
};

export default Login;
