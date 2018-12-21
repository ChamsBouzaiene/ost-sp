import createHistory from "history/createBrowserHistory";
import { routerMiddleware, routerReducer, push } from "react-router-redux";
import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "../features/front/auth/reducer";
import thunk from "redux-thunk";

export const history = createHistory();
const middleware = routerMiddleware(history);

const reducers = combineReducers({
  router: routerReducer,
  auth
});

export interface IState {
  router: ReturnType<typeof routerReducer>;
  auth: ReturnType<typeof auth>;
}

type AllActions = any;

//Creating a Redirect to home middleware
const redirectMiddleware = (store: Store) => (next: any) => (action: any) => {
  if (action.type === "LOGIN_SUCCESS" || action.type === "REGISTER_SUCCESS") {
    (store as any).dispatch(push("/"));
  }
  next(action);
};

export const store: Store<IState, AllActions> = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(middleware, thunk, redirectMiddleware))
);
