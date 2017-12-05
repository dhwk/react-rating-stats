import React from 'react'
import injectSheet, { ThemeProvider } from 'react-jss'

import Rating, { Score, Histogram, Stars, theme } from 'react-rating-stats'

const PlainBox = ({ classes, children }) => (
  <div className={classes.root}>{children}</div>
)
const Box = injectSheet({
  root: {
    borderBottom: 'solid #999 1px',
    padding: 24
  }
})(PlainBox)

const customTheme = {
  ...theme,
  palette: {
    ...theme.palette,
    histogram: {
      '1': '#ed9a9b',
      '2': '#fdb657',
      '3': '#fed45b',
      '4': '#d4df61',
      '5': '#afd485'
    },
    twinklingStar: '#ffca28'
  }
}

const customStyles = {
  back: {
    color: '#cce6ff'
  }
}
const CustomStars = injectSheet(customStyles)(Stars)


export default () => (
  <div>
    <h2>Original theme</h2>
    <ThemeProvider theme={theme}>
      <div>
        <h3>
          <pre>Rating</pre>
        </h3>
        <Box>
          <Rating values={[4022004, 1654689, 3923104, 9105819, 42660181]} />
        </Box>
        <h3>
          <pre>Score</pre>
        </h3>
        <Box>
          <Score values={[1, 0, 0, 0, 1]} />
        </Box>
        <h3>
          <pre>Histogram</pre>
        </h3>
        <Box>
          <Histogram
            values={[4022004, 1654689, 3923104, 9105819, 42660181]}
          />
        </Box>
        <h3>
          <code>Stars</code>
        </h3>
        <Box>
          <Stars value={4} max={8} />
        </Box>
        <h3>
          <pre>Rating</pre>
        </h3>
        <Box>
          <Rating values={[4022004, 1654689, 3923104, 9105819, 42660181]} />
        </Box>
        <h3>Custom styles</h3>
        <Box>
          <CustomStars value={3} />
        </Box>
      </div>
    </ThemeProvider>
    <h2>Custom theme</h2>
    <ThemeProvider theme={customTheme}>
      <div>
        <h3>
          <pre>Rating</pre>
        </h3>
        <Box>
          <Rating values={[3, 7, 12, 25, 20]} />
        </Box>
        <h3>
          <pre>Score</pre>
        </h3>
        <Box>
          <Score values={[1, 0, 0, 0, 1]} />
        </Box>
        <h3>
          <pre>Histogram</pre>
        </h3>
        <Box>
          <Histogram values={[3, 7, 12, 25, 20]} />
        </Box>
        <h3>
          <code>Stars</code>
        </h3>
        <Box>
          <Stars value={1} max={3} />
        </Box>
        <h3>Custom styles</h3>
        <Box>
          <CustomStars value={3} />
        </Box>
      </div>
    </ThemeProvider>
  </div>
)
