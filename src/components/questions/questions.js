import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { mapState, mapDispatch } from './questions.controller'
import '../../App.css';

import UserProfile from '../user_profile/user_profile'

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
                            <div className="question-content">
                                <div className="left-section">
                                    <div className="question-title">
                                        <h2> {question.title} </h2>
                                    </div>
                                    <div className="question-stats">
                                        <div className="score">
                                            {/* Highlight score when it's below zero */}
                                            <span className='item-name' style={{ color: question.score < 0 ? 'red' : 'black' }}>Score</span>
                                            <span className="item-value" style={{ color: question.score < 0 ? 'red' : 'black' }}>{question.score}</span>
                                        </div>
                                        <div className="answers">
                                            {/* Highlight answers based on conditions */}
                                            <span className='item-name'>Answers</span>
                                            <span className={`item-value ${question.answer_count > 1 && !question.is_answered ? 'highlight-border' : ''} ${question.answer_count > 1 && question.is_answered ? 'highlight' : ''}`}>
                                                {question.answer_count}
                                            </span>
                                        </div>
                                        <div className="views">
                                            <span className='item-name'>Viewed</span>
                                            <span className="item-value">{question.view_count}</span>
                                        </div>
                                    </div>
                                </div>
                                    
                                <div className="right-section">
                                    <UserProfile user={question.owner} />
                                </div>
                            </div>
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