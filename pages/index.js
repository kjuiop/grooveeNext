import React from "react";
import AppLayout from "../components/AppLayout";
import styled from "styled-components";
import Link from 'next/link';
import { Form, Input, Button } from 'antd';


const ButtonWrapper = styled.div`
    marginTop: 200px;
`;

const Home = () => {
    return (
        <AppLayout>
            <div>
                <ButtonWrapper>
                    <Button type="primary" htmlType="submit" loading={false} >로그인</Button>
                    <Link href="/signup"><a><Button>회원가입</Button></a></Link>
                </ButtonWrapper>
            </div>
        </AppLayout>
    );
}

export default Home;