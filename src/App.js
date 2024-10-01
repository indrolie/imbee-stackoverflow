import React, { useState, useEffect } from 'react';
import QuestionsList from './components/questions/questions';
import Tags from './components/tags/tag'
import SearchBar from './components/search/search';

const App = () => {
    const [selectedTag, setSelectedTag] = useState('');
    const [tags, setTags] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleTagSelect = (tag) => {
        setSelectedTag(tag);
    };
    
    useEffect(() => {
        if (tags.length > 0 && !selectedTag) {
            setSelectedTag(tags[0].name);
        }
    }, [tags, selectedTag]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="container">
            <div className="static-wrapper">
                <SearchBar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
                <h1>Trending</h1>
                <Tags onTagSelect={handleTagSelect} setTags={setTags} searchQuery={searchQuery}/>
            </div>
            <QuestionsList className="question-list" selectedTag={selectedTag} searchQuery={searchQuery} />
        </div>
    );
};

export default App;