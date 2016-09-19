import React from 'react'
import ScatterPlot from './ScatterPlot'

// style props that are passed to the scatter plot
const styles = {
  width: 500,
  height: 300,
  padding: 30
}

const numDataPoints = 50

const random = () => Math.floor(Math.random() * 1000)

const randomDataSet = () => Array.apply(null, {
  length: numDataPoints
})
  .map(() => [random(), random()])

class Chart extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      data: randomDataSet()
    }
  }

  randomizeData = () => {
    this.setState({
      data: randomDataSet()
    })
  }

  render() {
    return (
      <div>
        <h1>Playing with React and D3</h1>
        <ScatterPlot {...this.state} {...styles} />
        <div className="controls">
          <button
            className="btn randomize" 
            onClick={this.randomizeData}
          >
            Randomize Data
          </button>
        </div>
      </div>
    )
  }
}

export default Chart