/* eslint-disable no-undef */
import { takeEvery, call, put } from 'redux-saga/effects';
import {
  DATA_PRODUCTS_REQUESTED,
  DATA_PRODUCTS_LOADED,
  DATA_PRODUCT_ERROR
} from '../../common/constants/actionType';
import { SERVICE_URL } from '../../common/constants/general';
import { getProducts } from '../actions/index';

export default function* watcherSaga() {
  yield takeEvery(DATA_PRODUCTS_REQUESTED, workerSaga);
}

function* workerSaga() {
  try {
    const response = yield call(getproductsData);
    const products = yield response.json();
    const payload = products;
    yield put({ type: DATA_PRODUCTS_LOADED, payload });
  } catch (e) {
    yield put({ type: DATA_PRODUCT_ERROR, payload: e });
  }
}

function getproductsData() {
  return fetch(`${SERVICE_URL}/getAllproducts`);
}
