import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

import { Score, Histogram } from '.'

export const styles = theme => ({
  root: {
    display: 'flex',
    padding: theme.padding
  }
})

const Rating = ({ values = [], classes }) => {
  return (
    <div className={classes.root}>
      <Score values={values} />
      <Histogram values={values} />
    </div>
  )
}

Rating.propTypes = {
  values: PropTypes.arrayOf(PropTypes.number),
  classes: PropTypes.object.isRequired
}

export default injectSheet(styles)(Rating)
