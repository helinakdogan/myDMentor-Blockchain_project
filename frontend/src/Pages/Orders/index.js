import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getInventory, getOrders } from "../../API";

function Orders() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    // Function to generate random data for a person
    const generateRandomPerson = (id) => {
      const mentors = ["Mentor X", "Mentor Y", "Mentor Z"];
      const dates = ["2023-11-18", "2023-11-19", "2023-11-20"];
      const hours = ["10:00 AM", "02:30 PM", "05:45 PM"];
      
      return {
        key: id,
        mentor: mentors[Math.floor(Math.random() * mentors.length)],
        date: dates[Math.floor(Math.random() * dates.length)],
        hour: hours[Math.floor(Math.random() * hours.length)],
        total: 0, 
      };
    };


    const initialData = Array.from({ length: 3 }, (_, index) => generateRandomPerson(index));

    setDataSource(initialData);
  }, []);  

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>My program</Typography.Title>
      <Table
        loading={loading}
        dataSource={dataSource} // Pass the dataSource to the Table component
        columns={[
          {
            title: "Mentor",
            dataIndex: "mentor",
          },
          {
            title: "Date",
            dataIndex: "date",
          },
          {
            title: "Hour",
            dataIndex: "hour",
          },
        ]}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
  );
}

export default Orders;
