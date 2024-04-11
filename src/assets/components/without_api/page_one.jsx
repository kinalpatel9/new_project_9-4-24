import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';

export default function Page_one() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [items, setItems] = useState([]); //state to store data in table
    const [editedItem, setEditedItem] = useState("-1");
    const [editedName, setEditedName] = useState("");
    const [editedDescription, setEditedDescription] = useState("");
    const handleNameChange = (value) => {
        setName(value);
        console.log(value);
    }
    const handleDescriptionChange = (value) => {
        setDescription(value);
        console.log(value);
    }
    const handleOnAdd = () => {
        setName(""); // to clear input feild
        setDescription(""); // to clear input feild
        setItems([...items, { name: name, description: description }]) // new item object
        // console.log(abc);
    }
    const handleOnDelete = (index) => {
        const deletedItems = [...items];
        deletedItems.splice(index, 1);
        setItems(deletedItems);
        console.log(index);
    }
    const handleOnEdit = (index) => {
        const editedinput = items[index];
        setEditedItem(index);
        setEditedName(editedinput.name);
        setEditedDescription(editedinput.description);
        console.log(index, "abc");
    }
    const handleOnSave = (index) => {
        const editedItems = {
            name: editedName,
            description: editedDescription,
        };
        const updatedEditedList = [...items];
              updatedEditedList[index] = editedItems;
              setItems(updatedEditedList);
              setEditedItem(-1); 
    }
    const handleEditCancel = () => {
        setEditedItem("-1")
    }
    const handleEditedNameChange = (value) => {
        setEditedName(value);
        console.log(value);
    }
    const handleEditedDescriptionChange = (value) => {
        setEditedDescription(value);
        console.log(value);
    }
    return (
        <>

            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="name" value={name} onChange={(e) => handleNameChange(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Description" value={description} onChange={(e) => handleDescriptionChange(e.target.value)} />
                </Form.Group>
                <Button variant="secondary" className='me-2' onClick={() => handleOnAdd()}>Add</Button>
                <Button variant="info" onClick={() => navigate(-1)}>Back</Button>
            </Form>
            <Table striped bordered hover className='mt-3'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            {editedItem === index ?
                                <>
                                    <td>
                                        <InputGroup >
                                            <Form.Control placeholder="name" aria-label="name" value={editedName} onChange={(e) => handleEditedNameChange(e.target.value)} />
                                        </InputGroup>
                                    </td>
                                    <td>
                                        <InputGroup >
                                            <Form.Control placeholder="description" aria-label="description" value={editedDescription} onChange={(e) => handleEditedDescriptionChange(e.target.value)} />
                                        </InputGroup>
                                    </td>
                                    <td>
                                        <Button variant="success" className='me-2'onClick={() => handleOnSave(index)}>Save</Button>
                                        <Button variant="success" className='me-2' onClick={() => handleEditCancel()}>Cancel</Button>
                                    </td>
                                </>
                                :
                                <>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td>
                                        <Button variant="warning" className='me-2' onClick={() => handleOnEdit(index)}>Edit</Button>
                                        <Button variant="danger" onClick={() => handleOnDelete(index)}>Delete</Button>
                                    </td>
                                </>

                            }

                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}