const TurnoverRateSimulator = () => {
    const [locations, setLocations] = useState([
      { id: 1, name: "Location #1", turnover: 2.4, target: 2.4, inventory: 1000, sales: 2400 },
      { id: 2, name: "Location #2", turnover: 2.1, target: 2.3, inventory: 1200, sales: 2520 },
      { id: 3, name: "Location #3", turnover: 3.2, target: 2.7, inventory: 800, sales: 2560 },
      { id: 4, name: "Location #4", turnover: 2.7, target: 2.5, inventory: 900, sales: 2430 },
      { id: 5, name: "Location #5", turnover: 1.5, target: 2.0, inventory: 1350, sales: 2025 }
    ]);
    
    const [budget, setBudget] = useState(10000);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [round, setRound] = useState(1);
    
    const strategies = [
      { 
        id: 1, 
        name: "Staff Training", 
        cost: 1500, 
        effect: { type: "sales", increase: 0.15 }
      },
      { 
        id: 2, 
        name: "Marketing Campaign", 
        cost: 2000, 
        effect: { type: "sales", increase: 0.20 }
      },
      { 
        id: 3, 
        name: "Inventory Reduction", 
        cost: 800, 
        effect: { type: "inventory", decrease: 0.10 }
      },
      { 
        id: 4, 
        name: "Product Bundling", 
        cost: 1200, 
        effect: { type: "sales", increase: 0.12 }
      },
      { 
        id: 5, 
        name: "Inventory Transfer", 
        cost: 500, 
        effect: { type: "inventory", decrease: 0.08 }
      }
    ];
    
    const applyStrategy = (strategy) => {
      if (!selectedLocation || budget < strategy.cost) return;
      
      const newLocations = [...locations];
      const locIndex = newLocations.findIndex(l => l.id === selectedLocation.id);
      
      if (strategy.effect.type === "sales") {
        const newSales = newLocations[locIndex].sales * (1 + strategy.effect.increase);
        newLocations[locIndex].sales = Math.round(newSales);
      } else if (strategy.effect.type === "inventory") {
        const newInventory = newLocations[locIndex].inventory * (1 - strategy.effect.decrease);
        newLocations[locIndex].inventory = Math.round(newInventory);
      }
      
      // Update turnover rate
      newLocations[locIndex].turnover = +(newLocations[locIndex].sales / newLocations[locIndex].inventory).toFixed(1);
      
      setLocations(newLocations);
      setBudget(budget - strategy.cost);
      setSelectedLocation(null);
    };
    
    const nextRound = () => {
      if (round >= 5) {
        setGameOver(true);
        return;
      }
      
      setRound(round + 1);
      setBudget(budget + 5000); // New budget for next round
    };
    
    return (
      <div className="game-container">
        <h2>Turnover Rate Optimizer</h2>
        <div className="game-header">
          <div>Budget: ${budget}</div>
          <div>Round: {round}/5</div>
        </div>
        
        <p>Improve turnover rates at each location by implementing strategies. Get all locations to meet or exceed target rates.</p>
        
        <div className="locations-grid">
          {locations.map(location => (
            <div 
              key={location.id} 
              className={`location-box ${
                location.turnover >= location.target ? 'success' : 'warning'
              } ${selectedLocation && selectedLocation.id === location.id ? 'selected' : ''}`}
              onClick={() => setSelectedLocation(location)}
            >
              <h3>{location.name}</h3>
              <div className="turnover">
                <span>Turnover: {location.turnover}x</span>
                <span className="target">Target: {location.target}x</span>
              </div>
              <div className="inventory-sales">
                <div>Inventory: ${location.inventory}</div>
                <div>Sales: ${location.sales}</div>
              </div>
            </div>
          ))}
        </div>
        
        {selectedLocation && (
          <div className="strategies-panel">
            <h3>Select Strategy for {selectedLocation.name}</h3>
            <div className="strategies-grid">
              {strategies.map(strategy => (
                <div 
                  key={strategy.id}
                  className={`strategy ${budget < strategy.cost ? 'disabled' : ''}`}
                  onClick={() => applyStrategy(strategy)}
                >
                  <h4>{strategy.name}</h4>
                  <p>Cost: ${strategy.cost}</p>
                  <p>Effect: {strategy.effect.type === "sales" 
                    ? `+${strategy.effect.increase * 100}% Sales` 
                    : `-${strategy.effect.decrease * 100}% Inventory`}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="actions">
          <button onClick={nextRound} disabled={gameOver}>Next Round</button>
        </div>
        
        {gameOver && (
          <div className="game-over">
            <h2>Game Complete!</h2>
            <p>You optimized {locations.filter(l => l.turnover >= l.target).length} out of 5 locations.</p>
            <button onClick={() => window.location.reload()}>
              Play Again
            </button>
          </div>
        )}
      </div>
    );
  };