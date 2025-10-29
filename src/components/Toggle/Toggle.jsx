import React from "react";
import { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
    // växlar värdet från true till false och tvärtom
  };

  return (
    <div>
      <button onClick={handleClick}>klicka</button>
      {toggle ? <p>Synlig text</p> : null}
    </div>
  );
};

export default Toggle;
