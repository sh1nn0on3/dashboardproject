import { Avatar, Button, Modal, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getInventory } from "../../API";

function Inventory() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [confirmDeleteVisible, setConfirmDeleteVisible] = useState(false);

  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
      setDataSource(res.products);
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
    <Space size={20} direction="vertical" className="w-full">
      <Typography.Title level={4}>Inventory</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "stt",
            dataIndex: "index",
            width: "5%",
            align: "center",
          },
          {
            title: "Ảnh",
            dataIndex: "thumbnail",
            align: "center",
            width: "5%",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
          {
            title: "Tên bài học",
            width: "30%",
            // dataIndex: "title",
          },
          {
            title: "Mô tả",
            width: "30%",
            // dataIndex: "stock",
          },
          {
            title: "Rating",
            dataIndex: "rating",
            width: "15%",
            render: (rating) => {
              return <Rate value={rating} allowHalf disabled />;
            },
          },
          // {
          //   title: "Brand",
          //   // dataIndex: "brand",
          // },
          // {
          //   title: "Category",
          //   // dataIndex: "category",
          // },
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
                  Chi Tiết
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
        <p>Bạn có chắc chắn muốn xóa bài học này?</p>
      </Modal>
    </Space>
  );
}
export default Inventory;
