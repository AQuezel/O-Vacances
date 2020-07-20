import {
  UPDATE_SUGGESTION_FIELD,
  ADD_SUGGESTION,
  SAVE_TRIPS,
  SAVE_TRIP,
  CLEAR_SUGGESTION_FIELD,
  SAVE_SUGGESTIONS,
} from 'src/actions/trip';

const initialState = {
  // ici l'état initial
  trips: [],
  trip: [],
  suggestionDescription: '',
  suggestionTitle: '',
  isLoading: true,
  isCreator: false,
  isOwnUser: false,
  tripPassword: '',
};

const trip = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_SUGGESTION_FIELD:
      return {
        ...state,
        [action.name]: action.newValue,
      };

    case ADD_SUGGESTION:
      return {
        ...state,
        suggestionContent: '',
      };

    case SAVE_TRIPS:
      return {
        ...state,
        trips: action.trips,
        isLoading: false,
      };

    case SAVE_TRIP:
      return {
        ...state,
        trip: action.trip,
        isLoading: false,
        isCreator: action.isCreator,
        tripPassword: action.trip.password,
      };

    case CLEAR_SUGGESTION_FIELD:
      return {
        ...state,
        suggestionTitle: '',
        suggestionDescription: '',
      };

    case SAVE_SUGGESTIONS:
      console.log(action);
      return {
        ...state,
        trip: {
          ...state,
          suggestion: action.suggestion,
        },
      };

    default: return state;
  }
};

export default trip;
