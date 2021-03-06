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
                        ๐ค ๋น์ ์ด ์ํ๋ <br />์คํฐ๋ ๊ทธ๋ฃน์ด ์์๊ฑฐ์์.
                    </PageHeader>
                </Col>
                <Col xs={7} md={6}
                     style={studyButton}
                >
                    <Button type="primary">
                        <PlusOutlined />์คํฐ๋๊ทธ๋ฃน
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
                            <Badge.Ribbon text="๋ชจ์ง์ค" />
                        </div>
                        <div style={titleWrapper}>
                            ์ค์ ! ์น์ฌ์ดํธ์ ์! Step by Step!
                        </div>
                        <div style={descriptionWrapper}>
                            ํผ๋ธ๋ฆฌ์ฑ ํต์ฌ์ด๋ก  PDF ๊ต์ฌ ๋ฐ ์์ ํ์ผ(HTML+CSS+FLEX+JQUERY)
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
                                ๋ฐฑ์๋
                            </Col>
                            <Col xs={12}></Col>
                            <Col xs={6} align="right">
                                ๋ชจ์ง์ค
                            </Col>
                        </Row>
                        <div style={titleWrapper}>
                            ์ค์ ! ์น์ฌ์ดํธ์ ์! Step by Step!
                        </div>
                        <div style={descriptionWrapper}>
                            ํผ๋ธ๋ฆฌ์ฑ ํต์ฌ์ด๋ก  PDF ๊ต์ฌ ๋ฐ ์์ ํ์ผ(HTML+CSS+FLEX+JQUERY)
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