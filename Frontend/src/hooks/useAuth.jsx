import { useContext } from 'react'; // Para extraer losdatos

import AuthContext from '../context/AuthProvider';
const useAuth = () =>{
return useContext(AuthContext);
};
export default useAuth