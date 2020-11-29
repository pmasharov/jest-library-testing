import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

import App from './'

let container = null

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

describe('Button component test', () => {
  it('renders without crashes', () => {
    render(<App/>, container)
  })
})