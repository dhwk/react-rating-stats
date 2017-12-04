import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

import Stars from './Stars'

export const styles = theme => ({
  root: {
    display: 'inline-block',
    position: 'relative',
    textAlign: 'center'
  },
  score: {
    color: theme.palette.gray2,
    fontSize: 64,
    fontWeight: 100,
    lineHeight: '64px',
    paddingTop: 3
  },
  stars: {
    marginBottom: 8,
    overflow: 'auto',
    position: 'relative'
  },
  total: {
    color: theme.palette.gray3,
    fontSize: 12,
    fontWeight: 300,
    marginTop: 10
  }
})

const Score = ({ values = [], classes }) => {
  const total = values.reduce((a, b) => a + b, 0)
  const average = total
    ? values.reduce((a, b, index) => a + b * (index + 1), 0) / total
    : null
  const score = Math.round(average * 10) / 10
  return (
    <div className={classes.root}>
      <div className={classes.score}>{score.toLocaleString()}</div>
      <Stars value={average} max={values.length} />
      <div className={classes.total}>{total.toLocaleString()} total</div>
    </div>
  )
}

Score.propTypes = {
  values: PropTypes.arrayOf(PropTypes.number),
  classes: PropTypes.object.isRequired
}

export default injectSheet(styles)(Score)
