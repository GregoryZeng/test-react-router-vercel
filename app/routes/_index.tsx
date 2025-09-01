import type { Route } from "./+types/_index";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: "Hello from Vercel" };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <div>_index</div>;
}
