import React, { useState } from 'react';
import './table.css';

// npm install antd
import { Button, Space, Table } from 'antd';

const CoopTable = ({coopTableObj}) => {
  // add "key": # to each object
  const data = coopTableObj.coopInformation.map((item, index) => ({
    ...item,
    key: String(index + 1) 
  }));

  //get filters
  let employerTmp = [];
  let degreeTmp = [];
  let cityTmp = [];
  let termTmp = [];
  for(const c of data) {
    employerTmp.push(c.employer);
    degreeTmp.push(c.degree);
    cityTmp.push(c.city);
    termTmp.push(c.term);
  }
  // remove duplicates for filter
  let employerCol = [...new Set(employerTmp)];
  let degreeCol = [...new Set(degreeTmp)];
  let cityCol = [...new Set(cityTmp)];
  let termCol = [...new Set(termTmp)];

  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    // console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };

  const columns = [
    {
      title: 'Employer',
      dataIndex: 'employer',
      key: 'employer',
      filters: employerCol.map(key => ({
        text: key,
        value: key
      })),
      filteredValue: filteredInfo.employer || null,
      onFilter: (value, record) => record.employer.includes(value),
      sorter: (a, b) => a.employer.length - b.employer.length,
      sortOrder: sortedInfo.columnKey === 'employer' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Degree',
      dataIndex: 'degree',
      key: 'degree',
      filters: degreeCol.map(key => ({
        text: key,
        value: key
      })),
      filteredValue: filteredInfo.degree || null,
      onFilter: (value, record) => record.degree.includes(value),
      sorter: (a, b) => a.degree.length - b.degree.length,
      sortOrder: sortedInfo.columnKey === 'degree' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
      filters: cityCol.map(key => ({
        text: key,
        value: key
      })),
      filteredValue: filteredInfo.city || null,
      onFilter: (value, record) => record.city.includes(value),
      sorter: (a, b) => a.city.length - b.city.length,
      sortOrder: sortedInfo.columnKey === 'city' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Term',
      dataIndex: 'term',
      key: 'term',
      filters: termCol.map(key => ({
        text: key,
        value: key
      })),
      filteredValue: filteredInfo.term || null,
      onFilter: (value, record) => record.term.includes(value),
      sorter: (a, b) => a.term.length - b.term.length,
      sortOrder: sortedInfo.columnKey === 'term' ? sortedInfo.order : null,
      ellipsis: true,
    }
  ];

  return (
    <div className='table-box'>
      <h1 className='text-center'>{coopTableObj.title}</h1>
      <Space style={{ marginBottom: 16 }}>
        {/* <Button onClick={setAgeSort}>Sort age</Button> */}
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
      </Space>
      <Table columns={columns} dataSource={data} onChange={handleChange}/>
    </div>
  );
}
export default CoopTable;

