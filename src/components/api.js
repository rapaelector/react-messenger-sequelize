import React from 'react';
import ApiPlatformError from './error/ApiPlatformError'
import fetchDefault from 'fetch-defaults';
import { useSelector } from 'react-redux';
import {store} from '../store/configureStore'
const API_URL = process.env.REACT_APP_API_HOST
const API_LOGIN_CHECK = API_URL + '/auth/login'
const API_USERS = API_URL + '/users'
const API_USERS_REGISTER= API_URL + '/auth/register'
const API_GET_USERS = API_URL + '/users/:id'
const API_EXPRESSE = process.env.REACT_APP_API_HOST
const API_EXPRESSE_USERS= API_EXPRESSE + '/users'
const API_EXPRESSE_FETCH_GROUP= API_EXPRESSE + '/users/usergroups?UserId=:UserId'
const API_EXPRESSE_FETCH_MESSAGE_BY_GROUP= API_EXPRESSE + '/users/message_by_group_id?id=:id'
const API_EXPRESSE_CREATE_MESSAGE= API_EXPRESSE + '/create_messages'
const API_EXPRESSE_CREATE_GROUP_MESSAGE= API_EXPRESSE + '/messages/create'
// init token by store
let token=null;
// create funciton to handle store.getState()
const  getToken = (state) => (state.auth.token);
// create funciton to subscribe
const tokenListener = () => {
    token = getToken(store.getState())
};
// then subscribe
store.subscribe(tokenListener)


export const register = async (payload) => {
    const body = JSON.stringify(payload)
    let data;
    const url = API_USERS_REGISTER
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: body
        });
        data = await response.json();
        if (response.ok) {
            return data
        }
        throw new ApiPlatformError(data.message? data.message : data.detail, data.status)
    } catch (err) {
      return Promise.reject(err.message ? err.message : data)
    }
}



export const login = async (payload) => {
    const body = JSON.stringify(payload)
    let data;
    try {
        const response = await fetch(API_LOGIN_CHECK, {
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: body
        });
        data = await response.json();
        if (response.ok) {
            return data
        }
        throw new ApiPlatformError(data.message, data.status)
    } catch (err) {
      return Promise.reject(err.message ? err.message : data)
    }
}


export const getCurrentUser = async (payload) => {
    const body = JSON.stringify(payload)
    let data;
    const url = API_GET_USERS.replace(':id', payload.uid)
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        });
        data = await response.json();
        if (response.ok) {
            return data
        }
        throw new ApiPlatformError(data.message? data.message : data.detail, data.status)
    } catch (err) {
      return Promise.reject(err.message ? err.message : data)
    }
}


export const fetchUsersExpresse = async (payload) => {
    let data;
    const url = API_EXPRESSE_USERS
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        });
        data = await response.json();
        if (response.ok) {
            return data
        }
        throw new ApiPlatformError(data.message? data.message : data.detail, data.status)
    } catch (err) {
      return Promise.reject(err.message ? err.message : data)
    }
}

    export const fetchGroupExpress = async (payload) => {
        const {UserId} = payload;
        let data;
        const url = API_EXPRESSE_FETCH_GROUP.replace(':UserId', UserId)
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + token,
                }
            });
            data = await response.json();
            if (response.ok) {
                return data
            }
            throw new ApiPlatformError(data.message? data.message : data.detail, data.status)
        } catch (err) {
        return Promise.reject(err.message ? err.message : data)
        }
    }

    export const fetchMessageByGroup = async (payload) => {
        const {id} = payload;
        let data;
        const url = API_EXPRESSE_FETCH_MESSAGE_BY_GROUP.replace(':id', id)
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + token,
                }
            });
            data = await response.json();
            if (response.ok) {
                return data
            }
            throw new ApiPlatformError(data.message? data.message : data.detail, data.status)
        } catch (err) {
        return Promise.reject(err.message ? err.message : data)
        }
    }

    export const createMessage = async (payload) => {
        const {content , GroupId, UserId} = payload;
        let data;
        const body = { "content": content, "GroupId": GroupId,"UserId": UserId }
        const url = API_EXPRESSE_CREATE_MESSAGE
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(body)
            });
            data = await response.json();
            if (response.ok) {
                return data
            }
            throw new ApiPlatformError(data.message? data.message : data.detail, data.status)
        } catch (err) {
        return Promise.reject(err.message ? err.message : data)
        }
    }

    export const createGroupMessage = async (payload) => {
        const {users} = payload;
        let data;
        const url = API_EXPRESSE_CREATE_GROUP_MESSAGE
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + token,
                },
                body: JSON.stringify({ users: users})       
            });
            data = await response.json();
            if (response.ok) {
                return data
            }
            throw new ApiPlatformError(data.message? data.message : data.detail, data.status)
        } catch (err) {
        return Promise.reject(err.message ? err.message : data)
        }
    }
