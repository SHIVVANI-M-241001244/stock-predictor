import numpy as np
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense

def predict_prices(prices):
    prices = np.array(prices)

    X, y = [], []
    for i in range(len(prices)-3):
        X.append(prices[i:i+3])
        y.append(prices[i+3])

    X = np.array(X).reshape(-1,3,1)
    y = np.array(y)

    model = Sequential([
        LSTM(50, activation='relu', input_shape=(3,1)),
        Dense(1)
    ])

    model.compile(optimizer='adam', loss='mse')
    model.fit(X, y, epochs=50, verbose=0)

    last = prices[-3:].reshape(1,3,1)

    preds = []
    for _ in range(7):
        p = model.predict(last, verbose=0)[0][0]
        preds.append(float(p))
        last = np.append(last[:,1:,:], [[[p]]], axis=1)

    return preds