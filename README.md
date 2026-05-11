# 📊 Retail Sales Business Intelligence & Forecasting System

An end-to-end Business Intelligence and Sales Forecasting platform developed using Python, PostgreSQL, Power BI, FastAPI, React, and Prophet.

The system automates retail sales data processing, stores structured data in a SQL warehouse, generates business dashboards, and predicts future sales trends using machine learning forecasting models.

---

# 🚀 Key Features

* Automated ETL Pipeline using Python
* PostgreSQL Data Warehouse (Star Schema)
* Interactive Power BI Dashboards
* Sales Forecasting using Prophet
* FastAPI Backend APIs
* React Frontend Dashboard
* Automated Data Refresh & Scheduling
* Forecast Accuracy Evaluation
* Business KPI Monitoring
* Inventory & Revenue Insights

---

# 🏗️ System Architecture

```text
Sales Data (CSV / API)
        ↓
Python ETL Pipeline
        ↓
PostgreSQL Data Warehouse
        ↓
Forecasting Engine (Prophet)
        ↓
Power BI Dashboard
        ↓
React Frontend + FastAPI Backend
        ↓
Automation & Monitoring
```

---

# ⚙️ Tech Stack

| Category           | Technologies           |
| ------------------ | ---------------------- |
| Programming        | Python                 |
| Database           | PostgreSQL             |
| BI & Visualization | Power BI               |
| Forecasting        | Prophet                |
| Backend            | FastAPI                |
| Frontend           | React.js               |
| Data Processing    | Pandas, NumPy          |
| ORM                | SQLAlchemy             |
| Automation         | Windows Task Scheduler |
| Version Control    | Git & GitHub           |

---

# 📊 Dashboard Preview

## Executive Dashboard

* Revenue KPIs
* Monthly Growth
* Top Products
* Regional Sales Analysis

## Forecast Dashboard

* 90-Day Sales Prediction
* Trend & Seasonality Analysis
* Forecast Confidence Intervals

> Dashboard screenshots are available inside:
> `dashboard/dashboard_screenshots/`

---

# 📈 Forecasting

The project uses the Prophet time-series forecasting model to predict future retail sales and demand trends based on historical sales data.

### Forecast Metrics

* MAE
* RMSE
* MAPE
* R² Score

Forecast outputs are stored in:

```text
forecasting/forecast_output.csv
```

---

# 📁 Project Structure

```text
Retail-Sales-BI-System/
│
├── backend/
├── frontend/
├── data/
├── database/
├── forecasting/
├── dashboard/
├── automation/
├── notebooks/
├── docs/
└── README.md
```

---

# 🔧 Quick Setup

## Clone Repository

```bash
git clone https://github.com/Sheshank1314/Retail-Sales-BI-Forecasting-System.git
```

## Install Dependencies

```bash
pip install -r requirements.txt
```

## Run ETL Pipeline

```bash
python etl_main.py
```

## Run Forecasting

```bash
python forecast.py
```

## Start Backend

```bash
uvicorn app:app --reload
```

---

# 🎯 Business Value

This system helps organizations with:

* Revenue Prediction
* Inventory Planning
* Demand Forecasting
* Business Intelligence
* Strategic Decision-Making

---

# 🔮 Future Enhancements

* Real-time Streaming with Kafka
* Cloud Deployment (AWS/GCP/Azure)
* Deep Learning Forecasting (LSTM)
* Real-time Dashboard Updates
* CI/CD Deployment Pipeline

---

# 👨‍💻 Author

### Sheshank Bandarupalli

Bachelor of Computer Applications (BCA)
Specialization in AI, ML, Cloud Computing & Data Science

### Technologies Worked On

Python • PostgreSQL • Power BI • FastAPI • React.js • Prophet • SQLAlchemy • Pandas

### GitHub Repository

https://github.com/Sheshank1314/Retail-Sales-BI-Forecasting-System
