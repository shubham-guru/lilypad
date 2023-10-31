import React from 'react'
import { Row, Col, Typography } from 'antd'

import "./aboutStyle/firstSection.css"

const { Text } = Typography

const FirstSection = () => {
    return (
        <Row className='about-first-section-container'>
            <Col span={24} className='about-first-sub-container'>
                <Text className='about-first-title'>About Our Company</Text>
                <Text className='about-first-description'>Lilypad is dedicated to promote environmentally friendly and sustainable solutions.</Text>
            </Col>
        </Row>
    )
}

export default FirstSection