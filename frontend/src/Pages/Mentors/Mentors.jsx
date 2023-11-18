import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Col, Row, Space, Statistic, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory, getOrders, getRevenue } from "../../API";
import { Input } from "antd";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    getOrders().then((res) => {
      setOrders(res.total);
      setRevenue(res.discountedTotal);
    });
    getInventory().then((res) => {
      setInventory(res.total);
    });
    getCustomers().then((res) => {
      setCustomers(res.total);
    });
  }, []);

  return (
    <Space size={20} direction="vertical" style={{ textAlign: "center" }}>
      <Typography.Title
        level={4}
        style={{ fontSize: "24px", color: "dimgrey", fontWeight: "bold" }}
      >
        Find your mentor!
      </Typography.Title>
      <Input
        placeholder="Search mentors..."
        style={{ width: 300 }}
        // You can add onChange or onPressEnter events to handle search
      />

      <Space direction="horizontal">
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: "white",
                backgroundColor: "dimgray",
                borderRadius: 20,
                fontSize: 24,
                padding: 9,
              }}
            />
          }
          title={"Mentor 1"}
          value={"price"}
          description="My expertise is in..."
          extraFeatures={[
            "Video support: yes",
            "Video duration: 30min",
            "Number of mentees: 12",
          ]}
          titleStyle={{
            color: "dimgray",
            fontSize: "20px",
            fontWeight: "bold",
          }}
          valueStyle={{ color: "dimgray", fontSize: "18px" }}
          descriptionStyle={{ color: "dimgray", fontSize: "16px" }}
          featureStyle={{ color: "dimgray", fontSize: "14px" }}
        />
      </Space>
      <Space>
        {/* <RecentOrders /> */}
        {/* <DashboardChart /> */}
      </Space>
    </Space>
  );
}

function DashboardCard({
  title,
  value,
  icon,
  description,
  extraFeatures,
  titleStyle,
  descriptionStyle,
  featureStyle,
  valueStyle,
}) {
  const cardStyle = {
    background: "linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%)",

    padding: "16px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const commonStyle = {
    color: "gray",
    fontSize: "16px",
    font: "Roboto",
  };

  return (
    <Card style={cardStyle}>
      <Space direction="vertical" align="center">
        <Space direction="horizontal" align="center">
          {icon}
          <Typography.Text style={{ ...commonStyle, ...titleStyle }}>
            {title}
          </Typography.Text>
        </Space>
        <Typography.Text style={{ ...commonStyle, ...valueStyle }}>
          {value}
        </Typography.Text>
        {description && (
          <Typography.Text style={{ ...commonStyle, ...descriptionStyle }}>
            {description}
          </Typography.Text>
        )}
        {extraFeatures && (
          <Space direction="vertical">
            {extraFeatures.map((feature, index) => (
              <Typography.Text
                key={index}
                style={{ ...commonStyle, ...featureStyle }}
              >
                {feature}
              </Typography.Text>
            ))}
          </Space>
        )}
      </Space>
    </Card>
  );
}

export default Dashboard;
