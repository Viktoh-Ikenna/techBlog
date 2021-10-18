import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/App";
import AdminApp from "./adminPage/app";
import reportWebVitals from "./reportWebVitals";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const SubmitPostReducer = (state = {}, action) => {
  switch (action.type) {
    case "body":
      return { ...state, Article: action.payload };
    case "title":
      return { ...state, Title: action.payload };
    case "major":
      return { ...state, category: action.payload };
    case "spec":
      return {
        ...state,
        SpecialSpec: {
          ...state.SpecialSpec,
          [action.payload.name]: action.payload.spec,
        },
      };
    case "image":
      return { ...state, image: action.payload };
    case "date":
        return { ...state, Date: action.payload };
    default:
      return state;
  }
};
const Admin = (state = { hi: "hiii" }, action) => {
  switch (action.type) {
    case "user":
      return { ...action.payload };
    default:
      return state;
  }
};
const posts = (state = [], action) => {
  switch (action.type) {
    case "allPosts":
      return [...action.payload ];
    default:
      return state;
  }
};
const Client=(state = {}, action)=>{
  switch (action.type) {
    case "allPost":
      return {all:[...action.payload],mobile:[...action.payload.filter(e=>e.category==="Mobile")],accessories:[...action.payload.filter(e=>e.category==="Accessories")],laptops:[...action.payload.filter(e=>e.category==="Laptops")]}
    default:
      return state;
  }
}
const Comments=(state = {}, action)=>{
  switch (action.type) {
    case "comment":
      return {...state,message:action.payload}
    case "commenter":
    return {...state,posts:action.payload.post,name:action.payload.name,Email:action.payload.email,Date:action.payload.date}
  case 'null':
    return {}
    default:
      return state;
  }

}
const searching=(state = {}, action)=>{
  switch (action.type) {
    case "search":
      return {message:action.payload}
    default:
      return state;
  }

}
const store = createStore(
  combineReducers({ SubmitPostReducer,Admin,posts,Client,Comments,searching}),
  {},
  applyMiddleware(thunk)
);

// store.subscribe(() => {
//   console.log("hii", store.getState());
// });
ReactDOM.render(
  <Provider store={store}>
    {window.location.pathname.match(/admin/) ? <AdminApp /> : <App />}
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
