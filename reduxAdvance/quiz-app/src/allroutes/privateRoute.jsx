import { useSelector } from "react-redux"
import { Navigate, } from "react-router-dom"


export const  PrivateRoute = ({children})=>{
    const token = useSelector((state)=>state.login.token)
    // const navigate = useNavigate()

    if(token==null){
        return (
            <Navigate to='/login' />
        )
    }
    
    return <>
       <div>
        {children}
       </div>
    </>
}