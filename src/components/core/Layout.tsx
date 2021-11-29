// 其他组件作为 Layout 组件的子组件

import React, { FC } from 'react'

interface Props {
  children: React.ReactNode
}
const Layout: FC<Props> = ({ children }) => {
  return <div>{ children }</div>
}

export default Layout
