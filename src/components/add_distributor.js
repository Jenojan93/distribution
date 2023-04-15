import React, { useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
function Add_distributor() {
    const [render, setRender] = useState(false);

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


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.dis_ID || !input.name || !input.email || !input.contact_no || !input.address || !input.medicine || !input.payments || !input.ammount) {
            alert("Please fill in all fields");
            return;
        }

        if (input.payments === "paied" && input.ammount <= 0) {
            alert("Please enter a valid ammount");
            return;
        }

        await axios.post("http://localhost:9000/api/v1/distributors", input);
        setRender(true)
        setInput({
            dis_ID: "",
            name: "",
            email: "",
            contact_no: "",
            address: "",
            medicine: "",
            payments: "",
            ammount:""

        })

    };


    const handleInputChange = event => {
        const { name, value } = event.target;
        setInput(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };


    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <h4><b>Personel Details</b></h4><br></br>
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
                    <input class="form-check-input "
                        type="radio"
                        name="payments"
                        value="paied"
                        checked={input.payments === 'paied'}
                        onChange={handleInputChange}
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                    <b>paid</b>
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
                        <b>unpaid</b>
                    </label>
                </div>

                <div class="my-3">
  <button type="submit" class="btn btn-primary me-5">Submit</button>
  <Link to={"/"}><button className='btn btn-warning'>Cancel</button></Link>
</div>








            </form>
        </div>
    )
}

export default Add_distributor