import React from "react";
import { CounterStore } from "../stores/counter-store";

export const storesContext = React.createContext({
  counterStore: new CounterStore(),
});
