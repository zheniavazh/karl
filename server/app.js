const express = require("express");
const config = require("config");
const chalk = require("chalk");
const cors = require("cors");
const mongoose = require("mongoose");
const initDatabase = require("./startUp/initDatabase");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api", routes);

const PORT = config.get("port") ?? 8080;

async function start() {
    try {
        mongoose.connection.once("open", () => {
            initDatabase();
        });
        await mongoose.connect(config.get("mongoUri"));
        console.log(chalk.blue.inverse("MongoDB connected"));
        app.listen(PORT, () =>
            console.log(
                chalk.blue.inverse(`Server has been started on port ${PORT}...`)
            )
        );
    } catch (error) {
        console.log(chalk.red.inverse(error.message));
        process.exit(1);
    }
}

start();
