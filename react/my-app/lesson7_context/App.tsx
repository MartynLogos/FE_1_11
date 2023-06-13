import Header from "./components/header/Header";
import './app.scss';
import { useContext, useEffect } from "react";
import { MediaQueryContext } from "./MediaQueryProvider";

function App() {
  const { setMobile } = useContext(MediaQueryContext) as any;

  // console.dir(document.body);
  

  useEffect(() => {
    const width = document.body.clientWidth;

    if (width < 500) {
      setMobile(true)
    } else {
      setMobile(false);
    }
  });

  return (
    <div className="App">
      <Header />
      {/* <Main /> */}
    </div>
  )
}


export default App;
