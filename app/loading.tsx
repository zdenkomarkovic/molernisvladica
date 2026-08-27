export default function LoadingPage() {
  return (
    <div
      className="flex min-h-[50vh] items-center justify-center"
      aria-label="Učitavanje..."
      role="status"
    >
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-ink/10 border-t-orange" />
    </div>
  );
}
