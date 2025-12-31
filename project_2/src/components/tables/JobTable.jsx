import React, { useState } from 'react';

// npm install antd
import { Button, Space, Table } from 'antd';

const JobTable = ({jobTableObj}) => {
  // add "key": # to each object
  const data = jobTableObj.professionalEmploymentInformation.map((item, index) => ({
    ...item,
    key: String(index + 1) 
  }));

  //get filters
  let employerTmp = [];
  let degreeTmp = [];
  let cityTmp = [];
  let titleTmp = [];
  let dateTmp = [];
  for(const c of data) {
    employerTmp.push(c.employer);
    degreeTmp.push(c.degree);
    cityTmp.push(c.city);
    titleTmp.push(c.title);
    dateTmp.push(c.startDate);
  }
  // remove duplicates for filter
  let employerCol = [...new Set(employerTmp)];
  let degreeCol = [...new Set(degreeTmp)];
  let cityCol = [...new Set(cityTmp)];
  let titleCol = [...new Set(titleTmp)]
  let dateCol = [...new Set(dateTmp)];

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
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      filters: titleCol.map(key => ({
        text: key,
        value: key
      })),
      filteredValue: filteredInfo.title || null,
      onFilter: (value, record) => record.title.includes(value),
      sorter: (a, b) => a.title.length - b.title.length,
      sortOrder: sortedInfo.columnKey === 'title' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Date',
      dataIndex: 'startDate',
      key: 'startDate',
      filters: dateCol.map(key => ({
        text: key,
        value: key
      })),
      filteredValue: filteredInfo.startDate || null,
      onFilter: (value, record) => record.startDate.includes(value),
       sorter: (a, b) => new Date(a.startDate) - new Date(b.startDate),
      sortOrder: sortedInfo.columnKey === 'startDate' ? sortedInfo.order : null,
      ellipsis: true,
    }
  ];

  return (
    <div className='table-box'>
      <h1 className='text-center'>{jobTableObj.title}</h1>
      <Space style={{ marginBottom: 16 }}>
        {/* <Button onClick={setAgeSort}>Sort age</Button> */}
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
      </Space>
      <Table columns={columns} dataSource={data} onChange={handleChange} />
    </div>
  );
}
export default JobTable;

