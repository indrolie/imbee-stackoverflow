import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { mapState, mapDispatch } from './questions.controller'
import '../../App.css';

const QuestionsList = ({ questions, isLoading, hasMore, selectedTag, fetchQuestions, searchQuery }) => {
    useEffect(() => {
        fetchQuestions(selectedTag, 1);  
    }, [selectedTag, fetchQuestions]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !isLoading && hasMore) {
                const nextPage = Math.floor(questions.length / 20) + 1;
                fetchQuestions(selectedTag, nextPage);  
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading, hasMore, questions.length, selectedTag, fetchQuestions]);

    const filteredQuestions = questions.filter(question =>
        question.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            {filteredQuestions.length === 0 ? (
                <p>No questions found.</p>
            ) : (
                filteredQuestions.map(question => (
                    <div key={question.question_id} className="question-card">
                        <h2><a href={question.link} target="_blank" rel="noreferrer">{question.title}</a></h2>
                        <p className="score">Score: {question.score}</p>
                        <p className="answers">Answers: {question.answer_count}</p>
                        <p className="viewed">Viewed: {question.view_count}</p>
                        <img className="profile-pic" src={question.owner.profile_image} alt="Profile" />
                    </div>
                ))
            )}
            {isLoading && <p className="loading">Loading...</p>}
            {!hasMore && <p className="loading">No more questions available</p>}
        </div>
    );
};


export default connect(mapState, mapDispatch)(QuestionsList);