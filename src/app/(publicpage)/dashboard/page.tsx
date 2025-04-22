"use client";

import { useState } from "react";

const Dashboard = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      I am client componnet {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Dashboard;
