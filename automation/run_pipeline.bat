@echo off

echo Running ETL Pipeline...

cd /d C:\Projects\Retail-Sales-BI-System\backend

C:\Projects\Retail-Sales-BI-System\venv\Scripts\python.exe etl_main.py

echo ETL Completed

echo Running Forecasting...

cd /d C:\Projects\Retail-Sales-BI-System\forecasting

C:\Projects\Retail-Sales-BI-System\venv\Scripts\python.exe forecasting.py

echo Forecast Completed

pause