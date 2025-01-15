const ConsoleDisplay = ({ messages }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-2 max-h-[200px] overflow-y-auto">
      {messages.map((msg, index) => (
        <div key={index} className="font-mono text-sm">
          {JSON.stringify(msg)}
        </div>
      ))}
    </div>
  );
};

export default ConsoleDisplay;
