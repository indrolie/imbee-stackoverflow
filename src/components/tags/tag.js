import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { mapState, mapDispatch } from './tag.controller'
import '../../App.css';

const Tags = ({ tags = [], fetchTags, onTagSelect }) => {
    useEffect(() => {
        fetchTags()
    }, [fetchTags]);

    const handleTagClick = (tag) => {
        onTagSelect(tag)
    };

    return (
        <div className="tags">
            {tags.map((tag) => (
                <div key={tag.name} className="tag" onClick={() => handleTagClick(tag.name)}>
                    {tag.name}
                </div>
            ))}
        </div>
    );
};


export default connect(mapState, mapDispatch)(Tags);