export default function StockReducer(state=[], action) {
  switch ( action.type ) {
    case 'START_STOCK_REQUEST':
      return state

    case 'FETCH_STOCKS':
      return state

    default:
      return state;
    }
}
