const initialState = [
  {
    id: 0,
    name: "Qobiljon Jumaboyev",
    email: "webdev@gmail.com",
    number: 12345,
  },
  {
    id: 1,
    name: "Jamoliddin Shermatov",
    email: "flutterdev@gmail.com",
    number: 54321,
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "UPDATE_CONTACT":
      const upDateState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = upDateState;
      return state;
    case "DELETE_CONTACT":
      const filterUser = state.filter(
        (state) => state.id !== action.payload && state
        );
        state = filterUser;
        console.log(action.payload);
      return state;
    default:
      return state;
  }
};

export default contactReducer;
