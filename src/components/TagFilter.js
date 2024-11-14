import '../App.css';
import '../styles.css';

/*Individual tag component that can be added or removed from overall filter*/
function TagFilter(props) {
    return (
      <div className="tag">
        <label>{props.text}</label>
        <button onClick={() => props.handleDelete(props.tagid)}>X</button>
      </div>
    )
  }

export {TagFilter};