import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SummaryMetrics from './components/SummaryMetrics'
import WasteByCategory from './components/WasteByCategory'
import WasteTrend from './components/WasteTrend'
import FacilityComparison from './components/FacilityComparison'
import ReductionProgress from './components/ReductionProgress'
import InsightsPanel from './components/InsightsPanel'

function App() {
  const [activeTab, setActiveTab] = useState('Overview')

  return (
    <div className="dashboard">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="main-content">
        <SummaryMetrics />
        <WasteByCategory />
        <WasteTrend />
        <FacilityComparison />
        <ReductionProgress />
        <InsightsPanel />
      </div>
    </div>
  )
}

export default App
