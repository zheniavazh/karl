const express = require("express");
const Good = require("../models/Good");
const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
    try {
        const list = await Good.find();
        res.status(200).send(list);
    } catch (error) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже.",
        });
    }
});

router.post("/", async (req, res) => {
    try {
        const newGood = await Good.create(req.body);
        res.status(201).send(newGood);
    } catch (error) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже.",
        });
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        if (id) {
            const updatedGood = await Good.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            res.send(updatedGood);
        }
    } catch (error) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже.",
        });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        if (id) {
            const deletedGood = await Good.findByIdAndRemove(id, req.body);
            res.send(deletedGood);
        }
    } catch (error) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже.",
        });
    }
});

module.exports = router;
