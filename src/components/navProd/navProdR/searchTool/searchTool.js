import { useSelector, useDispatch } from 'react-redux';
import { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import Suggestions from './suggestions';
import { notificationActions } from '../../../../redux/slices/notification-slice';
import requestAPI from '../../../../helpers/requestCalls';

import { SearchIcon } from '../../../icons/icons';
import { SpinningLoadingIcon } from '../../../icons/icons';

const SearchTool = () => {
  const suggestedProducts = useSelector((state) => state.autoComplete.items);
  const ref = useRef();
  const history = useHistory();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const [suggestions, setSuggestions] = useState([]);
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const [suggestionsActive, setSuggestionsActive] = useState(false);
  const [value, setValue] = useState('');
  const [activeBtnSearch, setActiveBtnSearch] = useState(false);

  const searchRequest = async () => {
    try {
      const url = `products/name/${value}`;
      const response = await requestAPI(url, 'GET');

      if (response.status === 'fail') {
        setIsLoading(false);
        throw new Error('producto no encontrado!');
      }
      if (response === 'error') {
        setIsLoading(false);
        throw new Error('algo salio muy mal!');
      }
      setIsLoading(false);
      history.push(`/products/${response.data.product._id}`);
    } catch (err) {
      setIsLoading(false);
      dispatch(
        notificationActions.showNotification({
          message: err.message,
          type: 'alert-error',
        })
      );
    }
  };

  const onSearchClick = () => {
    searchRequest();
  };

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setValue(query);
    if (query.length > 1) {
      const filterSuggestions = suggestedProducts.filter(
        (item) => item.name.toLowerCase().indexOf(query) > -1
      );
      if (query.length >= 4) {
        setActiveBtnSearch(true);
      } else {
        setActiveBtnSearch(false);
      }
      setSuggestions(filterSuggestions);
      setSuggestionsActive(true);
    } else {
      setSuggestionsActive(false);
    }
  };

  const handleClick = (e) => {
    setValue(e.target.innerText);
    setActiveBtnSearch(true);
    setSuggestions([]);
    setSuggestionsActive(false);
  };

  const handleKeyDown = (e) => {
    // UP ARROW
    if (e.keyCode === 38) {
      if (suggestionIndex === 0) {
        return;
      }
      setSuggestionIndex(suggestionIndex - 1);
    }
    // DOWN ARROW
    else if (e.keyCode === 40) {
      if (suggestionIndex + 1 === suggestions.length) {
        return;
      }
      setSuggestionIndex(suggestionIndex + 1);
    }
    // ENTER
    else if (e.keyCode === 13) {
      setValue(suggestions[suggestionIndex].name);
      setSuggestionIndex(0);
      setSuggestionsActive(false);
    }
  };

  return (
    <div className="p-2">
      <div className="flex justify-center w-full">
        <div className="dropdown dropdown-bottom  w-full" ref={ref}>
          <div className="relative">
            <div className="flex justify-center absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              {isLoading ? <SpinningLoadingIcon /> : <SearchIcon />}
            </div>
            <input
              type="text"
              id="search"
              className="block p-4 pl-10 text-sm text-white bg-neutral rounded-lg  border border-primary xl:w-80 lg:w-80 md:w-80 sm:w-80"
              placeholder="nombre producto"
              value={value}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
            <button
              type="submit"
              className={`btn-primary text-white absolute right-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 ${
                activeBtnSearch ? '' : 'btn-disabled'
              }`}
              onClick={onSearchClick}
            >
              Buscar
            </button>

            <div className="dropdown-content bg-base-200 top-14 max-h-96 overflow-auto flex-col rounded-md">
              <ul
                className="menu menu-compact"
                style={{ width: ref.current?.clientWidth }}
              >
                {suggestionsActive && (
                  <Suggestions
                    items={suggestions}
                    suggestionIndex={suggestionIndex}
                    clickEvent={handleClick}
                  />
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchTool;
