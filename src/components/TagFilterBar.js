import { useState, useEffect } from 'react';
import '../App.css';
import '../styles.css';
import { TagFilter } from './TagFilter';

/*Encompassing search component that allows adding or removing tags*/
function TagFilterBar() {
    const [tagList, setTagList] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    const handleDelete = (key) => {
      setTagList(tagList.filter(tag => tag.key !== key));
    };
  
    const handleAddTag = () => {
      if (inputValue.trim() !== "") {
        const newTag = {
          key: Date.now(), // unique key
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
                key={tag.key} //unique key
                tagKey={tag.key} // pass to props for handleDelet()
                text={tag.text} 
                handleDelete={handleDelete}
              />
            ))}
        </div>
      </div>
    );
  }
  
export {TagFilterBar};