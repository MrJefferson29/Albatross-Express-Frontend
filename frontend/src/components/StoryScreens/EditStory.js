import React, { useEffect, useState, useRef, useContext } from 'react';
import axios from 'axios';
import Loader from '../GeneralScreens/Loader';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { AuthContext } from "../../Context/AuthContext";
import { AiOutlineUpload } from 'react-icons/ai'
import '../../Css/EditStory.css'
import {Row, Col} from 'react-bootstrap'

const EditStory = () => {
    const { config } = useContext(AuthContext)
    const slug = useParams().slug
    const imageEl = useRef(null)
    const [loading, setLoading] = useState(true)
    const [story, setStory] = useState({})
    const [image, setImage] = useState('')
    const [previousImage, setPreviousImage] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [address, setAddress] = useState('')
    const [status, setStatus] = useState('')
    const [time, setTime] = useState('')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    useEffect(() => {

        const getStoryInfo = async () => {
            setLoading(true)
            try {
                const { data } = await axios.get(`https://albatross-express-backend.vercel.app/story/editStory/${slug}`, config)
                setStory(data.data)
                setTitle(data.data.title)
                setContent(data.data.content)
                setAddress(data.data.address)
                setStatus(data.data.status)
                setTime(data.data.time)
                setImage(data.data.image)
                setPreviousImage(data.data.image)
                setLoading(false)
            }
            catch (error) {
                navigate("/")
            }
        }
        getStoryInfo()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formdata = new FormData()
        formdata.append("title", title)
        formdata.append("content", content)
        formdata.append("image", image)
        formdata.append("address", address)
        formdata.append("status",status)
        formdata.append("time", time)
        formdata.append("previousImage", previousImage)

        try {
            const { data } = await axios.put(`https://albatross-express-backend-1.onrender.com/story/${slug}/edit`, formdata, config)

            setSuccess('Edit Story successfully ')

            setTimeout(() => {
                navigate('/')
            }, 2500)

        }
        catch (error) {
            setTimeout(() => {
                setError('')
            }, 4500)
            setError(error.response.data.error)
        }
    }



    return (
        <>
            {
                loading ? <Loader /> : (
                    <div className="Inclusive-editStory-page ">
                        <form onSubmit={handleSubmit} className="editStory-form">

                            {error && <div className="error_msg">{error}</div>}
                            {success && <div className="success_msg">
                                <span>
                                    {success}
                                </span>
                                <Link to="/">Go home</Link>
                            </div>}

                <Row>
          <Col md="6">
            <input
              className="inp"
              type="text"
              id="title"
              required
              placeholder="Tracking ID (10 Chracters)"
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
              <option value="" disabled>
                Select Package Status
              </option>
              <option value="transit">On Transit</option>
              <option value="delivered">Delivered</option>
              <option value="delayed">Delayed</option>
              <option value="denied">Denied</option>
              {/* Add more options as needed */}
            </select> 
          </Col>
        </Row>
                            <div class="currentlyImage">
                                <div class="absolute">
                                    Currently Image
                                </div>
                                <img src={`/storyImages/${previousImage}`} alt="storyImage" />
                            </div>
                            <div class="StoryImageField">
                                <AiOutlineUpload />
                                <div class="txt">

                                    {image === previousImage ? "    Change the image in your story " :
                                        image.name}

                                </div>
                                <input
                                    name="image"
                                    type="file"
                                    ref={imageEl}
                                    onChange={(e) => {
                                        setImage(e.target.files[0])
                                    }}
                                />
                            </div>

                            <button type='submit' className='editStory-btn'
                            >Edit Story </button>
                        </form>

                    </div>
                )
            }
        </>
    )
}

export default EditStory;
