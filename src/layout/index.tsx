import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { IMenuItem } from "./dto";
import { MENU_LIST } from "./menus";

const LayoutPage = () => {
  // 菜单是否折叠
  const [collapse, setCollapse] = useState<boolean>(false);
  // 菜单项数据
  const [menus, setMenus] = useState<IMenuItem[]>(MENU_LIST);

  // 菜单折叠时的操作
  const onCollapse = (collapsed: boolean) => {
    setCollapse(collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Sider
        width={300}
        collapsible
        collapsed={collapse}
        onCollapse={onCollapse}
      >
        <Menu theme="dark" mode="inline">
          {menus &&
            menus.map((menu_item, index) => {
              if (menu_item.children) {
                return <Menu.SubMenu key={menu_item.key} title={menu_item.name}>
                  {menu_item.children.map((item) => {
                    return (
                      <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.link}>{item.name}</Link>
                      </Menu.Item>
                    );
                  })}
                </Menu.SubMenu>;
              } else {
                return (
                  <Menu.Item key={menu_item.key} icon={menu_item.icon}>
                    <Link to={menu_item.link}>{menu_item.name}</Link>
                  </Menu.Item>
                );
              }
            })}
        </Menu>
      </Layout.Sider>
      <Layout>
        <Outlet />
      </Layout>
    </Layout>
  );
};

export default LayoutPage;
