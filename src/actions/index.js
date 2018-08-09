const API_KEY = 'OJXYLTI1K9HCNBA8'
const ROOT_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=`;

export const FETCH_STOCKS = 'FETCH_STOCKS'

export function fetchStocks(symbol) {
  const url = `${ROOT_URL}${symbol}&apikey=${API_KEY}`;

  return (dispatch) => {
    dispatch({type: 'START_STOCK_REQUEST' });
    return fetch(url)
      .then(response => response.json())
      .then(stock => dispatch({ type: FETCH_STOCKS, payload: request}))
  }
}
