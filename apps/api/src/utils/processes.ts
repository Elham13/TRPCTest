process.on("syntaxError", function (err) {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Syntax Error`);
  process.exit(1);
});

process.on("uncaughtException", function (err) {
  console.log(`Error: ${err.message}`);
  console.log(`StackTrace: ${err.stack}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

process.on("unhandledRejection", (reason: any, promise) => {
  console.log("Unhandled Rejection =>\n", reason.stack || reason);
  console.log(`Error: ${reason.message}`);
  console.log(`Shutting down the server due to Unhandled Rejection`);
  process.exit(1);
});

process.on("doesNotExist", (reason, promise) => {
  console.log("doesNotExist Rejection at:", reason.stack || reason);
  console.log(`Error: ${reason.message}`);
  console.log(`Shutting down the server due to doesNotExist Rejection`);
  process.exit(1);
});

process.on("ServiceUnavailableError", (reason, promise) => {
  console.log("ServiceUnavailableError Rejection at:", reason.stack || reason);
  console.log(`Error: ${reason.message}`);
  console.log(
    `Shutting down the server due to ServiceUnavailableError Rejection`
  );
  process.exit(1);
});

process.on("UnhandledPromiseRejectionWarning", (reason: any) => {
  console.log("[UnhandledPromiseRejectionWarning]:", reason.stack || reason);
});

process.on("exit", (code) => {
  console.log(`About to exit with code: ${code}`);
  process.exit(1);
});
