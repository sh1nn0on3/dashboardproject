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
        className="SideMenuVertical w-[250px] "
        mode="vertical"
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Dashboard",
            icon: <AppstoreOutlined />,
            key: "/",
          },
          {
            label: "Quản lý người dùng",
            key: "/Users",
            icon: <UserOutlined />,
          },
          {
            label: "Quản lý bài học",
            key: "/inventory",
            icon: <ShopOutlined />,
          },
          {
            label: "Thêm bài học mới",
            key: "/orders",
            icon: <ShoppingCartOutlined />,
          },
        ]}
      ></Menu>
    </div>
  );
}
export default SideMenu;
