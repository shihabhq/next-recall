import Link from "next/link";

const Notifications = () => {
  return (
    <div>
      <h1>Notifications</h1>
      <Link className="hover:underline" href={"/complex-dashboard/archived"}>Archived</Link>
    </div>
  );
};

export default Notifications;
