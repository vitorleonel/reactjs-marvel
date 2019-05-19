import { all, takeLatest, call, put } from "redux-saga/effects";

import api from "../../services/api";
import * as actions from "../actions";

function* getHeroes({ offset }) {
  try {
    const fetchApi = () => {
      return api.get("/v1/public/characters", {
        params: {
          limit: 20,
          offset
        }
      });
    };

    const {
      data: { data }
    } = yield call(fetchApi);

    yield put(actions.setHeroes(data.results));
    yield put(actions.setPagination({ ...data, results: null }));
  } catch (error) {}
}

export default function* rootSaga() {
  return yield all([takeLatest("requestHeroes", getHeroes)]);
}
