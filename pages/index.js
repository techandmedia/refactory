import { useReducer } from "react";
import { Row, Col, Radio } from "antd";
import Dua from "../jawaban/Dua";
import Lima from "../jawaban/Lima";

const text = `
async function readDir(value){
  // do something with value
  return await valueChanged
}
`;

function hasilReducer(state, action) {
  const { type } = action;
  switch (type) {
    case 1:
      return {
        value: 1,
        component: (
          <React.Fragment>
            <p>Hasil 1</p>
            <span>{text}</span>
          </React.Fragment>
        )
      };
    case 2:
      return {
        value: 2,
        component: (
          <React.Fragment>
            <p>
              Soal Nomor 2 Ambilah data dari
              https://jsonplaceholder.typicode.com/posts dan
              https://jsonplaceholder.typicode.com/users dengan menggunakan
              Axios. Lalu gabungkan output posts dan users berdasarkan userId
              yang tepat.
            </p>
            <Dua />
          </React.Fragment>
        )
      };
    case 3:
      return { value: 3, component: <h1>Belum ada Hasil</h1> };
    case 4:
      return { value: 4, component: <h1>Belum ada Hasil</h1> };
    case 5:
      return {
        value: 5,
        component: (
          <React.Fragment>
            <p>Soal Nomor 5</p>
            <Lima />
          </React.Fragment>
        )
      };

    default:
      break;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(hasilReducer, {
    value: 1,
    component: (
      <React.Fragment>
        <p>Hasil 1</p>
        <span>{text}</span>
      </React.Fragment>
    )
  });

  function handleChange(e) {
    dispatch({ type: e.target.value });
  }

  return (
    <div style={{ margin: "100px 20px" }}>
      <Radio.Group onChange={handleChange} value={state.value}>
        <Radio value={1} style={{ marginRight: 15 }}>
          Hasil 1
        </Radio>
        <Radio value={2} style={{ marginRight: 15 }}>
          Hasil 2
        </Radio>
        <Radio value={3} style={{ marginRight: 15 }}>
          Hasil 3
        </Radio>
        <Radio value={4} style={{ marginRight: 15 }}>
          Hasil 4
        </Radio>
        <Radio value={5} style={{ marginRight: 15 }}>
          Hasil 5
        </Radio>
      </Radio.Group>
      <Row>
        <Col span={24}>{state.component}</Col>
      </Row>
    </div>
  );
}
