import React from 'react';
import QuestionsList from './components/questions/questions';
import Tags from './components/tags/tag'

const App = () => {
    return (
        <div>
            <h1>StackOverflow Questions</h1>
            <Tags />
            <QuestionsList />
        </div>
    );
};

export default App;