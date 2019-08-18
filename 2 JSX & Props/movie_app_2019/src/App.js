import React from 'react';
function Food({fav}) {
  return <h4>I like {fav}</h4>;
}
function App() {
  return (
    <div className="App">
      <h1>this is react example</h1>
      <Food fav="kimchi"/>
      <Food fav="pizza"/>
      <Food fav="chicken"/>
      <Food fav="ramen"/>

    </div>
  );
}

export default App;
