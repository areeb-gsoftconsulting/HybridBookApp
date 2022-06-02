import React, { Suspense } from "react";
import App from "./App";
import { Provider } from 'react-redux'
import { store } from './redux/store/store'
import './config/Languages/i18next'
import 'react-native-gesture-handler'
import { ActivityIndicator } from "react-native-paper";



const Loading = () => {
    return <ActivityIndicator />
}
const EnteryPoint = () => {

    return (
        <Suspense fallback={<Loading />}>
            <Provider store={store}>
                <App />
            </Provider>
        </Suspense>

    )
}

export default EnteryPoint