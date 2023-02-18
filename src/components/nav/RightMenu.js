import React from "react";
import { Menu, Badge, Avatar } from "antd";
import { UserOutlined, CodeOutlined, LogoutOutlined , ShoppingOutlined,
        ShoppingCartOutlined, SettingOutlined,} from "@ant-design/icons";
  import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import { useHistory } from "react-router-dom";
const RightMenu = ({ mode }) => {

  const { SubMenu, Item } = Menu;
   let dispatch = useDispatch();
  let { user, cart } = useSelector((state) => ({ ...state }));

  let history = useHistory();

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };
 
  return (
    <Menu mode={mode}>
       
      <Menu.Item key="about"><Link to="/shop">Shop</Link></Menu.Item>
      <Menu.Item key="contact">Contact Us</Menu.Item>
      <Item key="cart" icon={<ShoppingCartOutlined />}>
        <Link to="/cart">
          <Badge count={cart.length} offset={[9, 0]}>
            Cart
          </Badge>
        </Link>
      </Item>
      {!user && (
        <Item key="login" icon={<UserOutlined />} className="float-right">
          <Link to="/login">Login</Link>
        </Item>
      )}
      {user && (
        <SubMenu
          icon={<SettingOutlined />}
          title={user.email && user.email.split("@")[0]}
          className="float-right"
        >
          {user && user.role === "subscriber" && (
            <Item>
              <Link to="/user/history">Dashboard</Link>
            </Item>
          )}

          {user && user.role === "admin" && (
            <Item>
              <Link to="/admin/dashboard">Dashboard</Link>
            </Item>
          )}

          <Item icon={<LogoutOutlined />} onClick={logout}>
            Logout
          </Item>
        </SubMenu>
      )}
    </Menu>
  );
};

export default RightMenu;
