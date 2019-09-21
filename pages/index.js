import { Form, Select, Row, Col } from "antd";
import Dua from "../jawaban/Dua";

const FormItem = Form.Item;
const Option = Select.Option;

export default () => (
  <div style={{ margin: "100px 20px" }}>
    <Row gutter={16}>
      <Col span={6}>
        <p>
          Soal Nomor 2 Ambilah data dari
          https://jsonplaceholder.typicode.com/posts dan
          https://jsonplaceholder.typicode.com/users dengan menggunakan Axios.
          Lalu gabungkan output posts dan users berdasarkan userId yang tepat.
        </p>
        <Dua />
      </Col>
    </Row>
  </div>
);
