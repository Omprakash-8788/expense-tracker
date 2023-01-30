export const addExpense = (data) => {
  return {
    type: "ADD_EXPENSE",
    payload: {
      expenseId: new Date().getTime().toString(),
      expenseData: data,
    },
  };
};

export const addAmount = (amount) => {
  return {
    type: "ADD_AMOUNT",
    payload: {
      amountId: new Date().getTime().toString(),
      amountData: amount,
    },
  };
};

export const addEducation = (education) => {
  return {
    type: "ADD_EDUCATION",
    payload: {
      educationId: new Date().getTime().toString(),
      educationData: education,
    },
  };
};
