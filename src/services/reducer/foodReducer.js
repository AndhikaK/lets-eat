export const foodReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_SUCCESS":
      return {
        searchInput: action.searchInput,
        loadingState: false,
        error: false,
        foodList: action.payload,
      };

    case "SEARCH_FAILED":
      return {
        searchInput: action.searchInput,
        loadingState: false,
        error: true,
        foodList: {},
      };
    default:
      return state;
  }
};
