import React from "react";

function Hello(){
    const sayHello = () => {
      console.log("hello");
    };
    return (
      <div>
        <h3>This is the hello componenet</h3>
        <button>Say Hello</button>
      </div>
    );
  }

  export default Hello;