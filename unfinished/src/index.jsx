import React from 'react'
import { render } from 'react-dom'
import Chart from './components/Chart'
import './main.css'
const mountingPoint = document.createElement('div')
mountingPoint.className = 'react-app'
document.body.appendChild(mountingPoint)

render(
  <Chart />,
  mountingPoint
)