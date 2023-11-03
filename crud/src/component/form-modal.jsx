/* eslint-disable react/prop-types */
import { Button, Cascader, Form, Input, Modal } from "antd";
import { updateUser, createUser } from "../API";
import { useEffect, useState } from "react";
import { cascaderOptions } from "./option";

// eslint-disable-next-line react/prop-types
const FormModal = ({
  userId,
  title,
  open,
  data,
  handleCancel,
  handleOk,
  confirmLoading,
  submitText,
}) => {
  const [form] = Form.useForm();
  const [options, setoptions] = useState([]);
  const [stringData, setStringData] = useState("");

  handleOk(false);

  const handleSubmit = async (formData) => {
    console.log(formData);
    console.log(userId);
    if (formData !== null) {
      if (userId === null) {
        try {
          const response = await createUser(formData);
          console.log(response);
        } catch (error) {
          console.error("Data tidak berhasil di ubah ", error);
        }
      } else {
        try {
          const response = await updateUser(formData, userId);
          console.log(response);
        } catch (error) {
          console.error("Data tidak berhasil di ubah ", error);
        }
      }
      return handleOk(true);
    }
  };

  useEffect(() => {
    cascaderOptions().then((res) => {
      setoptions(res);
    });
  }, []);

  const onChange = (value) => {
    setStringData(value.join(","));
  };

  return (
    <>
      <Modal
        title={title}
        open={open}
        onOk={() => {
          handleOk();
        }}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={[
          <Button
            key="submit"
            className="text-blue-500 "
            loading={confirmLoading}
            onClick={() => {
              form.submit();
              handleOk();
            }}
          >
            {submitText}
          </Button>,
        ]}
      >
        <Form
          form={form}
          className="mt-5"
          layout="vertical"
          initialValues={
            userId !== null
              ? {
                  name: data.name,
                  email: data.email,
                  phone: data.phone,
                  address: data.address,
                }
              : undefined
          }
          onFinish={(formData) => handleSubmit(formData)}
        >
          <Form.Item rules={[{ required: true }]} label="Name" name="name">
            <Input placeholder="John Due" />
          </Form.Item>
          <Form.Item rules={[{ required: true }]} label="Email" name="email">
            <Input placeholder="john@gmail.com" />
          </Form.Item>
          <Form.Item
            rules={[
              { required: true },
              { min: 10 },
              { max: 12 },
            ]}
            label="Phone"
            name="phone"
          >
            <Input type="number" placeholder="08xxxxxxxxxx" />
          </Form.Item>
          <Form.Item
            rules={[{ required: true }]}
            label="Address"
            name="address"
          >
            <Cascader
              options={options}
              onChange={onChange}
              placeholder="Please select"
              value={stringData}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default FormModal;
