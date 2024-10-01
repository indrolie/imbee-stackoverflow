import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { mapState, mapDispatch } from './questions.controller';

const QuestionsList = ({ questions, isLoading, hasMore, selectedTag, fetchQuestions }) => {
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

    return (
        <div>
            <ul>
                {questions.map(question => (
                    <li key={question.question_id}>
                        <a href={question.link} target="_blank" rel="noreferrer">{question.title}</a>
                        <p>Score: {question.score}</p>
                    </li>
                ))}
            </ul>
            {isLoading && <p>Loading...</p>}
            {!hasMore && <p>No more questions available</p>}
        </div>
    );
};


export default connect(mapState, mapDispatch)(QuestionsList);