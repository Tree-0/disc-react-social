import { useState, useEffect } from 'react';
import '../App.css';
import '../styles.css';
import { TagFilter } from './TagFilter';

/*Encompassing search component that allows adding or removing tags*/
function TagFilterBar() {
    const [tagList, setTagList] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    const handleDelete = (tagid) => {
      setTagList(tagList.filter(tag => tag.tagid !== tagid));
    };
  
    const handleAddTag = () => {
      if (inputValue.trim() !== "") {
        const newTag = {
          tagid: Date.now(),
          text: inputValue.trim()
        };
        setTagList([...tagList, newTag]);
        setInputValue('');
      }
    };
  
    useEffect(() => {
      console.log(`updated tags: ${tagList.length} tags applied`);
    }, [tagList]);
  
    return (
      <div>
        <div className="dynamictagsmenu">
          <input 
            name="filterInput" 
            type="text" 
            placeholder="Search tags"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleAddTag}>Add Tag</button>
        </div>
        <div className="dynamictagsmenu">
          {tagList.map(tag => (
              <TagFilter 
                key={tag.tagid}
                tagid={tag.tagid}
                text={tag.text} 
                handleDelete={handleDelete}
              />
            ))}
        </div>
      </div>
    );
  }
  
export {TagFilterBar};