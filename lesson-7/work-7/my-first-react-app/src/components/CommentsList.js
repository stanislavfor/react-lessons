// src/components/CommentsList.js
import React, { useState, useEffect } from 'react';
import './CommentsList.css';

const CommentsList = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/comments')
            .then(res => res.json())
            .then(data => setComments(data))
            .catch(err => console.error('Ошибка загрузки комментариев:', err));
    }, []);

    const handleAddComment = async () => {
        const trimmed = newComment.trim();
        if (trimmed === '') return;

        const comment = { id: Date.now(), text: trimmed };

        try {
            const response = await fetch('http://localhost:5000/comments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(comment)
            });

            if (response.ok) {
                setComments([...comments, comment]);
                setNewComment('');
            } else {
                console.error('Ошибка при добавлении комментария');
            }
        } catch (err) {
            console.error('Ошибка сети при добавлении комментария:', err);
        }
    };

    const handleDeleteComment = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/comments/${id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                setComments(comments.filter((c) => c.id !== id));
            } else {
                console.error('Ошибка при удалении комментария');
            }
        } catch (err) {
            console.error('Ошибка сети при удалении комментария:', err);
        }
    };

    return (
        <div className="comments-container">
            <h2>Комментарии</h2>

            <div className="comment-input">
                <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Введите комментарий"
                />
                <button onClick={handleAddComment}>Добавить</button>
            </div>

            <ul className="comments-list">
                {comments.map((comment) => (
                    <li key={comment.id} className="comment-item">
                        <span>{comment.text}</span>
                        <button
                            className="icon-button"
                            onClick={() => handleDeleteComment(comment.id)}
                            title="Удалить комментарий"
                        >
                            🗑️
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommentsList;
