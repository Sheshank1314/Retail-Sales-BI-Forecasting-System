CREATE TABLE dim_product (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(100),
    category VARCHAR(50)
);

CREATE TABLE dim_region (
    region_id SERIAL PRIMARY KEY,
    region_name VARCHAR(50)
);

CREATE TABLE dim_time (
    order_date DATE PRIMARY KEY,
    month INT,
    year INT,
    quarter INT
);

CREATE TABLE fact_sales (
    order_id SERIAL PRIMARY KEY,
    order_date DATE,
    product_id INT,
    region_id INT,
    quantity INT,
    revenue FLOAT,

    FOREIGN KEY (product_id)
    REFERENCES dim_product(product_id),

    FOREIGN KEY (region_id)
    REFERENCES dim_region(region_id),

    FOREIGN KEY (order_date)
    REFERENCES dim_time(order_date)
);