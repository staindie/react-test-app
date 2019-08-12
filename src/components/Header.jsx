import React from 'react';
import { Input, Layout } from 'antd';

const { Header: AntHeader } = Layout;
const { Search } = Input;

const Header = ({ defaultValue, handleSearch }) => (
    <AntHeader className="main__header header" title="Youtube Video Search">
        <div className="header__content">
            <h4 className="header__title">Search videos</h4>
            <Search
                defaultValue={defaultValue}
                onSearch={handleSearch}
            />
        </div>
    </AntHeader>
);

export default Header;