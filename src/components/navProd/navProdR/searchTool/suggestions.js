import { Fragment } from 'react';
const Suggestions = (props) => {
  return (
    <Fragment>
      {props.items.map((suggestion, index) => {
        return (
          <li
            className={` w-full text-center text-white ${
              index === props.suggestionIndex ? 'bg-neutral' : ''
            }`}
            key={suggestion._id}
          
          >
            <button onClick={props.clickEvent}> {suggestion.name}</button>
          </li>
        );
      })}
    </Fragment>
  );
};

export default Suggestions;
