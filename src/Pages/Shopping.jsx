import { useEffect, useState } from "react";
import Axios from 'axios';
import MedicineItem from "../Components/MedicineItem";
const Shopping = () => {
    const [Medicines, setMedicines] = useState([]);
    useEffect(() => {
        allmedicines();
    },[])
    const allmedicines = async () => {
        try {
            const res = await Axios.get("https://localhost:7258/api/Medicines");
            setMedicines(res.data);
            console.log(res.data);
        }catch(err) {
            console.log(err);
        }
    }
    return (
        <div className="bg-white m-3 rounded-1">
            <div className="fs-3 mx-2 px-3 rounded-2 bg-dark text-light">Medices</div>
            <div className="MedicineList d-flex flex-wrap justify-content-around">
                {Medicines.map((item) => (
                    <MedicineItem item={item}/>
                ))}
            </div>  
        </div>
    )
}

export default Shopping;
