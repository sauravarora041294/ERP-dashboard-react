import React from 'react';
import './card.css';

const Card = (props) => {

    const IconView = (props) => {
        switch (props.status) {
            case "todo":
                return (<i className="icon bellIconYellow"></i>)
            case "inprogress":
                return (<i className="icon bookingIcon"></i>)
            case "finalcheck":
                return (<i className="icon agreementIcon"></i>)
            case "done":
                return (<i className="icon orderedIcon"></i>)
            default:
                return <></>
        }
    }

    const TagView = (props) => {
        let tagList = [];
        (props.tags).forEach((item, index) => {
            if (item === "HEIDENTIC") {
                tagList.push(<span key={index} className="highlightTagRed">
                    <strong>HEIDENTIC</strong>
                </span>)
            } else if (item === "EVENTS") {
                tagList.push(<span key={index} className="highlightTagBlue">
                    <strong>EVENTS</strong>
                </span>)
            }
        })
        return <ul>{tagList}</ul>
    }

    return (
        <React.Fragment>
            <div className="card-col">
                <img className="card-img" alt="" />
                <div className="title-col">
                    <span className="cardTitle">{props.listItem.name}</span>
                    <span className="cardSubtitle">{props.listItem.profession}</span>
                    <div className="icon-col">
                        <span className="cardSubtitle">{props.listItem.company}</span>
                    </div>
                </div>
                <IconView status={props.listItem.taskStatus} />
            </div>
            <div className="card-col">
                <TagView tags={props.listItem.tags} />
            </div>
        </React.Fragment>
    );
};

export default Card;