import pandas as pd

def transform_data(df):

    # Remove hidden spaces
    df.columns = df.columns.str.strip()

    # Remove null values
    df.dropna(inplace=True)

    # Remove duplicate rows
    df.drop_duplicates(inplace=True)

    # Convert date columns
    df['Order Date'] = pd.to_datetime(
        df['Order Date']
    )

    df['Ship Date'] = pd.to_datetime(
        df['Ship Date']
    )

    # Rename important columns
    df.rename(columns={

        'Order Date': 'order_date',
        'Ship Date': 'ship_date',
        'Product Name': 'product_name',
        'Category': 'category',
        'Sub-Category': 'sub_category',
        'Region': 'region',
        'Sales': 'revenue',
        'Quantity': 'quantity',
        'Profit': 'profit'

    }, inplace=True)

    return df