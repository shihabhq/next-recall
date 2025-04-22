const RevenueMetrics = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("intentional delay");
    }, 2000);
  });
  return <div>Revenue Metrics</div>;
};

export default RevenueMetrics;
