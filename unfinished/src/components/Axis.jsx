import React from 'react'
import d3 from 'd3'

class Axis extends React.Component {
  componentDidMount() {
    this.renderAxis()
  }

  componentDidUpdate() {
    this.renderAxis()
  }

  renderAxis = () => {
    const { orient, scale } = this.props;
    const node = this.axis
    const axis = d3.svg.axis().orient(orient).ticks(5).scale(scale)

    d3.select(node).call(axis)
  }

  render() {
    return (
      <g
        className="axis"
        ref={(node) => { this.axis = node }}
        transform={this.props.translate}
      >
      </g>
    )
  }
}

export default Axis;