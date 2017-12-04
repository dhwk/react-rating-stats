import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

export const styles = theme => {
  const styles = {
    root: {
      marginLeft: theme.padding
    },
    label: {
      color: theme.palette.gray2,
      fontSize: 11,
      fontWeight: 400,
      paddingRight: 10,
      '&:before': {
        content: '"★"',
        marginRight: 4
      }
    },
    outer: {
      display: 'inline-block',
      width: 120,
      '@media (min-width: 600px)': {
        width: 375
      }
    },
    inner: {
      background: theme.palette.gray4,
      color: theme.palette.gray1,
      display: 'inline-block',
      fontSize: 11,
      fontWeight: 400,
      lineHeight: '23px',
      marginBottom: 1,
      boxSizing: 'border-box',
      width: 0
    },
    value: {
      marginLeft: 5
    }
  }

  // adding histogram colors
  Object.keys(theme.palette.histogram).forEach(key => {
    styles[`bar${key}`] = {
      background: theme.palette.histogram[key]
    }
  })

  return styles
}

const HistogramBar = ({ name, value = null, maxValue = 0, classes }) => {
  const percent = maxValue ? 100 * value / maxValue : 0
  return (
    <div>
      <span className={classes.label}>{name}</span>
      <span className={classes.outer}>
        <span
          className={`${classes.inner} ${classes[`bar${name}`]}`}
          style={{ width: `${percent}%` }}
        >
          <span className={classes.value}>{value.toLocaleString()}</span>
        </span>
      </span>
    </div>
  )
}

/*
 @wtf JSS generates faulty css class names for Pseudo-elements if "Histogram" is used
*/
const HistogramWTF = ({ values, classes }) => {
  const maxValue = Math.max(...values)
  return (
    <div className={classes.root}>
      {values.reverse().map((value, index) => {
        return (
          <HistogramBar
            key={index}
            name={values.length - index}
            value={value}
            maxValue={maxValue}
            classes={classes}
          />
        )
      })}
    </div>
  )
}

HistogramWTF.propTypes = {
  values: PropTypes.arrayOf(PropTypes.number),
  classes: PropTypes.object.isRequired
}

export default injectSheet(styles)(HistogramWTF)
