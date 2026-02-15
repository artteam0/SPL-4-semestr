import React, { useState, useEffect } from "react";
import Display from "./dispaly";
import Button from "./button";
import History from "./history";

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<string[]>([]);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      const result = eval(input);

      if (!isFinite(result)) {
        throw new Error("Деление на 0");
      }

      const expression = `${input} = ${result}`;
      setHistory((prev) => [...prev, expression]);

      setInput(result.toString());
    } catch (error) {
      setInput("Ошибка!");
    }
  };

  const clearDisplay = () => {
    setInput("");
  };

  const clearLastSymbol = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const openHistory = () => {
    const historyContainer = document.querySelector(".history-container");
    if (historyContainer) {
      historyContainer.classList.toggle("visible");
    }
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const { key } = event;
      if ("0123456789.+-*/%".includes(key)) {
        handleClick(key);
      } else if (key === "Enter") {
        calculateResult();
      } else if (key === "Backspace") {
        clearLastSymbol();
      } else if (key === "Escape") {
        clearDisplay();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [input]);

  return (
    <div className={`calculator ${theme}`}>
      <button onClick={openHistory} className="history-toggle-btn">☭</button>
      <Display value={input} />
      <div className="button-grid">
        <Button value="AC" onClick={clearDisplay} className="gray-btn" />
        <Button value="⌫" onClick={clearLastSymbol} className="gray-btn" />
        <Button value="%" onClick={() => handleClick("%")} className="gray-btn" />
        <Button value="/" onClick={() => handleClick("/")} className="orange-btn" />
  
        <Button value="7" onClick={() => handleClick("7")} />
        <Button value="8" onClick={() => handleClick("8")} />
        <Button value="9" onClick={() => handleClick("9")} />
        <Button value="*" onClick={() => handleClick("*")} className="orange-btn" />
  
        <Button value="4" onClick={() => handleClick("4")} />
        <Button value="5" onClick={() => handleClick("5")} />
        <Button value="6" onClick={() => handleClick("6")} />
        <Button value="-" onClick={() => handleClick("-")} className="orange-btn" />
  
        <Button value="1" onClick={() => handleClick("1")} />
        <Button value="2" onClick={() => handleClick("2")} />
        <Button value="3" onClick={() => handleClick("3")} />
        <Button value="+" onClick={() => handleClick("+")} className="orange-btn" />
  
        <button onClick={toggleTheme} className="theme-toggle-btn">☯ </button>
        <Button value="0" onClick={() => handleClick("0")} />
        <Button value="." onClick={() => handleClick(".")} />
        <Button value="=" onClick={calculateResult} className="orange-btn" />
      </div>
  
      <History history={history} />
    </div>
  );
};

export default Calculator;
