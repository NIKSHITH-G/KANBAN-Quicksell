import React from 'react'
import './Card.css';
import myImage from '../assets/profileimg.jpeg';

const Card = ({ id, title, tag, status }) => {
    return (
        <div className="cardContainer" style={{ gap: '5px' }}>
            <div className="cardHeading">
                <span>{id}</span>
                <div className="imageContainer">
                    <img src={myImage} alt="UserImage" />
                    <div className="showStatus"></div>
                </div>
            </div>
            <div className="cardTitle">
                <p>{title}</p>
            </div>
            <br></br>
            <div className="cardTags">
                <div className="tags"> ... </div>
                {
                    tag?.map((elem, index) => {
                        return <div key={index} className="tags"> <span>•</span> {elem}</div>
                    })
                }
            </div>
        </div>
    )
}

export default Card;