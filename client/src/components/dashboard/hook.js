import relayService from "../../axios/hook";
import { useNavigate } from 'react-router-dom';

const useDashboard = () => {

    const navigate = useNavigate();
    
    const userDashboard = async () => {
        try{

        } catch (err) {
            console.log("user not login", err)
        }
    }
      
    return [{ userDashboard }];
}

export default useDashboard;