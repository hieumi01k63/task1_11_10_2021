import { useState, useEffect } from "react";
import "./ActionDetail.scss";
import React from "react";
import { Input, Button, Table, Checkbox, Select } from "antd";
import { CopyOutlined, CloseOutlined } from "@ant-design/icons";
import dateData from "../../dummyData/dateData";
import dataSource from "../../dummyData/tableDataActDetail";

const column = [
  {
    title: "Thực thi",
    key: "key",
    render: (item) => {
      if (
        item.taskName !== "Lướt newsfeed trang chủ" &&
        item.taskName !== "Đăng bài lên trang cá nhân" &&
        item.taskName !== "Đăng bài viết vào group" &&
        item.taskName !== "Tương tác chéo tài khoản" &&
        item.taskName !== "Tương tác fanpage" &&
        item.taskName !== "Kết bạn với Tệp UID" &&
        item.taskName !== "Tham gia nhóm"
      ) {
        return <Checkbox />;
      }
    },
    width: 100,
  },
  {
    title: "Đặt lịch",
    key: "schedule",
    width: 150,
    render: (item) => {
      if (
        item.taskName === "Lướt newsfeed trang chủ" ||
        item.taskName === "Đăng bài lên trang cá nhân" ||
        item.taskName === "Đăng bài viết vào group" ||
        item.taskName === "Tương tác chéo tài khoản" ||
        item.taskName === "Tương tác fanpage" ||
        item.taskName === "Kết bạn với Tệp UID" ||
        item.taskName === "Tham gia nhóm"
      ) {
        return (
          <div style={{ display: "flex" }}>
            <Input style={{ marginRight: "5px" }}></Input>
            <Input></Input>
          </div>
        );
      }
    },
  },
  {
    title: "Hành động",
    dataIndex: "taskName",
    key: "taskName",
  },
  {
    title: "Số lần thực hiện",
    key: "timePerformed",
    render: () => <Input />,
    width: 100,
  },
  {
    title: "Nghỉ giữa 2 lần (s)",
    key: "delay",
    render: () => <Input />,
    width: 150,
  },
  {
    title: "Nội dung",
    key: "taskContent",

    render: (item) => {
      const { Option } = Select;
      if (item.taskContent) {
        return (
          <Select placeholder="Chọn nội dung" style={{ width: "100%" }}>
            {item.taskContent.map((content) => {
              return <Option value={content}>{content}</Option>;
            })}
          </Select>
        );
      }
    },
  },

  {
    key: "extraOptionCheckBox",
    width: 150,
    render: (item) => {
      if (item.extraOptionCheckBox) {
        return (
          <div style={{ display: "flex" }}>
            <Checkbox style={{ marginRight: "5px" }} />
            {item.extraOptionCheckBox}
          </div>
        );
      }
    },
  },
];

const ActionDetail = () => {
  const [date, setDate] = useState([]);
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    setDate(dateData);
    setDataTable(dataSource);
  }, []);

  return (
    <div className="container">
      <div className="title">
        <span>THIẾT LẬP CHIẾN DỊCH</span>
      </div>
      <div className="actionOverview">
        <div className="actionOverviewName">
          <span>Tên hành động:</span>
          <Input />
        </div>
        <div className="actionOverviewDesc">
          <span>Mô tả hành động:</span>
          <Input.TextArea rows={2} />
        </div>
      </div>
      <div className="buttons">
        <div className="buttonsDate">
          <Button className="buttonsDateBtn" type="primary" size="small">
            Mặc định
          </Button>
          {date.map((d, index) => {
            return (
              <Button className="buttonsDateBtn" type="default" size="small">
                {`Ngày ${index + 1}`} <CopyOutlined /> <CloseOutlined />
              </Button>
            );
          })}
        </div>

        <div className="buttonsAction">
          <Button
            className="buttonsActionBtn"
            type="primary"
            style={{ background: "#28a745" }}
          >
            Thêm ngày
          </Button>
          <Button className="buttonsActionBtn" type="primary">
            Cập nhật
          </Button>
          <Button className="buttonsActionBtn" type="dashed">
            Mẫu có sẵn
          </Button>
        </div>
      </div>

      <div className="tableCont">
        <Table
          dataSource={dataTable}
          columns={column}
          pagination={{ pageSize: 50 }}
        />
      </div>
    </div>
  );
};

export default ActionDetail;
