import React, { useState, useEffect } from 'react';
import QuestionsList from './components/questions/questions';
import Tags from './components/tags/tag'

const App = () => {
    const [selectedTag, setSelectedTag] = useState('');
    const [tags, setTags] = useState([]);

    const handleTagSelect = (tag) => {
        setSelectedTag(tag);
    };
    
    useEffect(() => {
        if (tags.length > 0 && !selectedTag) {
            setSelectedTag(tags[0].name);
        }
    }, [tags, selectedTag]);

    return (
        <div className="container">
            <h1>StackOverflow Questions</h1>
            <Tags onTagSelect={handleTagSelect} setTags={setTags} />
            <QuestionsList selectedTag={selectedTag} />
        </div>
    );
};

export default App;