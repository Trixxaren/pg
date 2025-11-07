import React, { useEffect, useState } from "react";

const RandomBasic = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?=5")
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]))
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Laddar..</p>;
  if (error) return <p>Fel: {String(error)}</p>;
  if (!user) return null;

  return (
    <div>
      <img src={user.picture.large} alt={`${user.name.first}`} />
      <p>
        {user.name.first} {user.name.last}
      </p>
    </div>
  );
};

export default RandomBasic;
