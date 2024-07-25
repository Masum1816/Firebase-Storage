import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { DeleteData,  GetData, SingleRecordData, UpdateContact } from "../../Services/Actions/ContactAction";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ViewData = ({updateFormData}) => {

    const contacts = useSelector(state => state.contacts);
    const loading = useSelector(state => state.loading);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (id) => {

        dispatch(SingleRecordData(id));
        // navigate(`/UpdateData/${id}`);
        updateFormData(id);

    }

    const handleDelete = (id) => {

        dispatch(DeleteData(id));

    }

    useEffect(() => {

        dispatch(GetData());

    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return(

        <>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>
                    <div>
                        <p className='font text-center mt-2'>ID</p>
                    </div>
                  </th>
                  <th>
                      <div>
                        <p className='font text-center mt-2'>AVATAR</p>
                      </div>
                  </th>
                  <th>
                      <div>
                        <p className='font text-center mt-2'>NAME</p>
                      </div>
                  </th>
                  <th>
                      <div>
                        <p className='font text-center mt-2'>EMAIL</p>
                      </div>
                  </th>
                  <th>
                      <div>
                        <p className='font text-center mt-2'>CONTACT NUMBER</p>
                      </div>
                  </th>
                  <th>
                      <div>
                        <p className='font text-center mt-2'>ADDRESS</p>
                      </div>
                  </th>
                  <th>
                      <div>
                        <p className='font text-center mt-2'>NOTES</p>
                      </div>
                  </th>
                  <th className='font text-center text p-4'>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((data) => (
                  <tr key={data.id}>
                    <td className='text-center'>{data.id}</td>
                    <td className='text-center'>
                      <img src={data.avatar} alt="Avatar" width="25" height="25" />
                    </td>
                    <td className='text-center'>{data.name}</td>
                    <td className='text-center'>{data.email}</td>
                    <td className='text-center'>{data.contactNumber}</td>
                    <td className='text-center'>{data.address}</td>
                    <td className='text-center'>{data.notes}</td>
                    <td className='text-center'>
                      <div className='d-flex justify-content-evenly'>
                        <div>
                          <Button variant="info-subtle" className='ms-1 bg-info-subtle text-info border-info'>
                            <FontAwesomeIcon icon={faPenToSquare} onClick={() => handleUpdate(data.id)} />
                          </Button>
                        </div>
                        <div>
                          <Button variant="danger" className='ms-1 bg-danger-subtle text-danger'>
                            <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(data.id)} />
                          </Button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
        </>

    )

}

export default ViewData;








