import axios from "axios";
import generateUniqueId from "generate-unique-id";

export const GetContact = (data) => {

    return{
        type: "GETCONTACT",
        payload: data
    }

}

export const UpdateContact = (data) => {

    return{
        type: "UPDATECONTACT",
        payload: data
    }

}

export const DeleteContact = (id) => {

    return{
        type: "DELETECONTACT",
        payload: id
    }

}

export const GetData = () => {

    return dispatch => {

        axios.get('http://localhost:3000/Contact').then((res) => {
            console.log("Datas : ",res.data);
            dispatch(GetContact(res.data));
        }).catch((err) => {
            console.log("ERR : ", err);
        })

    }

}

export const PostData = (data) => {

    return async dispatch => {

        try{
            if(data.avatarFile){
                const avatarUrl = await uploadImage(data.avatarFile);
                data.avatar = avatarUrl;
            }
            data.id = generateUniqueId({
                length: 4,
                useLetters: false,
            });
    
        
        
        await axios.post('http://localhost:3000/Contact', data);
            console.log("Data : ",data);
            dispatch(GetData());
        } catch(err) {
            console.log("ERR : ", err);
        }

    }

}

export const SingleRecordData = (id) => {

    return dispatch => {

        axios.get(`http://localhost:3000/Contact/${id}`).then((res) => {
            console.log("Data : ",res.data);
            dispatch(UpdateContact(res.data));
        }).catch((err) => {
            console.log("ERR : ", err);
        })

    }

}

export const UpdatedData = (data) => {

    return dispatch => {

        axios.put(`http://localhost:3000/Contact/${data.id}`, data).then((res) => {
            console.log("Data : ",res.data);
            dispatch(GetData());
        }).catch((err) => {
            console.log("ERR : ", err);
        })

    }

}

export const  DeleteData = (id) => {

    return dispatch => {

        axios.delete(`http://localhost:3000/Contact/${id}`).then((res) => {
            console.log("Data : ",res.data);
            dispatch(DeleteContact(res.data));
            dispatch(GetData());
        }).catch((err) => {
            console.log("ERR : ", err);
        })

    }

}








