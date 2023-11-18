// Inside your SideMenu component file

import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();

  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        style={{
          backgroundImage: 'linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%)', // Arka plan rengi
        }}
        items={[
          {
            label: "Home",
            icon: <AppstoreOutlined />,
            key: "/home",
          },
          {
            label: "Mentors",
            key: "/mentors",
            icon: <UserOutlined />,
          },
          {
            label: "Mentees",
            key: "/mentees",
            icon: <UserOutlined />,
          },
          {
            label: "Bridge",
            key: "/bridge",
            icon: <UserOutlined />,
          },
          
          {
            label: "My program",
            key: "/myprogram",
            icon: <ShoppingCartOutlined />,
          },
          {
            label: "My Mentees",
            key: "/mymentees",
            icon: <UserOutlined />,
          },
          {
            label: "Messaging",
            key: "/messaging",
            icon: <UserOutlined />,
          },
        ]}
      ></Menu>
    </div>
  );
}

export default SideMenu;
