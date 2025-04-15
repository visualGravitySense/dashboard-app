class SimulationService {
  constructor() {
    this.scenarios = [
      {
        id: 1,
        title: "Normal Operations",
        description: "All locations operating normally with standard inventory levels",
        data: {
          inventory: {
            total: 1253,
            critical: 37,
            low: 82,
            expiring: 42,
            categories: {
              hair: 45,
              skin: 30,
              nails: 15,
              retail: 10
            }
          },
          locations: [
            {
              id: 1,
              name: "Location #1",
              status: "normal",
              products: 354,
              stockLevel: 97,
              turnoverRate: 2.4
            },
            // ... other locations
          ]
        }
      },
      {
        id: 2,
        title: "Critical Stock Alert",
        description: "Location #3 experiencing critical stock levels",
        data: {
          inventory: {
            total: 1156,
            critical: 89,
            low: 134,
            expiring: 42,
            categories: {
              hair: 35,
              skin: 25,
              nails: 25,
              retail: 15
            }
          },
          locations: [
            {
              id: 3,
              name: "Location #3",
              status: "critical",
              products: 198,
              stockLevel: 45,
              turnoverRate: 3.8
            },
            // ... other locations
          ]
        }
      },
      {
        id: 3,
        title: "High Demand Period",
        description: "Increased turnover rates across all locations",
        data: {
          inventory: {
            total: 987,
            critical: 156,
            low: 223,
            expiring: 28,
            categories: {
              hair: 55,
              skin: 20,
              nails: 15,
              retail: 10
            }
          },
          locations: [
            {
              id: 1,
              name: "Location #1",
              status: "warning",
              products: 287,
              stockLevel: 72,
              turnoverRate: 4.2
            },
            // ... other locations
          ]
        }
      }
    ];
    
    this.currentScenario = null;
    this.subscribers = [];
  }

  startScenario(scenarioId) {
    this.currentScenario = this.scenarios.find(s => s.id === scenarioId);
    this.notifySubscribers();
  }

  subscribeToChanges(callback) {
    this.subscribers.push(callback);
    return () => {
      this.subscribers = this.subscribers.filter(cb => cb !== callback);
    };
  }

  notifySubscribers() {
    this.subscribers.forEach(callback => callback(this.currentScenario));
  }

  getCurrentScenario() {
    return this.currentScenario;
  }

  getAllScenarios() {
    return this.scenarios;
  }
}

export default new SimulationService(); 