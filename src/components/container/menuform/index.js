import React from 'react'
import './index.scss'
import { Form, Input, Button, Radio } from 'antd'

const MenuForm = (props) => {
    const [form] = Form.useForm();

    const menubarObj = props.menubarObj
    form.setFieldsValue(menubarObj)

    const onFinish = values => {
        // if (!values.parentId) values.parentId = parentId
        // console.log(gData);
        props.changeMenubarItem(values)
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

    let formEl = props.menuForm ?
        <Form
            labelAlign="left"
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
        >
            <Form.Item
                name="id"
                hidden
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="key"
                hidden
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="parentId"
                hidden
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="title"
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
                name="funUrl"
                label="功能url"
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="funId"
                label="功能标识"
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="icon1"
                label="图标1"
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="icon2"
                label="图标2"
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="icon3"
                label="图标3"
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="operateType"
                label="操作类型"
                rules={[
                    {
                        required: true,
                        message: '请选择操作类型!',
                    },
                ]}
            >
                <Radio.Group>
                    <Radio.Button value="跳转">跳转</Radio.Button>
                    <Radio.Button value="执行js">执行js</Radio.Button>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                name="isEnable"
                label="是否启用"
                rules={[
                    {
                        required: true,
                        message: '请选择是否启用!',
                    },
                ]}
            >
                <Radio.Group>
                    <Radio value={1}>是</Radio>
                    <Radio value={0}>否</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                name="extend1"
                label="扩展字段1"
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="extend2"
                label="扩展字段2"
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="extend3"
                label="扩展字段3"
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="classification"
                label="分类"
            >
                <Input />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    保存
        </Button>
            </Form.Item>
        </Form> : null


    return (
        <div>
            {formEl}
        </div>
    )
}

export default MenuForm
