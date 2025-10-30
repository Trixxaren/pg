import React from "react";
import { useState } from "react";

const Show = () => {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => setToggle(!toggle); // växlar mellan true/false i början är den trudy (true)

  return (
    <div>
      <button onClick={handleClick}>Klicka på mig</button>
      {toggle ? (
        <div
          style={{
            backgroundColor: "green",
          }}
        >
          <p
            style={{
              color: "white",
            }}
          >
            jag syns{" "}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Show;
