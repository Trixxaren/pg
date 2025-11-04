import React from "react";
import { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
    // växlar värdet från true till false och tvärtom

    if (!toggle) {
      console.log("Texten syns!");
    } else {
      console.log("Texten syns inte!");
    }
  };

  return (
    <div>
      <button onClick={handleClick}>klicka</button>
      {toggle ? <p>Synlig text</p> : console.log("console: XXX")}
    </div>
  );
};

export default Toggle;
