import { BookingFormData } from '../types';

// This simulates the backend API call delay and success
export const submitBooking = async (data: BookingFormData): Promise<boolean> => {
  console.log("Submitting booking data to backend:", data);
  
  return new Promise((resolve) => {
    setTimeout(() => {
      // In a real app, this would be:
      // await fetch('/api/book', { method: 'POST', body: JSON.stringify(data) ... });
      resolve(true);
    }, 1500);
  });
};

export const submitContact = async (data: any): Promise<boolean> => {
  console.log("Submitting contact data to backend:", data);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};