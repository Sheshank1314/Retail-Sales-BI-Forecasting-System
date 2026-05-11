import pandas as pd
from prophet import Prophet
from sqlalchemy import create_engine
import matplotlib.pyplot as plt

# PostgreSQL connection
engine = create_engine(
    "postgresql://postgres:postgres123@localhost:5432/retail_sales_db"
)

# Load data
query = """
SELECT order_date, revenue
FROM fact_sales
"""

df = pd.read_sql(query, engine)

# Convert columns
df['order_date'] = pd.to_datetime(df['order_date'])

# Group by date
daily_sales = df.groupby('order_date')['revenue'].sum().reset_index()

# Rename for Prophet
daily_sales.columns = ['ds', 'y']

# Create model
model = Prophet()

# Train model
model.fit(daily_sales)

# Future dates
future = model.make_future_dataframe(periods=30)

# Forecast
forecast = model.predict(future)

# Print forecast
print(forecast[['ds', 'yhat']].tail())

# SAVE FORECAST TO POSTGRESQL
forecast[['ds', 'yhat']].to_sql(
    'forecast_sales',
    engine,
    if_exists='replace',
    index=False
)

print("Forecast Saved To PostgreSQL")

# Plot forecast
fig = model.plot(forecast)

plt.title("Sales Forecast")

# Save graph automatically
plt.savefig("sales_forecast.png")

print("Forecast Graph Saved")