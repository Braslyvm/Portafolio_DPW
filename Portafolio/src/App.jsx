import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/overrides.css";
import "./styles/components.css";


export default function App() {
  const [collapsed, setCollapsed] = useState(true);


  return (
    <div className="app-layout">
      <Sidebar onCollapse={setCollapsed} />
      <div className={`right-section ${collapsed ? "collapsed" : "expanded"}`}>
        <MainContent />
      </div>
    </div>
  );
}
