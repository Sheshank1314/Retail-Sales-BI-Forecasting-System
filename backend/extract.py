import pandas as pd

def extract_data():

    df = pd.read_csv(
        "C:\\Projects\\Retail-Sales-BI-System\\data\\raw\\Sample - Superstore.csv",
        encoding="latin1"
    )

    print(df.columns.tolist())

    return df