import helloWorld from "~/defer/helloWorld.server";

export async function loader() {
  await helloWorld();
  return new Response("OK.", {
    status: 200,
  });
}
