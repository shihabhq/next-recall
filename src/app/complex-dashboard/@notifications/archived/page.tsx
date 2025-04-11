//if you reload this page, it will show an error as you didn't specify the
//  default.tsx file in each unmatched slots

import Link from "next/link";

const ArchivedNotifications = () => {
  return (
    <div>
      <h1>Archived Notifications</h1>
      <Link href={"/complex-dashboard"}>Default</Link>
    </div>
  );
};

export default ArchivedNotifications;
