import dispatcher from '../dispatcher'
import $ from 'jquery'
const local = 'http://192.168.1.108:8081'//TODO CHANGE URL http://192.168.1.108:8081

export function someAction() {
  dispatcher.dispatch({type: "FETCH_STOCK"})
  const url = local+'/api/'
  $.getJSON(url, json => {
    dispatcher.dispatch({ type: "SOMETHING", json })
  }).done( json => {
    dispatcher.dispatch({ type: "GOT_DATA"})
  }).fail((jqXHR, textStatus, errorThrown) => {
    alert('Fetch Failed: ' + textStatus)
  })
}
