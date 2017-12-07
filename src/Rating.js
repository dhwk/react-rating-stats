import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

import { Score, Histogram } from '.'

export const styles = theme => ({
  root: {
    display: 'flex'
  },
  score: {
    display: 'inline-box',
    paddingRight: theme.padding
  }
})

const Rating = ({ values, classes }) => (
  <div className={classes.root}>
    <div className={classes.score}>
      <Score values={values} />
    </div>
    <Histogram values={values} />
  </div>
)

Rating.propTypes = {
  values: PropTypes.arrayOf(PropTypes.number).isRequired,
  classes: PropTypes.object.isRequired
}

export default injectSheet(styles)(Rating)
