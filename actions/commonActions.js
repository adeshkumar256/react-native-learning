import { COUNTER_CHANGE } from "../constants/common";

export function changeCount(count) {
  return {
    type: COUNTER_CHANGE,
    payload: count
  }
}