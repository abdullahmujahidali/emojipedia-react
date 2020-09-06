import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(newEntry) {
  return (
    <Entry
      id={newEntry.id}
      emoji={newEntry.emoji}
      name={newEntry.name}
      meaning={newEntry.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
