//handles the 404 error

export default function NotFound() {
  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold text-red-500">404 - Page Not Found</h1>
      <p className="text-lg mt-4">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
}
