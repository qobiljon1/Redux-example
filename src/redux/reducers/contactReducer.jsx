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
    default:
      return state;
  }
};

export default contactReducer;
