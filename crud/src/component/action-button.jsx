/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { Button } from "antd";
import { useState } from "react";
import FormModal from "./form-modal";
import { getsingleUser } from "../API";

const ActionButton = ({ userId, icon, title }) => {
  const [Open, setOpen] = useState(false);
  const [data, setdata] = useState([]);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [submitText, setSubmitText] = useState("Submit");

  const showModal = async () => {
    if (userId) {
      const response = await getsingleUser(userId);
      setdata(response);
      setOpen(true);
    } else {
      setOpen(true);
    }
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const handleOk = (con) => {
    if (con === true) {
      setSubmitText("Saving Data");
      setConfirmLoading(true);
      setTimeout(() => {
        setOpen(false);
        setConfirmLoading(false);
        window.location.reload();
      }, 1000);
    }
  };

  return (
    <>
      <Button
        onClick={showModal}
        className="edit pb-8 text-center border-blue-500 text-blue-500"
      >
        {icon}
      </Button>

      <FormModal
        title={title}
        userId={userId}
        data={data}
        handleCancel={handleCancel}
        open={Open}
        handleOk={handleOk}
        confirmLoading={confirmLoading}
        submitText={submitText}
      />
    </>
  );
};

export default ActionButton;
