import React from "react";
import AppLayout from "../components/AppLayout";
import { Form, Input, Button, Checkbox, Row, Col, PageHeader } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const wrapper = {
}

const pageHeader = {
    fontSize : 24,
    fontWeight : 'bold',
    marginBottom : 20
}

const loginFormWrapper = {
    padding : 30,
    marginTop : 100
}

const loginFormStyle = {
    maxWidth : 300,
    margin : '0 auto'
}

const floatRight = {
    float : 'right'
}

const loginButton = {
    width : '100%'
}

const loginForm = () => {

    return (
        <AppLayout>
            <div style={wrapper}>
                <Row style={loginFormWrapper}>
                    <Col xs={24}>
                        <PageHeader
                            style={pageHeader}
                        >
                            <Row>
                                <Col xs={8}></Col>
                                <Col xs={8}>
                                    🐝 로그인
                                </Col>
                                <Col xs={8}></Col>
                            </Row>
                        </PageHeader>
                    </Col>
                    <Col xs={24}>
                        <Form
                            name="normal_login"
                            style={loginFormStyle}
                            initialValues={{ remember: true }}
                        >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input your Username!' }]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your Password!' }]}
                            >
                                <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item style={{ marginBottom : 0}}>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <a style={floatRight} href="">
                                    Forgot password
                                </a>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" style={loginButton}>
                                Log in
                                </Button>
                                Or <a href="">register now!</a>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div>
        </AppLayout>
    )
}


export default loginForm;