import createHistory from 'history/createBrowserHistory'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import { applyMiddleware, combineReducers, createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'


export const history = createHistory()

const middleware = routerMiddleware(history)

const reducers = combineReducers({
    router : routerReducer
})

export interface IState {
    router : ReturnType<typeof routerReducer>
}

type AllActions = any


export const store: Store<IState, AllActions> = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(middleware, thunk))
)



