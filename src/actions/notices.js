import {GET_NOTICES, FETCH_START_NOTICES, FETCH_SUCCESS_NOTICES} from './../constants/actionTypes'

export const startGetNotices = payload => ({
  type: FETCH_START_NOTICES,
  ...payload
})

const succesGetNotices = payload => ({
  type: FETCH_SUCCESS_NOTICES,
  ...payload
})