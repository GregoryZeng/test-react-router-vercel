export async function loader() {
  throw new Response("Not Found", { status: 404 });
}
export function ErrorBoundary() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>404</h1>
      <p>Page not found.</p>
    </div>
  );
}