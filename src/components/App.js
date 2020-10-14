import React from 'react';

import Sidebar from './Sidebar';
import Calender from './Calender';
import ToolBar from './ToolBar';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App = () => {

  return (
    <DndProvider backend={HTML5Backend}>
      <div id="app">
        <div className="app-container">
          <Sidebar />
          <main>
            <ToolBar />
            <Calender />
          </main>
        </div>
      </div>
    </DndProvider>
  );
}

export default App;