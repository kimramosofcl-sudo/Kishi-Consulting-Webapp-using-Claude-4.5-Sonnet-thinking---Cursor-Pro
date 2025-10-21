export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bgLight">
      <div className="text-center">
        <div className="inline-block w-16 h-16 border-4 border-primary border-t-secondary rounded-full animate-spin"></div>
        <p className="mt-4 text-textLight">Loading...</p>
      </div>
    </div>
  );
}

