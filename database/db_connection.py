from sqlalchemy import create_engine

DATABASE_URL = (
    "postgresql://postgres:postgres123"
    "@localhost:5432/retail_sales_db"
)

engine = create_engine(DATABASE_URL)

print("Database Connected Successfully")