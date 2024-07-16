import { merge } from 'webpack-merge'
import common from './webpack.common'

const dev = {
  mode: 'development',
  stats: 'errors-warnings',
  devtool: 'eval',
  devServer: {
    open: true
  }
}

export default merge(common, dev)
