import pkg from "whatsapp-web.js";
const { Client, MessageMedia, Location } = pkg;
import path from "path";
import qrcode from "qrcode-terminal";

const client = new Client({
  puppeteer: {
    headless: true,
    args: ["--no-sandbox", "--disable-gpu"],
  },
  webVersionCache: {
    type: "remote",
    remotePath:
      "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html",
  },
});

client.on("qr", (qr) => {
  console.log("QR Code received:");
  qrcode.generate(qr, { small: true }); // Display QR code in terminal
});

client.on("ready", () => {
  console.log("WhatsApp Client is ready!");
});

client.initialize();

// Function to send a message to a specific number
async function sendMessage(number, message) {
  try {
    await client.sendMessage(number, message);
    console.log(`Message sent to ${number}: ${message}`);
  } catch (error) {
    console.error(`Error sending message to ${number}: ${error.message}`);
  }
}

const catalog = [
  {
    id: 1,
    name: "Chocolate Cake",
    description: "Delicious chocolate cake",
    price: "$28.00",
    imagePath:
      "../../taxiapp/backend/public/uploads/new/carImage-1718792673054.webp",
  },
  // Add more items as needed
];

// Function to get catalog item by ID
function getCatalogItemById(id) {
  return catalog.find((item) => item.id === id);
}

// Function to send a catalog item to a specific number
async function sendCatalogItem(number, itemId) {
  const item = getCatalogItemById(itemId);
  if (item) {
    const media = MessageMedia.fromFilePath(path.resolve(item.imagePath));
    const message = `${item.name}\n${item.price}\n${item.description}`;
    await client.sendMessage(number, media);
    await sendMessage(number, message);
  } else {
    console.error(`Item with ID ${itemId} not found in catalog.`);
  }
}

// Function to send a location to a specific number
async function sendLocation(number, latitude, longitude, description) {
  try {
    const location = new Location(latitude, longitude, description);
    await client.sendMessage(number, location);
    console.log(`Location sent to ${number}: ${description}`);
  } catch (error) {
    console.error(`Error sending location to ${number}: ${error.message}`);
  }
}

export {
  client,
  sendMessage,
  sendCatalogItem,
  getCatalogItemById,
  sendLocation,
};

// Example usage
// sendCatalogItem('1234567890@c.us', 1);
// sendLocation('1234567890@c.us', 37.7749, -122.4194, 'San Francisco, CA');
