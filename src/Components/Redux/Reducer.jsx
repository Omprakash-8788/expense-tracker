const initialData = {
  list: [],
  amount: [],
  education: [],
};

const Reducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      const { expenseId, expenseData } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: expenseId,
            data: expenseData,
          },
        ],
      };
    case "ADD_AMOUNT":
      const { amountId, amountData } = action.payload;
      return {
        ...state,
        amount: [
          ...state.amount,
          {
            id: amountId,
            data: amountData,
          },
        ],
      };
    case "ADD_EDUCATION":
      const { educationId, educationData } = action.payload;
      return {
        ...state,
        education: [
          ...state.education,
          {
            id: educationId,
            data: educationData,
          },
        ],
      };
    default:
      return state;
  }
};

export default Reducer;
