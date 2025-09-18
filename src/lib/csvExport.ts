interface CSVContactData {
  timestamp: string;
  type: 'contact_request' | 'call_request' | 'download_request';
  firstName?: string;
  lastName?: string;
  name?: string;
  email: string;
  phone?: string;
  company?: string;
  jobTitle?: string;
  industry?: string;
  message?: string;
}

export const exportToCSV = (data: CSVContactData) => {
  const csvData = getCSVData();
  csvData.push(data);
  saveCSVData(csvData);
  downloadCSV(csvData);
};

const getCSVData = (): CSVContactData[] => {
  try {
    const stored = localStorage.getItem('contact_data_csv');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const saveCSVData = (data: CSVContactData[]) => {
  localStorage.setItem('contact_data_csv', JSON.stringify(data));
};

const downloadCSV = (data: CSVContactData[]) => {
  const headers = [
    'Timestamp',
    'Type',
    'Name',
    'Email',
    'Phone',
    'Company',
    'Job Title',
    'Industry',
    'Message'
  ];

  const csvContent = [
    headers.join(','),
    ...data.map(row => [
      `"${row.timestamp}"`,
      `"${row.type}"`,
      `"${row.name || `${row.firstName || ''} ${row.lastName || ''}`.trim()}"`,
      `"${row.email}"`,
      `"${row.phone || ''}"`,
      `"${row.company || ''}"`,
      `"${row.jobTitle || ''}"`,
      `"${row.industry || ''}"`,
      `"${row.message || ''}"`
    ].join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', `contact_leads_${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};