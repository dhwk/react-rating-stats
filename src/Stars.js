import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

export const styles = theme => ({
  root: {
    display: 'inline-block',
    position: 'relative'
  },
  back: {
    color: theme.palette.shadedStar
  },
  front: {
    color: theme.palette.twinklingStar,
    left: 0,
    overflow: 'hidden',
    position: 'absolute'
  },
  star: {
    fontSize: 18,
    padding: 3,
    '&:before': {
      content: '"★"'
    }
  }
})

const Stars = ({ value, max = 5, classes }) => {
  const percent = 100 * value / max
  const stars = [...Array(max)].map((dummy, index) => (
    <span key={index} className={classes.star} />
  ))
  return (
    <div className={classes.root}>
      <span className={classes.back}>{stars}</span>
      <span className={classes.front} style={{ maxWidth: `${percent}%` }}>
        {stars}
      </span>
    </div>
  )
}

Stars.propTypes = {
  value: PropTypes.number,
  max: PropTypes.number,
  classes: PropTypes.object.isRequired
}

export default injectSheet(styles)(Stars)
