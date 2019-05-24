/**
 * This module exports the initial state of the store
 * and it can be used as the store model
 *
 */
export default {
  query: null,
  language: null,

  isLoading: false,
  isLoadingError: null,
  data: null,

  sortBy: "name" // name | date
}