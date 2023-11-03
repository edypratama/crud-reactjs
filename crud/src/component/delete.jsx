/* eslint-disable react/prop-types */
import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { deleteUser } from "../API";

const { confirm } = Modal;

const DeleteUser = ({ userId }) => {
  const showPromiseConfirm = async () => {
    console.log(userId);
    try {
      const response = await deleteUser(userId);
      console.log(response);
    } catch (error) {
      console.error("data tidak dapat terhapus ", error);
    }

    confirm({
      title: "Do you want to delete these items?",
      icon: <ExclamationCircleOutlined />,
      content:
        "When clicked the OK button, this dialog will be closed after 1 second",
      okText: "Yes",
      okType: "danger",
      onOk() {
        return new Promise(() => {
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }).catch(() => console.log("Oops errors!"));
      },
      onCancel() {},
    });
  };

  return (
    <div className="">
      <Button
        onClick={showPromiseConfirm}
        danger
        className="delete pb-8 text-center"
      >
        <DeleteOutlined />
      </Button>
    </div>
  );
};

export default DeleteUser;
