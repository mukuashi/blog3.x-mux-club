import { connect } from "dva";
import styles from "./index.scss";
import { Button } from "antd";
import Example from "./components/Example";
import { Rate, Row, Col } from "antd";

function App(props) {
  const exampleData = {
    list: props.pageData.list,
    handleClick: () => {
      props.dispatch({
        type: "example/delete",
        payload: {}
      });
    }
  };
  return (
    <div className={styles.normal}>
      <Row>
        <Col span={12}>
          搜索
        </Col>
        <Col span={12}>
          <Rate allowHalf defaultValue={5} />
          <h2>{props.pageData.text}</h2>
          <Example {...exampleData} />
          <Button
            type="primary"
            onClick={() => {
              props.dispatch({
                type: "example/update"
              });
            }}
          >
            点击
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default connect(state => {
  return {
    pageData: state.example
  };
})(App);
