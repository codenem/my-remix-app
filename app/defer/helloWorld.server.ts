import { defer } from "@defer/client";

async function helloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.info(`Hello!`);
      resolve("done");
    }, 5000);
  });
}

export default defer(helloWorld);
