import React from "react";


function App() {

  const [open, setOpen] = React.useState(false);

  return (
    <div className="App">

        <button className="App__button " onClick={() => setOpen(true)}> Открыть окно </button>

        <div className={`App__overlay ${open ? 'App__show' : ''}`}>
            <div className="App__model ">
                <svg className="App__model-svg" onClick={() => setOpen(false)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M20 20L4 4m16 0L4 20"/></svg>
                <img className="App__model-img" src="https://tacon.ru/wp-content/uploads/b/3/d/b3dd3869820c53a9499ef883b8603e97.gif" alt="gif"></img>
            </div>
        </div>
    </div>
  );
}

export default App;
