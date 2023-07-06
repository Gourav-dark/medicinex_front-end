import { useParams } from "react-router-dom";
import Axios from 'axios';
import { useEffect, useState } from "react";
import { CiCirclePlus,CiCircleMinus } from "react-icons/ci";

const BuyItem = () => {
  const { Mid } = useParams();
  const [Medicine, setMedicine] = useState({});
  const [Quantity, setQuantity] = useState(0);
  const [Price, setPrice] = useState(0);
  const date = new Date(Medicine.expDate).toLocaleDateString();

  useEffect(() => {
    findMedicine();
  }, []);

  useEffect(() => {
    funprice();
  }, [Quantity, Medicine]);

  const findMedicine = async() => {
    try {
      const res = await Axios(`https://localhost:7258/api/Medicines/${Mid}`);
      setMedicine(res.data);
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  }

  const increase = () => {
    setQuantity(Quantity + 1);
  }

  const decrease = () => {
    if (Quantity > 0) {
      setQuantity(Quantity - 1);
    }
  }

  const funprice = () => { 
    setPrice(Quantity * Medicine.price);
  }

  return (
    <div className="Cart m-4 d-flex justify-content-center align-items-center">
      <div className="bg-white rounded-3 d-flex flex-wrap m-5 gap-5" style={{width:"75rem"}}>
        <div className="m-3 py2">
          <img src={Medicine.imageUrl} alt={Medicine.name} style={{ height: "25rem" }} />
        </div>
        <div className="w-50 d-flex flex-column p-5 bg-info">
          <h2>{Medicine.name}</h2>
          <h6>Price : {Medicine.price}</h6>
          <h6>Exp Date : {date}</h6>
          <div className="d-flex justify-content-around align-items-center gap-2 mt-2" style={{width:"10rem"}}>
            <button className="btn" onClick={decrease}><CiCircleMinus className="text-danger" style={{height:"3rem",width:"3rem"}}/></button>
            <span className="fs-5">{Quantity}</span>
            <button className="btn" onClick={increase}><CiCirclePlus className="text-success" style={{height:"3rem",width:"3rem"}}/></button>
          </div>
          <h5 className="mt-5">Total Price: {Price}</h5>
        </div>
      </div>
    </div>
  );
}

export default BuyItem;
