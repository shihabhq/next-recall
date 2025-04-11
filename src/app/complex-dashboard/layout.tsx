//@folder page.tsx components are passed in as props in the parent layout component

const ComplexDashboardComponent = ({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) => {
  const isLoggedIn = true;
  if (isLoggedIn) {
    return (
      <div>
        <div>{children}</div>
        <div className="flex gap-4">
          <div className="w-1/3">{users}</div>
          <div className="w-1/3">{revenue}</div>
          <div className="w-1/3">{notifications}</div>
        </div>
      </div>
    );
  }
  return <div>{login}</div>;
};

export default ComplexDashboardComponent;
