export default function Log({ turns, players }) {
    return (
        
      <ol id='log'>
      <h2>Logs</h2>
        {turns.map((turn, index) => (
          <li key={index}>
            {`Turn ${index + 1}: ${players[turn.player]} selected row ${turn.square.row} and column ${turn.square.col}`}
          </li>
        ))}
      </ol>
      
    );
  }

