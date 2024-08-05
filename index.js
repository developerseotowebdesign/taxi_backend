import express from "express";
import cors from "cors";
import morgan from "morgan";
import colors from "colors";
import dotenv from "dotenv";
import connection from "./database/db.js";
import Router from "./routes/routes.js";
import path from "path";

import http from "http";
import messageModel from "./models/messageModel.js";
import bodyParser from "body-parser";

import { Server } from "socket.io"; // Import Server class from socket.io
import { SignupUserValetTypeViaAPI } from "./controller/userController.js";
import userModel from "./models/userModel.js";
import valetRideModel from "./models/valetRideModel.js";
// import {
//   client,
//   sendCatalogItem,
//   sendMessage,
//   sendLocation,
// } from "./utils/whatsappClient.js";
// // Event listener for incoming messages
// client.on("message", async (msg) => {
//   console.log("Incoming message:", msg.from, msg.body);
//   console.log("full mesasage ", msg, msg.body);

//   // Example response logic
//   if (msg.body.toLowerCase() === "hello") {
//     // Reply back with a message
//     // await sendMessage(msg.from, "Hi there!");
//     await sendCatalogItem(msg.from, 1);

//     await sendLocation(msg.from, 37.7749, -122.4194, "San Francisco, CA");
//   }

//   if (msg.body.toLowerCase().includes("newuser")) {
//     // Assuming you have a function to create an account for a new user
//     // const { phone, VendorId, driverId, Valet_Model } = parseMessageBody(
//     //   msg.body
//     // );

//     // Regular expression pattern to match VendorId, driverId, and Valet_Model
//     const pattern = /VendorId=([^,]+),driverId=([^,]+),Valet_Model=([^,]+)/;
//     const match = msg.body.match(pattern);

//     if (match) {
//       const clearphone = msg.from.split("@")[0];
//       const phone = clearphone.substring(2); // Remove '91' from the start

//       const VendorId = match[1];
//       const driverId = match[2];
//       const Valet_Model = match[3];
//       const phoneId = msg.from;
//       console.log("VendorId:", VendorId);
//       console.log("driverId:", driverId);
//       console.log("Valet_Model:", Valet_Model);

//       SignupUserValetTypeViaAPI(
//         phone,
//         VendorId,
//         driverId,
//         Valet_Model,
//         phoneId
//       );
//     }
//   }
// });

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "https://taxi.delhiexpert.com", "https://valetwale.in"],
    methods: ["GET", "POST"], // Allow only GET and POST methods
  },
}); // Create a new instance of Socket.io Server and pass the HTTP server to it

app.use(cors());

// const allowedOrigins = ['https://cayroshop.com/', 'https://test.ccavenue.com', 'https://secure.ccavenue.com'];

// // Configure CORS with the allowed origins
// app.use(cors({
//   origin: function (origin, callback) {
//     // Check if the origin is in the allowed origins array
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   }
// }));

app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));

app.use(morgan("dev"));
app.use(express.static("public"));
app.use("/", Router);

dotenv.config();

// socket io

app.get("/", (req, res) => {
  res.send("You are not authorized for this action");
});

const PORT = 3050;
server.listen(PORT, () =>
  console.log(`server is runnning ${PORT}`.bgCyan.white)
);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const DBURL = process.env.URL;

connection(username, password, DBURL);

// Socket.io events
io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  // Example: Handle chat message event
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
    // Broadcast the message to all connected clients
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});
