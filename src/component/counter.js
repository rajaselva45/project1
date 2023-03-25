import { addcart,decrement,selectcount } from "./Logics";
import { useDispatch, useSelector } from "react-redux";
function Gudone(){
    const count = useSelector(selectcount);
    const dispatch= useDispatch();
    return(
        <>
        {
            count.map((ele)=>{
                return ele.name
            })
        }
        <button onClick={() =>dispatch(addcart())}>button</button>
        </>
    )
}
export default Gudone