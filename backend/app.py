from fastapi import FastAPI
from sqlalchemy import create_engine
import pandas as pd

app = FastAPI()

DATABASE_URL = (
    "postgresql://postgres:YOUR_PASSWORD"
    "@localhost:5432/retail_sales_db"
)

engine = create_engine(DATABASE_URL)


@app.get("/")
def home():
    return {
        "message": "Retail Sales BI Backend Running"
    }


@app.get("/revenue")
def revenue():

    query = """
        SELECT SUM(revenue) AS total_revenue
        FROM fact_sales
    """

    df = pd.read_sql(query, engine)

    revenue_value = float(df['total_revenue'][0])

    return {
        "total_revenue": revenue_value
    }
