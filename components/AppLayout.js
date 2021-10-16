import React, { useState } from "react";
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Footer, Content } = Layout;


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
    padding: '0 50px',
    backgroundColor: 'white'
}

const textAlignCenter = {
    textAlign : 'center'
}


const AppLayout = ({ children }) => {
    return (
        <>
            <Layout className="layout">
                <Header style={headerPadding}>
                    <Menu theme="dark" mode="horizontal">
                        <Menu.Item key="home" style={logo}>
                            <Link href="/"><a style={colorWhite}>🐝 Groovee</a></Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content style={contentWrapper}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-content">{children}</div>
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