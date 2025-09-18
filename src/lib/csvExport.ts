interface ContactFormData {
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  company?: string;
  jobTitle?: string;
  industry?: string;
  message?: string;
}

const API_BASE_URL = 'http://localhost:3001';

export const saveToCSV = async (formData: ContactFormData, formType: string = 'contact', isBookCallDialog: boolean = false): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formData,
        formType,
        isBookCallDialog,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Data saved to server CSV:', result);
    return true;
  } catch (error) {
    console.error('Error saving to CSV:', error);
    return false;
  }
};