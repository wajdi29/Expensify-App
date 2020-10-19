import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import 'react-dates/lib/css/_datepicker.css';
const store = configureStore();
store.dispatch(
  addExpense({ description: "Gas Bill", createdAt: 1000, amount: 50 })
);
store.dispatch(
  addExpense({ description: "Water bill", createdAt: 300, amount: 100 })
);

store.dispatch(addExpense({ description: "Rent", createdAt: 500, amount: 20 }));
const state = store.getState();
const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(VisibleExpenses);
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));
