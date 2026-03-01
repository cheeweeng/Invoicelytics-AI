import { InvoiceData } from '../types';

const API_BASE_URL = 'http://localhost:3001/api';

export const extractInvoiceData = async (
  base64Data: string,
  mimeType: string,
  fileName?: string
): Promise<InvoiceData> => {
  const response = await fetch(`${API_BASE_URL}/invoices/extract`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ base64Data, mimeType, fileName }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
    throw new Error(errorData.error || `HTTP ${response.status}`);
  }

  const result = await response.json();
  return result.data;
};

export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      const base64 = result.split(',')[1];
      resolve(base64);
    };
    reader.onerror = (error) => reject(error);
  });
};