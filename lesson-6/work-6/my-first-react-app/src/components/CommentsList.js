// src/components/CommentsList.js
import React, { useState } from 'react';
import './CommentsList.css'; // Подключение стилей, если нужно

const CommentsList = () => {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);

    const handleDelete = (id) => {
        const updatedComments = comments.filter(comment => comment.id !== id);
        setComments(updatedComments);
    };

    return (
        <div className="comments-container">
            <h2>Список комментариев</h2>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id} className="comment-item">
                        {comment.text}
                        <button onClick={() => handleDelete(comment.id)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommentsList;