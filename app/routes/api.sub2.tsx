import type { Route } from "./+types/api.sub2";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: "api.sub2 loader" };
}

export default function Sub1({ loaderData }: Route.ComponentProps) {
  return <div>api.sub2 component</div>;
}
