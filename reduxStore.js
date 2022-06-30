const INITIAL_STATE = { mood: "(ﾟ∀ﾟ)" };
const moodReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "angry":
      return { ...state, mood: "●︿●" };
    case "happy":
      return { ...state, mood: "^_^" };
    case "sad":
      return { ...state, mood: "⊙︿⊙" };
    case "confused":
      return { ...state, mood: "ↂ_ↂ" };
    default:
      return state;
  }
};
const store = Redux.createStore(moodReducer);
