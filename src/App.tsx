
import './App.css';

import Header from './components/Header/Header';
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import { createContext, useReducer } from 'react';


export interface ISpecification{
  batteryLevel:string;
  cameraPixel:string;
  processorType:string;
}
export interface IProduct{
  id: number;
  name: string;
  brand: string;
  description: string;
  specification: ISpecification;
}

export interface IAppState{
  products: IProduct[];
}

const initialState:IAppState = {
  products: [{id:1, name: "Iphone", brand: "Apple", description: "New one from apple", specification:{batteryLevel:"5000mAh", cameraPixel:"50mp", processorType:"medikTec"} },
  {id:2, name: "oneplus", brand: "oneplus", description: "Latest mobile from one plus", specification:{batteryLevel:"5000mAh", cameraPixel:"50mp", processorType:"AMD"}}
]
}

const reducer = (state:IAppState, action:any) => {
  return state;
}

export const AppContext = createContext({
  state: initialState,
  dispatch: (data : any) => {}
})

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <AppContext.Provider value={{state,dispatch}}>
      <div className="App">
        <Header/>
        <Body/>
        <Footer/>
        </div>
      </AppContext.Provider>
   
  );
}

export default App;
