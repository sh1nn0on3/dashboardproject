import { Avatar, Button, Modal, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getUsers, getInventory } from "../../API";

function Users() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [confirmDeleteVisible, setConfirmDeleteVisible] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUsers().then((res) => {
      setDataSource(res.users);
      setLoading(false);
    });
  }, []);

  // Xóa người dùng
  const handleDelete = (record) => {
    setSelectedRecord(record);
    setConfirmDeleteVisible(true);
  };

  // Xác nhận xóa người dùng
  const confirmDelete = () => {
    // Xử lý sự kiện xóa người dùng
    const newData = dataSource.filter((item) => item.id !== selectedRecord.id);
    setDataSource(newData);
    setConfirmDeleteVisible(false);
  };

  // Hủy xóa người dùng
  const cancelDelete = () => {
    setConfirmDeleteVisible(false);
  };

  // Sửa người dùng
  const handleEdit = (record) => {
    // Xử lý sự kiện sửa người dùng
    console.log("Sửa người dùng:", record);
  };

  return (
    <>
      <Space size={20} direction="vertical" className="w-full">
        <Typography.Title level={4}>User</Typography.Title>
        <Table
          loading={loading}
          columns={[
            {
              title: "stt",
              dataIndex: "title",
              width: "5%",
              align: "center",
            },
            {
              title: "Ảnh",
              dataIndex: "thumbnail",
              align: "center",
              render: (link) => {
                return <Avatar src={link} />;
              },
            },
            {
              title: "Tên người dùng",
              dataIndex: "price",
              width: "25%",
              // render: (value) => <span>${value}</span>,
            },
            {
              title: "Email",
              dataIndex: "discountedPrice",
              width: "25%",
              // render: (value) => <span>${value}</span>,
            },
            {
              title: "Rank",
              dataIndex: "quantity",
              align: "center",
              width: "10%",
            },
            {
              title: "Trạng thái ",
              dataIndex: "quantity",
              align: "center",
              width: "10%",
            },
            {
              title: "Hành động",
              key: "action",
              align: "center",
              render: (_, record) => (
                <Space size="40">
                  <Button
                    className="text-black "
                    type="primary"
                    onClick={() => handleEdit(record)}
                  >
                    Sửa
                  </Button>
                  <Button type="danger" onClick={() => handleDelete(record)}>
                    Xóa
                  </Button>
                </Space>
              ),
            },
          ]}
          dataSource={dataSource}
          pagination={{
            pageSize: 10,
          }}
        ></Table>
        <Modal
          title="Xác nhận xóa"
          visible={confirmDeleteVisible}
          onOk={confirmDelete}
          onCancel={cancelDelete}
        >
          <p>Bạn có chắc chắn muốn xóa người dùng này?</p>
        </Modal>
      </Space>
    </>
  );
}
export default Users;
