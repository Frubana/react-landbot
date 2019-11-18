import React from "react";

interface IContext {
  data: Record<string, string | boolean>;
  setState: any;
}

export const ButtonVisible = React.createContext<IContext>({
  data: { key: "", bool: true },
  setState: () => {}
});
