import Link from "next/link";

const F1 = () => {
  return (
    <>
      <h1>Folder 1 page</h1>
      <Link href="/f1/f2" className="hover:underline">
        F2
      </Link>
      <br />
      <Link href="/f3" className="hover:underline">
        F3
      </Link>
    </>
  );
};

export default F1;
