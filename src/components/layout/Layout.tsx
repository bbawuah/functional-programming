/* eslint-disable react/prop-types */
import React, { Fragment } from 'react'

import { Container } from '@material-ui/core'

const Layout: React.FC = ({ children }) => (
  <Fragment>
    <Container>{children}</Container>
  </Fragment>
)

export default Layout
