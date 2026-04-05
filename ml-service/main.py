from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from model import predict_prices

app = FastAPI()

# ✅ CORS (VERY IMPORTANT for React)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow all (for development)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Request Schema
class StockData(BaseModel):
    prices: list

# ✅ Prediction API
@app.post("/predict")
def predict(data: StockData):
    try:
        predictions = predict_prices(data.prices)

        return {
            "predictions": predictions
        }

    except Exception as e:
        return {
            "error": str(e)
        }