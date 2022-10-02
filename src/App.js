import { Fragment } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { publicRoutes } from '~/routes'
import {DefaultLayout,HeaderDefault} from '~/components/Layout'


function App() {
  return (
  <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component

            let Layout = DefaultLayout
          
            if (route.layout) {
              Layout = route.layout
            }else if (route.layout === null) {
              Layout = Fragment
            }else if(route.header){
              Layout = route.header
            }

            return <Route key={index} path={route.path} 
              element={
                <Layout> 
                  <Page />  
                </Layout>}/>// Page trở thành children của layout Nên nó sẽ được đưa vào phần content trong DefaultLayout 
          })}
        </Routes>
      </div>
  </Router>
  );
}

export default App;
