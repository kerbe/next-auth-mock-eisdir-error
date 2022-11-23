// __tests__/index.test.jsx

import { render, screen } from '@testing-library/react'
import { withMockAuth } from '@tomfreudenberg/next-auth-mock/jest';
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a heading', () => {
    render(withMockAuth(<Home />, 'unknown'))

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
