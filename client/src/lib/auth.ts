export interface User {
  name: string;
  phone: string;
}

export const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdtYHh2yfc2gMeprEucQcOg0CW5Jxux5kXUPfoRkCymQWGo0A/formResponse';

export const saveUser = (user: User): void => {
  localStorage.setItem('gateCSEUser', JSON.stringify(user));
};

export const getUser = (): User | null => {
  const userData = localStorage.getItem('gateCSEUser');
  return userData ? JSON.parse(userData) : null;
};

export const clearUser = (): void => {
  localStorage.removeItem('gateCSEUser');
};

export const submitToGoogleForm = async (user: User): Promise<boolean> => {
  try {
    const formData = new FormData();
    // These field names would need to be updated based on the actual Google Form structure
    formData.append('entry.123456789', user.name); // Replace with actual entry ID
    formData.append('entry.987654321', user.phone); // Replace with actual entry ID
    
    await fetch(GOOGLE_FORM_URL, {
      method: 'POST',
      body: formData,
      mode: 'no-cors'
    });
    
    return true;
  } catch (error) {
    console.error('Failed to submit to Google Form:', error);
    return false;
  }
};
