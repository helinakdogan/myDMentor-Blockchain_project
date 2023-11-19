import React from 'react';

const MenteePage = () => {
  const menteeNames = ['Mentee X', 'Mentee Y', 'Mentee Z'];
  const appointmentTypes = ['Written Technical Analysis', 'Video Technical Analysis', 'Written Technical Analysis'];
  const appointmentDates = ['2023-11-19', '2023-11-20', '2023-11-21'];

  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
    fontFamily: 'Arial, sans-serif',
  };

  const thStyle = {
    backgroundColor: '#f2f2f2',
    padding: '12px 15px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
  };

  const tdStyle = {
    padding: '10px 15px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
  };

  const containerStyle = {
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    maxWidth: '600px',
    margin: '0 auto',
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: 'center', fontSize:"26px" }}>MenteePage</h1>
      <div style={{ margin: "10px" }}></div>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Appointment Type</th>
            <th style={thStyle}>Deadline</th>
          </tr>
        </thead>
        <tbody>
          {menteeNames.map((name, index) => (
            <tr key={index}>
              <td style={tdStyle}>{name}</td>
              <td style={tdStyle}>{appointmentTypes[index]}</td>
              <td style={tdStyle}>{appointmentDates[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MenteePage;
