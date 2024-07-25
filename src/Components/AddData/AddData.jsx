import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { PostData } from "../../Services/Actions/ContactAction";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebaseConfig";
import "./AddData.css";

const AddData = ({ addDataSubmit }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);
    const imageListRef = ref(storage, "images/");

    const handleFileChange = (event) => {
        setImageUpload(event.target.files[0]);
    }

    const [data, setData] = useState({
        avatar: '',
        name: '',
        email: '',
        contactNumber: '',
        address: '',
        notes: ''
    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        setData({ ...data, [name]: value });

    }

    const handleSubmit = async (e) => {

        e.preventDefault();
    
        if(imageUpload){

            const imageRef = ref(storage, `images/${imageUpload.name }`);
            await uploadBytes(imageRef, imageUpload);
            const url = await getDownloadURL(imageRef);
            data.avatar = url;

            dispatch(PostData(data));
        }
        else{
            dispatch(PostData(data));
        }



        setData({
            avatar: '',
            name: '',
            email: '',
            contactNumber: '',
            address: '',
            notes: ''
        })

        addDataSubmit();

        // navigate('/ViewData');
        
        console.log("Data", data);

    }

    useEffect(() => {
        listAll(imageListRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url]);
                })
            })
        })
    }, []);


    return(

        <>
        <div className="container">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6 bg-white mt-5 p-5 card">
                    <h1 className="text-center font-data p-3 mb-5 bg-dark-subtle add-data">Add Data</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <div className="d-flex">
                                <div className="font-awesome me-2">
                                    <Form.Label>Avatar</Form.Label>
                                </div>
                                <div className="w-100 ms-5">
                                    <Form.Control type="file" onChange={handleFileChange} />
                                </div>
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <div className="d-flex">
                                <div className="me-3 font-awesome">
                                    <Form.Label>Name</Form.Label>
                                </div>
                                <div className="w-100 ms-5">
                                    <Form.Control type="text" placeholder="Enter Name" name="name" value={data.name} onChange={handleChange} />
                                </div>
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <div className="d-flex">
                                <div className="me-3 font-awesome">
                                    <Form.Label>Email</Form.Label>
                                </div>
                                <div className="w-100 ms-5">
                                    <Form.Control type="email" placeholder="Enter Email" name="email" value={data.email} onChange={handleChange} />
                                </div>
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <div className="d-flex">
                                <div className="font-awesome">
                                    <Form.Label>Contact Number</Form.Label>
                                </div>
                                <div className="w-100">
                                    <Form.Control type="number" placeholder="Enter Contact Number" name="contactNumber" value={data.contactNumber} onChange={handleChange} />
                                </div>
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <div className="d-flex">
                                <div className="me-3 font-awesome">
                                    <Form.Label>Address</Form.Label>
                                </div>
                                <div className="w-100 ms-4">
                                    <Form.Control type="text" placeholder="Enter Address" name="address" value={data.address} onChange={handleChange} />
                                </div>
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <div className="d-flex">
                                <div className="me-3 font-awesome">
                                    <Form.Label>Notes</Form.Label>
                                </div>
                                <div className="w-100 ms-5">
                                    <Form.Control type="text" placeholder="Enter Notes" name="notes" value={data.notes} onChange={handleChange} />
                                </div>
                            </div>
                        </Form.Group>

                        <div className="m-auto">
                            <button type="submit"> Submit</button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
        </>

    )

}

export default AddData;








