import { createBrowserRouter } from "react-router-dom";
import { Module } from "./type";

const router = createBrowserRouter([
  {
    path: '/',
    lazy: async () => {
      const module: Module = await import('./../components/pages/LobbyPage');
      return { Component: module.default };
    }
  },
  {
    path: '/game',
    lazy: async () => {
      const module: Module = await import('./../components/pages/GamePage');
      return { Component: module.default };
    }
  }
]);

export default router;