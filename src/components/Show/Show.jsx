import React from "react";
import { useState } from "react";

const Show = () => {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
    // gör så att den togglar från true till false
  };

  if (!toggle) {
    console.log("ej synlig"); //detta är alltså false {!toggle}
  } else {
    console.log("synlig"); // Detta är alltså true {toggle}
  }

  return (
    <div>
      <button onClick={handleClick}>Klicka</button>
      {toggle ? <p>Synlig text</p> : null}
    </div>
  );
};

export default Show;
