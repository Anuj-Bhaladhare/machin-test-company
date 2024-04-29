import relayService from "../../axios/hook";
import { useNavigate } from 'react-router-dom';

const useLogin = () => {

    const navigate = useNavigate();
    const userLogin = async (initialState) => {
        try {
            const { email, password } = initialState;
            
            if (!email || !password) {
                throw new Error("Email and password are required.");
            }

            console.log("call the apiiii", email, password);
            const response = await relayService({
                url: '/login',
                method: 'POST',
                data: {
                    email,
                    password
                }
            });
            
            console.log("response", response);

            if (response.status === 200) {
                localStorage.setItem("isAuthenticated", response?.data?.token);
                navigate('/dashboard');
                return response.data;
            } else {
                throw new Error("Login failed. Please try again.");
            }
        } catch (error) {
            console.error("Error during login:", error.message);
            throw error; 
        }
    }

    return [{ userLogin }];
}

export default useLogin;
