import React from "react";
import { BellFilled, BellOutlined, MailOutlined } from "@ant-design/icons";
import { Badge, Drawer, Image, List, Space, Typography, Button } from "antd";
import { useEffect, useState } from "react";
import { getComments, getOrders } from "../../API";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Item from "antd/es/list/Item";
import { ListItem } from "@mui/material";

function AppHeader() {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments);
    });
    getOrders().then((res) => {
      setOrders(res.products);
    });
  }, []);

  const appHeaderStyle = {
    backgroundImage: "linear-gradient(60deg, #29323c 0%, #485563 100%)",

    padding: "16px",
  };

  return (
    <div className="AppHeader" style={appHeaderStyle}>
      <Image width={40}></Image>
      {/* <Button>aaa</Button>
      <Button>aaa</Button> */}

      <Space>
        {/* <Badge count={comments.length} dot>
          <MailOutlined
            style={{ fontSize: 24 }}
            onClick={() => {
              setCommentsOpen(true);
            }}
          />
        </Badge> */}
        <Badge count={orders.length}>
          <BellOutlined
            style={{ fontSize: 24 }}
            onClick={() => {
              setNotificationsOpen(true);
            }}
          />
        </Badge>
        <Space />

        <Button
          variant="contained"
          style={{
            backgroundColor: "black",
            color: "white",
            border: "none",
          }}
        >
          Connect Wallet
        </Button>
      </Space>
      {/* <Drawer
        title="Comments"
        open={commentsOpen}
        onClose={() => {
          setCommentsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={comments}
          renderItem={(item) => {
            return <List.Item>{item.body}</List.Item>;
          }}
        ></List>
      </Drawer> */}
      <Drawer
        title="Notifications"
        open={notificationsOpen}
        onClose={() => {
          setNotificationsOpen(false);
        }}
        maskClosable
      >
        <Item>
          <Typography.Text strong> X </Typography.Text> appointment has been
          started!
        </Item>
        <Item>
          <Typography.Text strong> Y </Typography.Text> appointment has been
          ended!
        </Item>
      </Drawer>
    </div>
  );
}

export default AppHeader;
