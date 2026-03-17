# InvoicelyticsAI 📊

**InvoicelyticsAI** is a modern, intelligent document processing platform designed to streamline invoice management. By leveraging the power of **Google Gemini 2.5 Flash**, it automatically extracts structured data from unstructured invoice documents (PDFs and images) and transforms them into actionable business insights through a professional managerial dashboard.

![System Status](https://img.shields.io/badge/System-Operational-emerald)
![AI Engine](https://img.shields.io/badge/AI-Gemini%202.5%20Flash-indigo)
![Framework](https://img.shields.io/badge/Framework-React%2019-blue)

---

## 🚀 Features

### 🧠 AI-Powered Data Extraction
- **Automated Ingestion**: Upload PDF or image-based invoices and let AI do the heavy lifting.
- **Structured Output**: Automatically extracts Invoice Number, Date, Vendor, Total Amount, Tax, Category, and Payment Terms.
- **Intelligent Categorization**: Automatically classifies expenses into categories like Software, Hardware, Utilities, and more.

### 📈 Managerial Dashboard
- **KPI Tracking**: Monitor total spend, average invoice value, and vendor counts at a glance.
- **Visual Analytics**: Interactive charts showing spending trends over time and category distribution.
- **Real-time Updates**: Dashboard reflects new data immediately after processing.

### 📋 Data Ledger
- **Structured View**: Review all extracted data in a clean, spreadsheet-like interface.
- **Status Monitoring**: Track the processing status of every document in your pipeline.
- **Search & Filter**: Easily find specific invoices or vendors.

---

## 🛠️ Tech Stack

- **Frontend Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **AI SDK**: [@google/genai](https://www.npmjs.com/package/@google/genai) (Gemini 2.5 Flash)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)

---

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd invoicelytics-ai
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory and add your Gemini API Key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

---

## 📖 Usage

1. **Upload**: Navigate to the "Upload Invoices" section and drag-and-drop your invoice files (PDF, PNG, or JPG).
2. **Process**: The system will automatically send the documents to Gemini 2.5 Flash for analysis.
3. **Analyze**: Head to the "Overview" dashboard to see your spending analytics updated in real-time.
4. **Review**: Use the "Data Ledger" to verify extracted details and manage your records.

---

## 🗺️ Future Roadmap: Firebase Integration

To transition InvoicelyticsAI from a client-side demo to a production-grade SaaS platform, the next major milestone is the integration of **Firebase**.

### 🌟 Why Firebase?
Firebase provides a unified suite of backend services that perfectly align with the needs of an AI-driven document processing app:

- **🔐 Multi-User Authentication**:
  - Implement secure user accounts with **OAuth** (Google, GitHub, etc.).
  - Ensure data privacy: Users only see their own uploaded invoices and analytics.
- **☁️ Persistent Data Storage (Firestore)**:
  - Move from local state to a cloud-based **NoSQL database**.
  - Enable real-time synchronization across devices.
  - Store historical data for long-term trend analysis.
- **📁 Object Storage (Firebase Storage)**:
  - Securely host original PDF and image files.
  - Link stored files to extracted database records for easy retrieval.
- **⚡ Scalability & Security**:
  - Leverage Firebase Security Rules to protect sensitive financial data at the database level.
  - Scale automatically as the number of users and documents grows.

### 🛠️ Planned Implementation
1. **Auth Layer**: Add a login/signup flow using Firebase Auth.
2. **Data Migration**: Refactor the extraction service to save results directly to Firestore.
3. **File Hosting**: Update the upload pipeline to store binaries in Firebase Storage before processing.
4. **User Scoping**: Update Recharts dashboards to query data filtered by the authenticated user's UID.

---

## 🛡️ License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

*Built with ❤️ using Google Gemini AI.*
