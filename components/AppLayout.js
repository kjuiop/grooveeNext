import React, { useState } from "react";
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Layout, Menu, Breadcrumb, Drawer } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';


const { Header, Footer, Content } = Layout;
const { SubMenu } = Menu;

<style jsx>{`

.site-layout-content {
    min-height: 280px;
    padding: 24px;
    background: #fff;
}

#components-layout-demo-top .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top .logo {
    float: right;
    margin: 16px 0 16px 24px;
}

`}</style>

const headerPadding = {
    paddingLeft: 30,
    paddingRight: 30
};

const logo = {
    fontSize : 18
}

const colorWhite = {
    color : '#fff'
}

const contentWrapper = {
    minHeight : 747,
    padding: '0 30px',
    backgroundColor: '#fff'
}

const textAlignCenter = {
    textAlign : 'center'
}

const parentMenu = {
    position: 'relative'
}

const rightChildMenu = {
    position: 'absolute',
    right : '3px'
}


const AppLayout = ({ children }) => {
    return (
        <>
            <Layout className="layout">
                <Header style={headerPadding}>
                    <Menu theme="dark" mode="horizontal" style={parentMenu} >
                        <Menu.Item key="home" style={logo}>
                            <Link href="/"><a style={colorWhite}>🐝 Groovee</a></Link>
                        </Menu.Item>
                        <SubMenu key="SubMenu" 
                                 align="right"
                                 icon={<UnorderedListOutlined style={colorWhite} />}
                                 style={rightChildMenu}
                        >
                            <Menu.ItemGroup title="스터디 그룹" />
                            <Menu.ItemGroup title="로그인">
                            </Menu.ItemGroup>
                            <Menu.ItemGroup title="회원가입" />
                        </SubMenu>
                    </Menu>
                </Header>
                <Content style={contentWrapper}>
                    <div>{children}</div>
                </Content>
                <Footer style={textAlignCenter}>Copyright &copy; Groovee 2021</Footer>
            </Layout>
        </>
    )
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};



export default AppLayout;