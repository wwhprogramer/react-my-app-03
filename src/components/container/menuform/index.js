import React from 'react'
import './index.scss'
import { Form, Input, Button, Radio } from 'antd'

const MenuForm = (props) => {
    const [form] = Form.useForm();

    const parentId = props.parentId

    const onFinish = values => {
        console.log('Received values of form: ', values, parentId);
    };

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };

    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 8,
            },
        },
    };


    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
        >
            <Form.Item
                name="text"
                label="标题"
                rules={[
                    {
                        required: true,
                        message: '请输入标题!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="text"
                label="功能url"
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="text"
                label="功能标识"
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="text"
                label="图标1"
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="text"
                label="图标2"
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="text"
                label="图标3"
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="text"
                label="操作类型"
            >
                <Radio.Group defaultValue={'跳转'}>
                    <Radio.Button value="跳转">跳转</Radio.Button>
                    <Radio.Button value="执行js">执行js</Radio.Button>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                name="text"
                label="是否启用"
            >
                <Radio.Group defaultValue={'1'}>
                    <Radio value="1">是</Radio>
                    <Radio value="0">否</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                name="text"
                label="扩展字段1"
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="text"
                label="扩展字段2"
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="text"
                label="扩展字段3"
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="text"
                label="分类"
            >
                <Input />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    保存
                </Button>
            </Form.Item>
        </Form>
    )
}

export default MenuForm
