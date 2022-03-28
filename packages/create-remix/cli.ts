import { cli } from "@remix-run/dev";

cli
  .run(["create", ...process.argv.slice(2)])
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
