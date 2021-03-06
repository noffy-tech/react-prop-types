import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Button, Table } from "antd";

function MyComponent({ string, object, boolean, array, func, Component }) {
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      align: "center",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "center",
    },
  ];
  return (
    <Row justify="center">
      <Col span={24} style={{ textAlign: "center" }}>
        <b>string</b> :- Hello, {string}
      </Col>
      <Col span={24} style={{ textAlign: "center" }}>
        <b>Object</b> :- Full Name: {object.fullName}
      </Col>
      <Col span={24} style={{ textAlign: "center" }}>
        <b>Boolean</b> :- {boolean ? <p>Yes, I'm boolean</p> : null}
      </Col>
      <Col span={24} style={{ textAlign: "center", width: "300px" }}>
        <b>Array</b> :-
        <br />
        <Table
          dataSource={array}
          columns={columns}
          width={100}
          pagination={false}
        />
      </Col>
      <Col span={24}>
        <Component />
      </Col>
      <Button type="primary" onClick={() => func()}>
        Click me
      </Button>
    </Row>
  );
}

MyComponent.propTypes = {
  string: PropTypes.string.isRequired, // The prop should be a string
  object: PropTypes.object.isRequired, // The prop should be a object
  boolean: PropTypes.bool.isRequired, // The prop should be a boolean
  array: PropTypes.array.isRequired, // The prop should be a array
  func: PropTypes.func.isRequired, // The prop should be a function
  Component: PropTypes.elementType.isRequired, // The prop should be a component or element
};

export default MyComponent;
