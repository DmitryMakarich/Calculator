import { makeAutoObservable } from "mobx";
import { e, evaluate } from "mathjs";

export default class BufferStore {
  firstValue: number = 0;
  secondValue: number = 0;
  values: Array<string> = [];
  displayValue: string = "0";
  operation: string = "";
  memory: Array<number> = [];
  isPortrait: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  setValue = (symbol: string) => {
    if (
      this.values.length === 0 &&
      (symbol === "+" ||
        symbol === "-" ||
        symbol === "*" ||
        symbol === "/" ||
        symbol === "." ||
        symbol === "^" ||
        symbol === "^2")
    ) {
      return;
    }

    if (this.values.length === 8) {
      return;
    }

    if (symbol === "\u{221A}") {
      symbol = "sqrt(";
    }

    this.values.push(symbol);
    this.displayValue = this.values.join("");

    try {
      this.firstValue = parseFloat(this.displayValue);
    } catch {
      return;
    }
  };

  reset = () => {
    this.displayValue = "0";
    this.firstValue = 0;
    this.secondValue = 0;
    this.values = [];
  };

  delete = () => {
    this.values.pop();
    this.displayValue = this.values.join("");
    if (this.values.length === 0) {
      this.displayValue = "0";
    }
  };

  inversion = () => {
    if (this.values[0] !== "-") {
      console.log("-");
      this.values.unshift("-");
      this.displayValue = this.values.join("");
      this.firstValue = parseFloat(this.displayValue);
      return;
    }

    if (this.values[0] === "-") {
      console.log("+");
      this.values.splice(0, 1);
      this.displayValue = this.values.join("");
      this.firstValue = parseFloat(this.displayValue);
      return;
    }
  };

  setBrackets = () => {
    this.displayValue
      .toString()
      .split("")
      .map((elem) => {
        if (elem === "(") {
          this.values.push(")");
        }
        if (elem === ")") {
          this.values.pop();
        }
      });

    this.displayValue = this.values.join("");
  };

  calculate = () => {
    this.setBrackets();

    try {
      if (this.displayValue.includes("lg(")) {
        this.displayValue = evaluate([
          "lg(x) = log(x,10)",
          this.displayValue,
        ])[1];

        if (this.displayValue.toString().length > 7) {
          this.displayValue = this.displayValue.toString().slice(0, 8);
        }
        
        this.firstValue = parseFloat(this.displayValue);
        this.values = this.displayValue.toString().split("");
        return;
      }

      if (this.displayValue.includes("ln(")) {
        this.displayValue = evaluate([
          "ln(x) = log(x,e)",
          this.displayValue,
        ])[1];

        if (this.displayValue.toString().length > 7) {
          this.displayValue = this.displayValue.toString().slice(0, 8);
        }

        this.firstValue = parseFloat(this.displayValue);
        this.values = this.displayValue.toString().split("");
        return;
      }

      this.displayValue = evaluate(this.displayValue);
    } catch {
      this.displayValue = "Ошибка";
      this.values = [];
      this.values.push("Ошибка");
      this.firstValue = 0;
    }

    if (this.displayValue.toString().length > 7) {
      this.displayValue = this.displayValue.toString().slice(0, 8);
    }

    this.firstValue = parseFloat(this.displayValue);
    this.values = this.displayValue.toString().split("");
  };

  cleanMemory = () => {
    this.memory = [];
  };

  pushToMemory = () => {
    if (this.displayValue !== "0") {
      this.memory.push(parseFloat(this.displayValue));
    }
  };

  popFromMemory = () => {
    if (this.memory.length !== 0) {
      this.memory.pop();
    }
  };

  readMemory = () => {
    if (this.memory.length !== 0) {
      this.firstValue = this.memory[this.memory.length - 1];
      this.displayValue = this.firstValue.toString();
      this.values = this.displayValue.toString().split("");
    }
  };

  factorial = () => {
    if (this.firstValue > 170) {
      this.firstValue = Number.POSITIVE_INFINITY;
    } else if (!Number.isInteger(this.firstValue) || this.firstValue < 0) {
      this.displayValue = "ERROR";
    } else {
      let res = 1;
      for (let i = 1; i <= this.firstValue; i++) {
        res *= i;
      }
      this.firstValue = res;
      this.displayValue = this.firstValue.toString();
      this.values = this.displayValue.toString().split("");
    }
  };

  getRandom = () => {
    this.firstValue = Math.random();
    this.displayValue = this.firstValue.toFixed(5);
  };

  getExp = () => {
    this.firstValue = Math.E;
    this.displayValue = this.firstValue.toFixed(5);
  };

  getPi = () => {
    this.firstValue = Math.PI;
    this.displayValue = this.firstValue.toFixed(5);
  };
}
