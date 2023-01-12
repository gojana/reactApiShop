import { SunIcon } from '../icons/icons';
import { MoonIcon } from '../icons/icons';

const html = document.getElementById('html');

const setDay = () => {
  if (html.getAttribute('data-theme') === 'claro') {
    html.setAttribute('data-theme', 'darkForest');
  } else {
    html.setAttribute('data-theme', 'claro');
  }
};

const DayNightButton = () => {
  return (
    <div className="btn btn-ghost btn-circle xl:mr-1 lg:mr-1 md:mr-1 sm:mr-5 ">
      <label className="swap swap-rotate">
        <input type="checkbox" id="dayNight" onClick={setDay} />
        <SunIcon />

        <MoonIcon />
      </label>
    </div>
  );
};

export default DayNightButton;
