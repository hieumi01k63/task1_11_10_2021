import "./action.scss";
import { Button, Checkbox, Table, Input } from "antd";
import { SyncOutlined, PlusOutlined, EditOutlined } from "@ant-design/icons";
import dataSource from "../../dummyData/tableData";
import { useState, useEffect } from "react";

//columns of table
const columns = [
  {
    title: "ID",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "TÊN HÀNH ĐỘNG",
    dataIndex: "taskName",
    key: "taskName",
  },
  {
    title: "MÔ TẢ HÀNH ĐỘNG",
    dataIndex: "taskDesc",
    key: "taskDesc",
    render: (dataIndex) => {
      const { TextArea } = Input;
      return <TextArea rows={2} defaultValue={dataIndex} allowClear />;
    },
  },
  {
    title: "THỜI GIAN TẠO",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "THAO TÁC",
    dataIndex: "",
    key: "action",
    render: () => {
      return (
        <Button type="primary" icon={<EditOutlined />} size="medium"></Button>
      );
    },
  },
];

//main component
const Action = () => {
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  //component did mount
  useEffect(() => {
    //write api fetching here...
    setData(dataSource);
  }, []);

  //functions
  const refreshTable = () => {
    //write api fetching here...
    setData(dataSource);
  };

  return (
    <div className="container">
      <div className="title">
        <span>DANH SÁCH HÀNH ĐỘNG</span>
      </div>

      <div className="tableCont">
        <div className="buttonCont">
          <Button type="primary" className="btn">
            {`Tất cả (${data.length})`}
          </Button>
          <Button
            type="primary"
            icon={<SyncOutlined />}
            className="btn"
            onClick={refreshTable}
          ></Button>
          <Button type="primary" icon={<PlusOutlined />} className="btn">
            Thêm và thiết lập
          </Button>
        </div>
        <Table
          dataSource={data}
          columns={columns}
          rowSelection={{ type: Checkbox }}
          pagination={{
            position: ["topLeft"],
            current: current,
            pageSize: pageSize,
            onChange: (page, pageSize) => {
              setCurrent(page);
              setPageSize(pageSize);
            },
          }}
        />
      </div>
    </div>
  );
};

export default Action;
