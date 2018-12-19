import createHistory from 'history/createBrowserHistory'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import { applyMiddleware, combineReducers, createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import auth  from "../features/front/auth/reducer"
import thunk from 'redux-thunk'


export const history = createHistory()

const middleware = routerMiddleware(history)

const reducers = combineReducers({
    router : routerReducer,
    auth
})

export interface IState {
    router : ReturnType<typeof routerReducer>
    auth : ReturnType<typeof auth>
}

type AllActions = any


export const store: Store<IState, AllActions> = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(middleware, thunk))
)



