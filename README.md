# Static Asset Gateway

A lightweight Node.js server built with Express to serve static project resources and provide a browsable directory index via HTTP.

## 🚀 Features

- **Static Asset Delivery:** Serves images, JSON configurations, and files via the `/public` route.
- **Directory Indexing:** Provides a visual, browser-based interface to navigate the file system (powered by `serve-index`).
- **Health Monitoring:** Minimal `/test` endpoint for server heartbeat checks.

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Middleware:** `serve-index` (Directory UI), `express.static` (File serving)

## 📡 API Endpoints

| **Endpoint** | **Method** | **Description**                                     |
| ------------ | ---------- | --------------------------------------------------- |
| /public      | GET        | Browse and download files from the asset directory. |
| /test        | GET        | Heartbeat check; returns "Hello World!".            |

## ⚙️ Installation & Setup

1. **Clone the repository**
2. **Install dependencies**
3. **Prepare Public Assets**
   Add the files you wish to serve into the `public` folder. If this folder does not exist, create it at the root level of the project
4. **Start the server**
