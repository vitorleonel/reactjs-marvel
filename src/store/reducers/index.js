const INITIAL_STATE = {
  heroes: [],
  selectedHero: null,
  pagination: {
    offset: 0,
    limit: 0,
    total: 0,
    count: 0
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "setHeroes":
      return { ...state, heroes: [...state.heroes, ...action.heroes] };
    case "setHero":
      return { ...state, selectedHero: action.hero };
    case "setPagination":
      return { ...state, pagination: action.pagination };
    default:
      return state;
  }
};
