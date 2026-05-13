from sqlalchemy import create_engine

DATABASE_URL = (
    "postgresql://postgres:YOUR_PASSWORD"
    "@localhost:5432/retail_sales_db"
)

engine = create_engine(DATABASE_URL)

def load_data(df):

    df.to_sql(
        "fact_sales",
        engine,
        if_exists="append",
        index=False
    )

    print("Data Loaded Into PostgreSQL Successfully")
