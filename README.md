# Node.js File Processing & MongoDB Engine 🗄️

[![Node.js](https://img.shields.io/badge/Node.js-16+-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-Backend-404D59?style=for-the-badge&logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-GridFS-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

A modular Node.js backend suite for file uploads, multi-page document PDF parsing, and persistent data storage with **MongoDB** and **Express.js**.

---

## 📦 Architecture Modules

The repository is structured into focused micro-services:

| Module | Purpose | Tech |
| :--- | :--- | :--- |
| **`nodejs-fileupload`** | Multipart file upload pipeline with streaming & mime validation | `Multer` `Express` |
| **`nodejs-pdfParse`** | Automated PDF text extraction & structured parsing | `pdf-parse` `Node Streams` |
| **`nodejs-savetext`** | Document persistence layer & schema validation | `Mongoose` `MongoDB` |

---

## ✨ Features

- 📤 **Multipart Streaming**: Secure file ingestion with file type validation and size limits.
- 📄 **PDF Extraction**: Programmatic extraction of text, metadata, and page counts from uploaded PDF files.
- 💾 **MongoDB Storage**: Schema-driven persistence for extracted document metadata and content.
- ⚡ **RESTful Endpoints**: Clean API routes for file uploading, status querying, and data retrieval.

---

## 🚀 Setup & Execution

### Prerequisites

- **Node.js** (v16+)
- **MongoDB** instance running locally or via MongoDB Atlas URI

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/imaqib101/nodejs-FU-FS-mongodb.git
   cd nodejs-FU-FS-mongodb
   ```

2. **Run a module (e.g., file upload)**:
   ```bash
   cd nodejs-fileupload
   npm install
   npm start
   ```

---

## 👤 Author

**Mohammed Aqib**
- GitHub: [@imaqib101](https://github.com/imaqib101)
- Location: Bengaluru, India
