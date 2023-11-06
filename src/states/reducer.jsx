export const initialState = {
  isModalOpen: false,
  viewItem: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "setIsModalOpen":
      return {
        ...state,
        isModalOpen: action.item,
      };

    case "setViewItem":
      return {
        ...state,
        viewItem: action.item,
      };
    default:
      return state;
  }
};

export default reducer;
