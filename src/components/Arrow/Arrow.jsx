import React from 'react';
import './Arrow.scss';
import { IoIosArrowDown } from 'react-icons/io';

function Arrow(props) {
    return (
        <span className="Arrow">
            <IoIosArrowDown size={50} color={props.color} />
        </span>
    )
}

export default Arrow
