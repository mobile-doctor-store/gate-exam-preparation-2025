export interface User {
  name: string;
  phone: string;
}

// Environment variables for secure configuration
const getGoogleFormConfig = () => {
  const formUrl = import.meta.env.VITE_GOOGLE_FORM_URL;
  const nameFieldId = import.meta.env.VITE_GOOGLE_FORM_NAME_FIELD;
  const phoneFieldId = import.meta.env.VITE_GOOGLE_FORM_PHONE_FIELD;
  
  if (!formUrl || !nameFieldId || !phoneFieldId) {
    console.warn('Google Form configuration not found in environment variables');
    return null;
  }
  
  return { formUrl, nameFieldId, phoneFieldId };
};

export const saveUser = (user: User): void => {
  // Hash user data for basic privacy
  const hashedUser = {
    ...user,
    phone: btoa(user.phone) // Basic encoding, not encryption
  };
  localStorage.setItem('gateCSEUser', JSON.stringify(hashedUser));
};

export const getUser = (): User | null => {
  try {
    const userData = localStorage.getItem('gateCSEUser');
    if (!userData) return null;
    
    const hashedUser = JSON.parse(userData);
    return {
      ...hashedUser,
      phone: atob(hashedUser.phone) // Decode the phone number
    };
  } catch (error) {
    console.error('Failed to retrieve user data:', error);
    return null;
  }
};

export const clearUser = (): void => {
  localStorage.removeItem('gateCSEUser');
};

export const submitToGoogleForm = async (user: User): Promise<boolean> => {
  try {
    const config = getGoogleFormConfig();
    if (!config) {
      console.warn('Google Form not configured. Saving user data locally only.');
      return true; // Still allow local storage to work
    }
    
    const formData = new FormData();
    formData.append(config.nameFieldId, user.name);
    formData.append(config.phoneFieldId, user.phone);
    
    await fetch(config.formUrl, {
      method: 'POST',
      body: formData,
      mode: 'no-cors'
    });
    
    return true;
  } catch (error) {
    console.error('Failed to submit to Google Form:', error);
    return true; // Don't fail the login process if form submission fails
  }
};
