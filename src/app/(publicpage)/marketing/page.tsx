export const metadata = {
  title: "marketing",
};

const Marketing = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("intentional delay");
    }, 2000);
  });
  return (
    <div>
      <h1>Marketing Route</h1>
    </div>
  );
};

export default Marketing;
