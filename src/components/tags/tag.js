import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { mapState, mapDispatch } from './tag.controller'
import '../../App.css';

const Tags = ({ tags = [], fetchTags, onTagSelect, setTags, selectedTag, searchQuery, isLoading }) => {
    useEffect(() => {
        fetchTags()
    }, [fetchTags]);

    useEffect(() => {
        setTags(tags)
    }, [tags, setTags]);

    const handleTagClick = (tag) => {
        onTagSelect(tag)
    };

    const filteredTags = tags.filter(tag => 
        tag.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="tags">
            {!isLoading && filteredTags.length === 0 ? (
                <div className='no-tag'>
                    {searchQuery}
                </div>
            ) : (
                filteredTags.map((tag) => (
                    <div
                        key={tag.name}
                        className={`tag ${selectedTag === tag.name ? 'selected' : ''}`}
                        onClick={() => handleTagClick(tag.name)}
                    >
                        {tag.name}
                    </div>
                ))
            )}
        </div>
    );
};


export default connect(mapState, mapDispatch)(Tags);