import React from 'react';
import { Input, Layout, Menu } from 'antd';

const { Header: AntHeader } = Layout;
const { Item } = Menu;
const { Search } = Input;
const defaultText = 'Default text';

const Header = ({ handleSubmit }) => {
    return (
        <AntHeader className="main__header header" title="Youtube Video Search">
            <div className="header__content">
                <Menu
                    className="header__menu"
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                >
                    <Item key="1">Search Mode</Item>
                    <Item key="2">Run by link</Item>
                </Menu>
                <Search defaultValue={defaultText} onSearch={handleSubmit} />
            </div>
        </AntHeader>
    )
};

export default Header;