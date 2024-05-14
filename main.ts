#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";

// Classes For Players And Opponent
class player {
  name: string;
  fuel = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel1 = this.fuel - 25;
    this.fuel = fuel1;
  }
  fuelIncrease() {
    this.fuel = 100;
  }
}
class Opponent {
  name: string;
  fuel = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel1 = this.fuel - 25;
    this.fuel = fuel1;
  }
}

//get Player Name And select Opponent
let playerInput = await inquirer.prompt({
  name: "PlayerName",
  type: "input",
  message: "Please Enter Your Name:",
});
let opponent = await inquirer.prompt({
  name: "SelectOponent",
  type: "list",
  message: "Choose Your Opponent:",
  choices: ["Warrior", "Skeleton", "Zombie", "Assassin"],
});

//Gather Data
let p1 = new player(playerInput.PlayerName);
let o1 = new Opponent(opponent.SelectOponent);

if (opponent.SelectOponent === "Warrior") {
  console.log(`${chalk.bold.green(p1.name)} Vs ${chalk.bold.red(o1.name)}  `);
} else if (opponent.SelectOponent === "Skeleton") {
  console.log(`${chalk.bold.green(p1.name)} Vs ${chalk.bold.red(o1.name)}  `);
} else if (opponent.SelectOponent === "Zombie") {
  console.log(`${chalk.bold.green(p1.name)} Vs ${chalk.bold.red(o1.name)}  `);
} else if (opponent.SelectOponent === "Assassin") {
  console.log(`${chalk.bold.green(p1.name)} Vs ${chalk.bold.red(o1.name)}  `);
}

do {
  // Warrior
  if (opponent.SelectOponent === "Warrior") {
    let ask = await inquirer.prompt({
      name: "opt",
      type: "list",
      message: "Choose Your Opponent:",
      choices: ["Attack", "Drink Portion", "Run For Your Life..."],
    });
    if (ask.opt === "Attack") {
      let num = Math.floor(Math.random() * 2);

      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.bold.red(`${p1.name} Fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} Fuel is ${o1.fuel}`));
        if (p1.fuel <= 0) {
          console.log(
            chalk.bold.italic.red("you loose, Better Luck Next Time!!")
          );
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.bold.green(`${p1.name} Fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} Fuel is ${o1.fuel}`));
      }
      if (o1.fuel <= 0) {
        console.log(chalk.green.italic.green.bold("You Win!!"));
        process.exit();
      }
    }
    if (ask.opt === "Drink Portion") {
      p1.fuelIncrease();
      console.log(
        chalk.bold.italic.green(
          `You Drink Health Portion Your Fuel is ${p1.fuel}`
        )
      );
    }
    if (ask.opt === "Run For Your Life...") {
      console.log(chalk.bold.italic.red("you loose, Better Luck Next Time!!"));
      process.exit();
    }
  }

  // Skeleton
  if (opponent.SelectOponent === "Skeleton") {
    let ask = await inquirer.prompt({
      name: "opt",
      type: "list",
      message: "Choose Your Opponent:",
      choices: ["Attack", "Drink Portion", "Run For Your Life..."],
    });
    if (ask.opt === "Attack") {
      let num = Math.floor(Math.random() * 2);

      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.bold.red(`${p1.name} Fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} Fuel is ${o1.fuel}`));
        if (p1.fuel <= 0) {
          console.log(
            chalk.bold.italic.red("you loose, Better Luck Next Time!!")
          );
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.bold.green(`${p1.name} Fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} Fuel is ${o1.fuel}`));
      }
      if (o1.fuel <= 0) {
        console.log(chalk.green.italic.green.bold("You Win!!"));
        process.exit();
      }
    }
    if (ask.opt === "Drink Portion") {
      p1.fuelIncrease();
      console.log(
        chalk.bold.italic.green(
          `You Drink Health Portion Your Fuel is ${p1.fuel}`
        )
      );
    }
    if (ask.opt === "Run For Your Life...") {
      console.log(chalk.bold.italic.red("you loose, Better Luck Next Time!!"));
      process.exit();
    }
  }

  // Zombie
  if (opponent.SelectOponent === "Zombie") {
    let ask = await inquirer.prompt({
      name: "opt",
      type: "list",
      message: "Choose Your Opponent:",
      choices: ["Attack", "Drink Portion", "Run For Your Life..."],
    });
    if (ask.opt === "Attack") {
      let num = Math.floor(Math.random() * 2);

      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.bold.red(`${p1.name} Fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} Fuel is ${o1.fuel}`));
        if (p1.fuel <= 0) {
          console.log(
            chalk.bold.italic.red("you loose, Better Luck Next Time!!")
          );
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.bold.green(`${p1.name} Fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} Fuel is ${o1.fuel}`));
      }
      if (o1.fuel <= 0) {
        console.log(chalk.green.italic.green.bold("You Win!!"));
        process.exit();
      }
    }
    if (ask.opt === "Drink Portion") {
      p1.fuelIncrease();
      console.log(
        chalk.bold.italic.green(
          `You Drink Health Portion Your Fuel is ${p1.fuel}`
        )
      );
    }
    if (ask.opt === "Run For Your Life...") {
      console.log(chalk.bold.italic.red("you loose, Better Luck Next Time!!"));
      process.exit();
    }
  }

  // Assassin
  if (opponent.SelectOponent === "Assassin") {
    let ask = await inquirer.prompt({
      name: "opt",
      type: "list",
      message: "Choose Your Opponent:",
      choices: ["Attack", "Drink Portion", "Run For Your Life..."],
    });
    if (ask.opt === "Attack") {
      let num = Math.floor(Math.random() * 2);

      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.bold.red(`${p1.name} Fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} Fuel is ${o1.fuel}`));
        if (p1.fuel <= 0) {
          console.log(
            chalk.bold.italic.red("you loose, Better Luck Next Time!!")
          );
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.bold.green(`${p1.name} Fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} Fuel is ${o1.fuel}`));
      }
      if (o1.fuel <= 0) {
        console.log(chalk.green.italic.green.bold("You Win!!"));
        process.exit();
      }
    }
    if (ask.opt === "Drink Portion") {
      p1.fuelIncrease();
      console.log(
        chalk.bold.italic.green(
          `You Drink Health Portion Your Fuel is ${p1.fuel}`
        )
      );
    }
    if (ask.opt === "Run For Your Life...") {
      console.log(chalk.bold.italic.red("you loose, Better Luck Next Time!!"));
      process.exit();
    }
  }
} while (true);
