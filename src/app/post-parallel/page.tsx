// app/laout.tsx

const RootLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <html>
      <body>
        <h1>hi</h1>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
