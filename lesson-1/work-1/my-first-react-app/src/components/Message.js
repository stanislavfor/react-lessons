// src/components/Message.js
import React from 'react';

const Message = (props) => {
    return <p className="message-text">{props.text}</p>;
};

export default Message;