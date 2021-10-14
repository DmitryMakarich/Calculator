import { makeAutoObservable } from "mobx";

export default class ThemeStore {
  darkMode: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  setMode = () => {
    this.darkMode = !this.darkMode;
  };
}
