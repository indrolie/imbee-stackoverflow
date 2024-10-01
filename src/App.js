import React, { useState } from 'react';
import QuestionsList from './components/questions/questions';
import Tags from './components/tags/tag'

const App = () => {
    const [selectedTag, setSelectedTag] = useState('');
    const handleTagSelect = (tag) => {
        setSelectedTag(tag);
    };
    
    return (
        <div>
            <h1>StackOverflow Questions</h1>
            <Tags onTagSelect={handleTagSelect} />
            <QuestionsList selectedTag={selectedTag}/>
        </div>
    );
};

export default App;