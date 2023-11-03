/* eslint-disable react/no-unknown-property */
import { Space, Table } from "antd";
import { getallUser } from "../API";
import { useEffect, useState } from "react";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import DeleteUser from "./delete";
import ActionButton from "./action-button";

export default function UserTable() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [dataSource, setdataSource] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    getallUser().then((data) => {
      setloading(false);
      setdataSource(data);
    });
  }, []);

  return (
    <div className="mt-10 flex-col items-center flex justify-center user-table">
      <div
      className="create-btn"
        style={{
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "10px",
          marginLeft: "1010px"
        }}
      >
        <ActionButton title={"Create User"} icon={<PlusOutlined />} userId={null} />
      </div>
      <Table
        loading={loading}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
        style={{ width: "80%" }}
        columns={[
          {
            title: "Name",
            dataIndex: "name",
            width: 120,
          },
          {
            title: "Email",
            dataIndex: "email",
            width: 80,
          },
          {
            title: "Phone",
            dataIndex: "phone",
            width: 110,
          },
          {
            title: "Address",
            dataIndex: "address",
            width: 200,
          },
          {
            title: "Action",
            key: "action",
            render: (record) => (
              <Space size="middle">
                <DeleteUser userId={record.id} />
                <ActionButton  title={"Edit User"} icon={<EditOutlined />} userId={record.id} />
              </Space>
            ),
            width: 100,
          },
        ]}
      ></Table>
    </div>
  );
}
