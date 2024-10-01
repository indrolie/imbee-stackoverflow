import React, { useState } from 'react';
import QuestionsList from './components/questions/questions';

const App = () => {
    const [selectedTag, setSelectedTag] = useState('javascript');
    const tags = ['javascript', 'reactjs', 'vuejs', 'node.js'];  // Example tags

    return (
        <div>
            <h1>StackOverflow Questions</h1>
            <select onChange={(e) => setSelectedTag(e.target.value)} value={selectedTag}>
                {tags.map(tag => (
                    <option key={tag} value={tag}>
                        {tag}
                    </option>
                ))}
            </select>

            <QuestionsList selectedTag={selectedTag} />
        </div>
    );
};

export default App;