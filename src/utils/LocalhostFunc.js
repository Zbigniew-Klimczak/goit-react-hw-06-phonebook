export const getLocalContacts = () => {
  const localContacts = JSON.parse(localStorage.getItem('contacts') || '[]');
  return localContacts;
};
export const updateLocalContacts = contacts => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
};
