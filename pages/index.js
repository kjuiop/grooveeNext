import React from "react";
import AppLayout from "../components/AppLayout";
import styled from "styled-components";
import Link from 'next/link';
import { PageHeader , Button, Row, Col, Card, Avatar, Badge } from 'antd';
import { PlusOutlined, EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const studyButton = {
    paddingTop : 50
}

const pageHeader = {
    fontSize : 18,
    fontWeight : 'bold'
}

const cardWrapper = {
    padding : 40
}

const cardListWrapper = {
    width: '100%',
    position : 'relative'
}

const titleWrapper = {
    fontWeight : 'bold',
    fontSize : 18
}

const descriptionWrapper = {
    paddingBottom : 20
}

const statusBadge = {
    position : 'absolute',
    top : '6px',
    right : '20px'
}

const cardHeader = {
    paddingBottom : 10
}


const { Meta } = Card;

const Home = () => {
    return (
        <AppLayout>
            <Row>
                <Col xs={17} md={18}>
                    <PageHeader
                        style={pageHeader}
                    >
                        🤗 당신이 원하는 <br />스터디 그룹이 있을거에요.
                    </PageHeader>
                </Col>
                <Col xs={7} md={6}
                     style={studyButton}
                >
                    <Button type="primary">
                        <PlusOutlined />스터디그룹
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col xs={24} style={cardWrapper}>
                    <Card
                        style={cardListWrapper}
                        cover={
                            <img
                              alt="example"
                              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                        }
                        actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <div style={statusBadge}>
                            <Badge.Ribbon text="모집중" />
                        </div>
                        <div style={titleWrapper}>
                            실전! 웹사이트제작! Step by Step!
                        </div>
                        <div style={descriptionWrapper}>
                            퍼블리싱 핵심이론 PDF 교재 및 예제파일(HTML+CSS+FLEX+JQUERY)
                        </div>
                        <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title="Jake"
                        description="2021-10-16 13:13:18"
                        />
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xs={24} style={cardWrapper}>
                    <Card
                        style={cardListWrapper}
                        actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Row style={cardHeader}>
                            <Col xs={6}>
                                백엔드
                            </Col>
                            <Col xs={12}></Col>
                            <Col xs={6} align="right">
                                모집중
                            </Col>
                        </Row>
                        <div style={titleWrapper}>
                            실전! 웹사이트제작! Step by Step!
                        </div>
                        <div style={descriptionWrapper}>
                            퍼블리싱 핵심이론 PDF 교재 및 예제파일(HTML+CSS+FLEX+JQUERY)
                        </div>
                        <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title="Jake"
                        description="2021-10-16 13:13:18"
                        />
                    </Card>
                </Col>
            </Row>
        </AppLayout>
    );
}

export default Home;