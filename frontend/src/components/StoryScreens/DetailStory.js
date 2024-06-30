import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "../../Css/DetailStory.css";
import Loader from "../GeneralScreens/Loader";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit, FiArrowLeft } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.css";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

const DetailStory = () => {
  const [likeStatus, setLikeStatus] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [activeUser, setActiveUser] = useState({});
  const [story, setStory] = useState({});
  const [storyLikeUser, setStoryLikeUser] = useState([]);
  const [sidebarShowStatus, setSidebarShowStatus] = useState(false);
  const [loading, setLoading] = useState(true);
  const slug = useParams().slug;
  const [storyReadListStatus, setStoryReadListStatus] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getDetailStory = async () => {
      setLoading(true);
      var activeUser = {};
      try {
        const { data } = await axios.get("https://albatross-express-backend-1.onrender.com/auth/private", {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        activeUser = data.user;

        setActiveUser(activeUser);
      } catch (error) {
        setActiveUser({});
      }

      try {
        const { data } = await axios.post(`https://albatross-express-backend-1.onrender.com/story/${slug}`, { activeUser });
        setStory(data.data);
        setLikeStatus(data.likeStatus);
        setLikeCount(data.data.likeCount);
        setStoryLikeUser(data.data.likes);
        setLoading(false);

        const story_id = data.data._id;

        if (activeUser.readList) {
          if (!activeUser.readList.includes(story_id)) {
            setStoryReadListStatus(false);
          } else {
            setStoryReadListStatus(true);
          }
        }
      } catch (error) {
        setStory({});
        navigate("/not-found");
      }
    };
    getDetailStory();
  }, [slug, setLoading]);

  const handleLike = async () => {
    setTimeout(() => {
      setLikeStatus(!likeStatus);
    }, 1500);

    try {
      const { data } = await axios.post(
        `https://albatross-express-backend-1.onrender.com/story/${slug}/like`,
        { activeUser },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );

      setLikeCount(data.data.likeCount);
      setStoryLikeUser(data.data.likes);
    } catch (error) {
      setStory({});
      localStorage.removeItem("authToken");
      navigate("/");
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Do you want to delete this post")) {
      try {
        await axios.delete(`https://albatross-express-backend-1.onrender.com/story/${slug}/delete`, {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const editDate = (createdAt) => {
    const d = new Date(createdAt);
    var datestring =
      d.toLocaleString("eng", { month: "long" }).substring(0, 3) +
      " " +
      d.getDate();
    return datestring;
  };

  const addStoryToReadList = async () => {
    try {
      const { data } = await axios.post(
        `https://albatross-express-backend-1.onrender.com/user/${slug}/addStoryToReadList`,
        { activeUser },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );

      setStoryReadListStatus(data.status);

      document.getElementById("readListLength").textContent =
        data.user.readListLength;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="Inclusive-detailStory-page">
            <div className="top_detail_wrapper">
              <div className="story-general-info">
                <ul>
                  {story.author && (
                    <Link to={"/"}>
                      <FontAwesomeIcon
                        icon={faArrowAltCircleLeft}
                        style={{ fontSize: "2rem", color: "black" }}
                      />
                    </Link>
                  )}
                </ul>

                {!activeUser.username && (
                  <div className="comment-info-wrap">
                  </div>
                )}

                {activeUser &&
                story.author &&
                story.author._id === activeUser._id ? (
                  <div className="top_story_transactions">
                    <Link
                      className="editStoryLink"
                      to={`/story/${story.slug}/edit`}
                    >
                      <FiEdit />
                    </Link>
                    <span className="deleteStoryLink" onClick={handleDelete}>
                      <RiDeleteBin6Line />
                    </span>
                  </div>
                ) : null}
              </div>
            </div>

            <Row>
              <Col md="6">
                <img
                  src={`${story.imageUrl}`}
                  alt={story.title}
                  style={{ width: "100%", marginTop: "20px", height: "80%" }}
                />
              </Col>
              <Col style={{ marginTop: "20px" }}>
                <p style={{fontSize: '1.4rem', fontWeight: '700'}}>
                  The package <font style={{fontFamily: 'Gaqire', fontWeight: '900'}}>{story.title}</font> has been recorded and should be
                  expected in {story.time}. The shipping address for package{" "}
                  <font style={{fontFamily: 'Gaqire', fontWeight: '900'}}>{story.title}</font> is {story.address}, and would be signed for by{" "}
                  {story.content}. <br />
                  Upon delivery, the package will require a signature from the
                  recipient. The proof of delivery with the recipient's name and
                  signature will be available on our tracking portal. In
                  case of any delivery issues or exceptions, you will receive
                  timely notifications. For further assistance, please contact
                  our customer service.<br /> <p style={{padding: '30px', fontFamily: 'Gaqire', fontSize: '1.6rem', fontWeight: '900'}}>Current Status: {story.status}</p>
                </p>
              </Col>
            </Row>
          </div>
        </>
      )}
    </>
  );
};

export default DetailStory;

const Styles = styled.div``;