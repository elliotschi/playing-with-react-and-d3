import React from 'react'
import d3 from 'd3'
import DataCircles from './DataCircles'
import XYAxis from './XYAxis'

const xMax = data => d3.max(data, d => d[0])
const yMax = data => d3.max(data, d => d[1])

const xScale = props =>
  d3.scale.linear()
    .domain([0, xMax(props.data)])
    .range([props.padding, props.width - props.padding * 2])

const yScale = props =>
  d3.scale.linear()
    .domain([0, yMax(props.data)])
    .range([props.height - props.padding, props.padding])

const ScatterPlot = (props) => {
  const scales = {
    xScale: xScale(props),
    yScale: yScale(props)
  }

  const { width, height } = props;

  return (
    <svg
      width={width}
      height={height}
    >
      <DataCircles {...props} {...scales} />
      <XYAxis {...props} {...scales} />
    </svg>
  )
}

export default ScatterPlot;