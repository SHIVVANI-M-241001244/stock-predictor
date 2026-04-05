import numpy as np
from sklearn.linear_model import LinearRegression

def predict_prices(prices):
    prices = np.array(prices)

    if len(prices) < 3:
        return [float(prices[-1])] * 7

    X = np.arange(len(prices)).reshape(-1, 1)
    y = prices

    model = LinearRegression()
    model.fit(X, y)

    future = np.arange(len(prices), len(prices)+7).reshape(-1, 1)

    return model.predict(future).tolist()