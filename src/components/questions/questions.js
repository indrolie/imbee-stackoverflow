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
        <div className="question-wrapper">
            {filteredQuestions.length === 0 ? (
                <p className="no-questions">No questions found.</p>
            ) : (
                filteredQuestions.map(question => (
                    <a href={question.link} target="_blank" rel="noreferrer">
                        <div key={question.question_id} className="question-card">
                            <h2>
                                    {question.title}
                            </h2>
                            {/* Highlight score when it's below zero */}
                            <p className="score" style={{ color: question.score < 0 ? 'red' : 'black' }}>
                                Score: {question.score}
                            </p>
                            {/* Highlight answers based on conditions */}
                            <p
                                className={`answers ${question.answer_count > 1 && !question.is_answered ? 'highlight-border' : ''} ${question.answer_count > 1 && question.is_answered ? 'highlight' : ''}`}
                            >
                                Answers: {question.answer_count}
                            </p>
                            <p className="viewed">Viewed: {question.view_count}</p>
                            <img className="profile-pic" src={question.owner.profile_image} alt="Profile" />
                        </div>
                    </a>
                ))
            )}
            {isLoading && <p className="loading">Loading...</p>}
            {!hasMore && <p className="loading">No more questions available</p>}
        </div>
    );
};


export default connect(mapState, mapDispatch)(QuestionsList);