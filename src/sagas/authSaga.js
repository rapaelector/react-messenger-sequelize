import {put, call, select, delay, takeLatest} from "redux-saga/effects";
import * as api from '../components/api'

export function* login(action) {
    yield put({type: "LOGIN_PENDING"});
    try {
       const response = yield call(api.login, action.payload);
       yield put({type: "LOGIN_SUCCESS", payload: {response:response}});
    } catch (error) {
       yield put({type: "LOGIN_FAILED", payload: {error: error}});
    }
 }

export function* checkUser(action) {
    try {
       const response = yield call(api.getCurrentUser, action.payload);
       if (response.id != action.payload.uid) {
         yield put({type: "USER_NONVALID", payload: {error:'User non valid'}});
         return;
       }
       yield put({type: "USER_VALID", payload: {user:response}});
    } catch (error) {
      yield put({type: "USER_NONVALID", payload: {error: error}});
    }
 }

export function* doRegister(action) {
    try {
       const response = yield call(api.register, action.payload);

       yield put({type: "REGISTER_SUCCESS", payload: {success:'User has ben created'}});
    } catch (error) {
      yield put({type: "REGISTER_FAILED", payload: {error: error}});
    }
 }

export function* logout(){
    yield put({type: "LOGOUT"})
}