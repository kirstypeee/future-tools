import { apiCall } from '../lib/fetch';
export const GET_FORMS = 'forms/GET_FORMS';

export const loadForms = () => ({
  type: GET_FORMS,
  payload: apiCall('/api/forms'),
});
