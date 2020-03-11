import "bootstrap";
import "cocoon";
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { hiddenSearch } from './hidden-search';
import { initMapbox } from '../plugins/init_mapbox';
import { totalSumGoalManager } from './total_sum_goal';
import { dropdownGoal } from './dropdown_goal';
import { toggleDashboardView } from './toggle_goals_achievements';
import { progressbar } from './progressbar';

// import { initAutocomplete } from '../plugins/init_mapbox';


hiddenSearch();
initMapbox();
totalSumGoalManager();
dropdownGoal();
toggleDashboardView();
progressbar();

// initAutocomplete(); #This musnt be commented in if it isnt finished.!!!!!
