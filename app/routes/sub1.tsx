import type { Route } from "./+types/sub1";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: "sub1 loader" };
}

export default function Sub1({ loaderData }: Route.ComponentProps) {
  return <div>sub1 component</div>;
}
