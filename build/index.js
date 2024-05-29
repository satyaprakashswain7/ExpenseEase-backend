"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//pwd: NOsVrIfgSVSjQMhF
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const financial_records_1 = __importDefault(require("./routes/financial-records"));
const cors_1 = __importDefault(require("cors"));
require('dotenv').config();
const app = (0, express_1.default)();
const port = process.env.VITE_PORT || 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const mongoURI = process.env.VITE_MONGO_URI || '';
mongoose_1.default.connect(mongoURI)
    .then(() => console.log("connected to MongoDB succesfully"))
    .catch((err) => console.error("failed ", err));
app.use("/financial-records", financial_records_1.default);
app.listen(port, () => {
    console.log(`server connected to ${port}`);
});
