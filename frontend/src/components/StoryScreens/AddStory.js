import React, { useRef, useContext } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../Context/AuthContext";
import { AiOutlineUpload } from 'react-icons/ai';
import { FiArrowLeft } from 'react-icons/fi';
import '../../Css/AddStory.css';
import { Row, Col } from 'react-bootstrap';

const AddStory = () => {
    const { config } = useContext(AuthContext);
    const imageEl = useRef(null);
    const editorEl = useRef(null);
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [address, setAddress] = useState('');
    const [status, setStatus] = useState('');
    const [time, setTime] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };


    const clearInputs = () => {
        setTitle('');
        setContent('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("title", title);
        formdata.append('my_file', file);
        formdata.append("address", address);
        formdata.append("time", time);
        formdata.append("status", status);
        formdata.append("content", content);

        try {
            // Adding Content-Type as multipart/form-data
            const customConfig = {
                ...config,
                headers: {
                    ...config.headers,
                    'Content-Type': 'multipart/form-data'
                }
            };

            const { data } = await axios.post("https://albatross-express-backend-1.onrender.com/story/addstory", formdata, customConfig);
            setSuccess('Add story successfully');

            clearInputs();
            setTimeout(() => {
                setSuccess('');
            }, 7000);
        } catch (error) {
            setTimeout(() => {
                setError('');
            }, 7000);
            setError(error.response?.data?.error || 'An error occurred');
        }
    };

    return (
        <div className="Inclusive-addStory-page ">
            <Link to={'/'} >
                <FiArrowLeft />
            </Link>
            <form onSubmit={handleSubmit} className="addStory-form">
                {error && <div className="error_msg">{error}</div>}
                {success && <div className="success_msg">
                    <span>{success}</span>
                    <Link to="/">Go home</Link>
                </div>}
                <Row>
                    <Col md="6">
                        <input
                            className="inp"
                            type="text"
                            id="title"
                            required
                            placeholder="Tracking ID (10 Characters)"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            autoFocus={true}
                        />
                        <input
                            className="inp"
                            type="text"
                            required
                            id="address"
                            placeholder="Receiver's address"
                            onChange={(e) => setAddress(e.target.value)}
                            value={address}
                        />
                        <input
                            className="inp"
                            type="text"
                            required
                            id="time"
                            placeholder="When will it be received (Example: 3 days)"
                            onChange={(e) => setTime(e.target.value)}
                            value={time}
                        />
                    </Col>
                    <Col md="6">
                        <input
                            className="inp"
                            type="text"
                            id="content"
                            placeholder="Receiver's Name"
                            onChange={(e) => setContent(e.target.value)}
                            value={content}
                        />
                        <select
                            className="inp"
                            required
                            id="status"
                            onChange={(e) => setStatus(e.target.value)}
                            value={status}
                        >
                            <option value="" disabled>Select Package Status</option>
                            <option value="transit">On Transit</option>
                            <option value="delivered">Delivered</option>
                            <option value="delayed">Delayed</option>
                            <option value="denied">Denied</option>
                        </select> 
                    </Col>
                </Row>
                <div className="StoryImageField">
                    <AiOutlineUpload />
                    <div className="txt">
                        {file ? file.name : "Include a high-quality image to make it more inviting to readers."}
                    </div>
                    <input
                        name="image"
                        type="file"
                        ref={imageEl}
                        onChange={handleFileChange} 
                    />
                </div>
                <button type='submit' disabled={!file} className={file ? 'addStory-btn' : 'dis-btn'}>
                    Publish 
                </button>
            </form>
        </div>
    );
};

export default AddStory;
