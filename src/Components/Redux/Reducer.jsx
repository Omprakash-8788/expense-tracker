const initialData = {
  list: [],
  amount: [],
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
    default:
      return state;
  }
};

export default Reducer;
