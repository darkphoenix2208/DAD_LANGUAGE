#! /usr/bin/env node
import interpreter from "dad-lang-interpreter";
import chalk from "chalk";
import fs from "fs";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

console.info(
  chalk.hex("#83aaff")(`
██████╗░░█████╗░██████╗░░░░░░██╗░░░░░░█████╗░███╗░░██╗░██████╗░
██╔══██╗██╔══██╗██╔══██╗░░░░░██║░░░░░██╔══██╗████╗░██║██╔════╝░
██║░░██║███████║██║░░██║░░░░░██║░░░░░███████║██╔██╗██║██║░░██╗░
██║░░██║██╔══██║██║░░██║░░░░░██║░░░░░██╔══██║██║╚████║██║░░╚██╗
██████╔╝██║░░██║██████╔╝░░░░░███████╗██║░░██║██║░╚███║╚██████╔╝
╚═════╝░╚═╝░░╚═╝╚═════╝░░░░░░╚══════╝╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░
`)
);

const cl = console.log;

console.log = function (...args) {
  const newArgs = args.map((arg) => {
    return `${chalk.hex("#83aaff")(">  ")}${chalk.greenBright(arg)}`;
  });
  cl.apply(console, newArgs);
};

const argv = yargs(hideBin(process.argv))
  .command(
    "<filepath>",
    "Interpret the contents of the specified file and print it to stdout",
    () => { },
    (argv) => {
      console.info(argv);
    }
  )
  .option("mummy", {
    alias: "m",
    type: "boolean",
    description: "Run in Mummy mode (lenient)",
  })
  .demandCommand(1)
  .argv;

const filePath = (argv as any)._[0];

if ((argv as any).mummy) {
  (interpreter as any).setMode("mummy");
}

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  try {
    interpreter.interpret(data);
    console.log(chalk.greenBright("Chalo, kabhi kabhi to dimaag chalta hai."));
  } catch (ex) {
    if (ex instanceof Error) {
      console.error(
        "\n",
        chalk.redBright(
          `Kya faida itna padhane ka? Sab paise barbad! (Error: ${ex.message})`
        )
      );
    }
  }
});
