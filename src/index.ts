import { Elysia } from "elysia";

const app = new Elysia().get("/bun", () => "Hello Elysia seokho dd ss").listen(4000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
