import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './table.css';

const Table = ({ columns, data, sortable = false, paginated = false, editable = false, rowsPerPage = 5 }) => {
  const [sortConfig, setSortConfig] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [tableData, setTableData] = useState(data);

  const handleSort = (key) => {
    if (!sortable) return;
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
    const sortedData = [...tableData].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
      return 0;
    });
    setTableData(sortedData);
  };

  const handleEdit = (rowIndex, key, value) => {
    if (!editable) return;
    const updatedData = [...tableData];
    updatedData[rowIndex][key] = value;
    setTableData(updatedData);
  };

  const paginatedData = paginated ? tableData.slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage) : tableData;
  const totalPages = Math.ceil(tableData.length / rowsPerPage);

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} onClick={() => handleSort(col.key)}>
                {col.label} {sortable && sortConfig?.key === col.key ? (sortConfig.direction === 'ascending' ? '▲' : '▼') : ''}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col) => (
                <td key={col.key}>
                  {editable ? (
                    <input
                      type="text"
                      value={row[col.key]}
                      onChange={(e) => handleEdit(rowIndex, col.key, e.target.value)}
                    />
                  ) : (
                    row[col.key]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {paginated && (
        <div className="pagination-controls">
          <button disabled={currentPage === 0} onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
          <span>Page {currentPage + 1} of {totalPages}</span>
          <button disabled={currentPage === totalPages - 1} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
        </div>
      )}
    </div>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  sortable: PropTypes.bool,
  paginated: PropTypes.bool,
  editable: PropTypes.bool,
  rowsPerPage: PropTypes.number,
};

export default Table;