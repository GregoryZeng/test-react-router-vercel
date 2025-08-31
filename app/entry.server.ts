// app/entry.server.tsx
import type { AppLoadContext } from "react-router";
import { handleRequest as rrHandle } from "@vercel/react-router/entry.server";

export async function handleRequest(request: Request, context: AppLoadContext) {
  const res = await rrHandle(request, context);
  res.headers.set("x-rr-root-hit", "1");
  return res;
}