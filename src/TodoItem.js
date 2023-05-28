import { CompleteIcon} from './CompleteIcon'
import { DeleteIcon} from './DeleteIcon'

function TodoItem(props){
    return (
      <li className="TodoItem">
        <CompleteIcon completed={props.completed} OnComplete={props.onComplete} />
        {/*<span 
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        
        >V</span>*/}
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        {/*<span className="Icon Icon-delete" 
          onClick={props.onDelete} 
        >X</span>*/}
        <DeleteIcon onDelete={props.onDelete} />
      </li>
    );
  }

  export {TodoItem};