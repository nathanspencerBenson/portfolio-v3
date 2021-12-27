import React from 'react';
import './Arrow.scss';
import { IoIosArrowDown } from 'react-icons/io';

function Arrow(props) {
    return (
        <div className="Arrow__container">
        <span className="Arrow" onClick={() => window.fullpage_api.moveSectionDown()}>
            <IoIosArrowDown size={50} color={props.color} />
        </span>
        </div>
    )
}

export default Arrow
