import React,{useEffect,useState}from 'react';
import axios from "axios";
import {  Navigate,useParams,useNavigate} from 'react-router-dom';


function Edit_form() {
    const navigate=useNavigate();
    const {id}=useParams();
 
    const [input, setInput] = useState({
            dis_ID: "",
            name: "",
            email: "",
            contact_no: "",
            address: "",
            medicine: "",
            payments: "",
            ammount:""
    });

    useEffect(()=>{
        const getAllData=async()=>{
              const res=await axios.get(`http://localhost:9000/api/v1/distributors/single/${id}`);
              setInput(res.data);
        };
        getAllData();
               },[id])
    
const handleUpdate=async (e) =>{
    e.preventDefault();
    const confirmed = (window.confirm("Are you sure you want to update this distributor?")) 
    if(confirmed){await axios.put(`http://localhost:9000/api/v1/distributors/${id}`, input);
    navigate('/edit');
    }else{
        navigate('/edit');
    }
    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        setInput({ ...input, [name]: value });
      };
    
  return (
    <div className='container'>
    <form onSubmit={handleUpdate}>
        <div className='row'>
            <h4><b>personel Details</b></h4><br></br>
            <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputEmail1" class="form-label">Dis.ID</label>
                <input
                    name="dis_ID"
                    value={input.dis_ID}
                    onChange={handleInputChange}
                    type="number"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                />

            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" class="form-label">Name</label>
                <input
                    name="name"
                    value={input.name}
                    onChange={handleInputChange}
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" class="form-label">email</label>
                <input
                    name="email"
                    value={input.email}
                    onChange={handleInputChange}
                    type="email"
                    class="form-control"
                    id="exampleInputPassword1"
                />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" class="form-label">contact no</label>
                <input
                    name="contact_no"
                    value={input.contact_no}
                    onChange={handleInputChange}
                    type="number"
                    class="form-control"
                    id="exampleInputPassword1"
                />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" class="form-label">address</label>
                <input
                    name="address"
                    value={input.address}
                    onChange={handleInputChange}
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                />
            </div>
            <h4><b>Distribution Details</b></h4><br></br>
            <div>
                <label for="exampleInputPassword1" class="form-label">Order Details</label>
                <textarea
                    name="medicine"
                    value={input.medicine}
                    onChange={handleInputChange}
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                ></textarea>
            </div>

            <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" class="form-label">Ammount</label>
                <input
                    name="ammount"
                    value={input.ammount}
                    onChange={handleInputChange}
                    type="number"
                    class="form-control"
                    id="exampleInputPassword1"
                />
            </div>



        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input"
                type="radio"
                name="payments"
                value="paied"
                checked={input.payments === 'paied'}
                onChange={handleInputChange}
            />
            <label class="form-check-label" for="flexRadioDefault1">
                paied
            </label>
        </div>

        <div class="form-check form-check-inline my-3">
            <input class="form-check-input"
                type="radio"
                name="payments"
                value="unpaid"
                checked={input.payments === 'unpaid'}
                onChange={handleInputChange}
            />

            <label class="form-check-label"
                for="flexRadioDefault2">
                unpaid
            </label>
        </div>

              
                <button type="submit" class="btn  ms-5 btn-primary">Update</button>
                          
               
                        
                       
                       
                
               
            </form>
        </div>
  )
}

export default Edit_form