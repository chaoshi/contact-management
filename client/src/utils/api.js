/**
 * Get contacts from server endpoint
 * @returns {object} contacts object
 */
export const getAll = async () => {
  const response = await fetch('/contacts');
  const body = await response.json();

  if (response.status !== 200) throw Error(body.message);

  return body;
};