import React from 'react'

// higher order function
const renderCircles = ({ xScale, yScale }) =>
  (coords, index) => {
    const circleProps = {
      cx: xScale(coords[0]),
      cy: yScale(coords[1]),
      r: 2,
      key: index
    }

    return <circle {...circleProps} />
  }

const DataCircles = (props) => (
  <g>
    {props.data.map(renderCircles(props))}
  </g>
)

export default DataCircles