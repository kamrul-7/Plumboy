import { Button, Card, Checkbox, Form, Input } from 'antd';
import Meta from 'antd/es/card/Meta';
import TextArea from 'antd/es/input/TextArea';
import { Link } from 'react-router-dom';
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const Products = () => {
    return (
        <div>
            <h2 className='lg:text-4xl text-2xl font-bold text-red-500 hover:text-green-500 text-center mt-8'>Our Products</h2>


            <div className=''>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:ml-12'>
                    <Card className='mt-8 mx-auto '
                        hoverable
                        style={{ width: 340 }}
                        cover={<img alt="example" src="https://images.pexels.com/photos/615326/water-tap-black-and-white-macro-615326.jpeg?auto=compress&cs=tinysrgb&w=600" />}
                    >
                        <Meta title="Europe Street beat" description="www.Plumboy.com" />
                    </Card>
                    <Card className='mt-8 mx-auto'
                        hoverable
                        style={{ width: 340 }}
                        cover={<img alt="example" src="https://images.pexels.com/photos/4022782/pexels-photo-4022782.jpeg?auto=compress&cs=tinysrgb&w=600" />}
                    >
                        <Meta title="Europe Street beat" description="www.Plumboy.com" />
                    </Card>
                    <Card className='mt-8 mx-auto'
                        hoverable
                        style={{ width: 340 }}
                        cover={<img alt="example" src="https://images.pexels.com/photos/6899546/pexels-photo-6899546.jpeg?auto=compress&cs=tinysrgb&w=600" />}
                    >
                        <Meta title="Europe Street beat" description="www.Plumboy.com" />
                    </Card>
                </div>
            </div>
            <div className='mt-8 pt-4 bg-white w-72 lg:w-full lg:mx-auto mx-auto rounded-md'>
                <h1 className='text-center text-xl font-bold mb-8 lg:text-4xl text-red-500 hover:text-green-500 bg-white'>Contact Us</h1>
                <>
                    <div className='lg:mr-32 mx-auto'>
                        <Form
                            name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 12,
                            }}

                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="on"
                        >
                            <Form.Item
                                label="Name"
                                name="Name"
                                placeholder='Enter your name'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Name!',

                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Email"
                                name="Email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input yourEmail!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>




                            <Form.Item label="Your Comment">
                                <TextArea rows={4} />
                            </Form.Item>

                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                wrapperCol={{
                                    offset: 8,
                                    span: 12,
                                }}
                            >

                            </Form.Item>

                            <Form.Item

                            >

                            </Form.Item>

                        </Form>

                    </div>

                </>

            </div>
        </div>
    );
};

export default Products;