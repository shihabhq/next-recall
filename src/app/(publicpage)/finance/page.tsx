

export const metadata = {
  title: "finance", //this will override the default title in the layout
  description:'finance in next'
};

const Finance = () => {
    throw new Error("Error in finance route"); //this will be caught by the error boundary in the layout
  return (
    <div>
      <h1>Finance Route</h1>
    </div>
  );
};

export default Finance;
