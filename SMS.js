import * as redux from "https://cdn.skypack.dev/redux@4.2.0";

console.clear();

const createPolicy = (name, amount) => {
  return {
    type: "CREATE_POLICY",
    payload: {
      name,
      amount,
    },
  };
};

const deletePolicy = (name) => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name,
    },
  };
};

const createClaim = (name, aomtc) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name,
      amotc,
    },
  };
};

const claimsHistory = (olsClaims = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    return [...oldClaims, action.payload];
  }
  return oldClaims;
};

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === "CREATE_POLICY") {
    return bagOfMoney + action.payload.amount;
  }
  return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
  if (action.type === "CREATE_POLICY") {
    return [...listOfPolicies, action.payload.name];
  }
  return listOfPolicies;
};

const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies,
});
const store = createStore(ourDepartments);
