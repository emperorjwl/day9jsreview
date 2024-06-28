"use client";
import { Typography, Card, Result, Input, Button, message } from "antd";
import { useState } from "react";

export default function GuessingGame() {
  const { Title } = Typography;

  let [fn, setFn] = useState(1);
  let [sn, setSn] = useState(8);
  let [answer, setAnswer] = useState("");

  function generateNewNumbers() {
    setFn(Math.ceil(Math.random() * 100));
    setSn(Math.ceil(Math.random() * 100));
    setAnswer("");
  }

  function handleInput(e) {
    setAnswer(e.target.value);
  }

  //alter the code so that the operator will change when you click "generate question".s

  function handleCheck() {
    const numericAnswer = Number(answer);
    if (fn + sn === numericAnswer) {
      message.success("Correct answer!");
    } else {
      message.error(`Wrong Answer. It's ${fn + sn}`);
    }
  }

  return (
    <main>
      <Card title="Guessing Game">
        <Title>Try and get the answer!</Title>
        <Result
          title={`What's ${fn} + ${sn} ?`}
          extra={<Input onChange={handleInput} value={answer} />}
        />
        <Button onClick={generateNewNumbers} style={{ margin: "0 8px 8px 0" }}>
          Generate Question
        </Button>
        <Button onClick={handleCheck} type="primary">
          Check Answer
        </Button>
      </Card>
    </main>
  );
}
