import React from "react"
import { render, unmountComponentAtNode } from "react-dom"

import Button from './'

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
    render(<Button/>, container)
  })

  it('correct title from props', () => {
    const testTitle = 'test title'
    render(<Button title={testTitle}/>, container)
    expect(container.querySelector('button').textContent).toBe(testTitle)
  })

})

