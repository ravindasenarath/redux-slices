import React from 'react'
import { Provider } from 'react-redux';     

const ProviderAll = (children) => {
  return (
    <Provider>
        {children}
    </Provider>
  )
}

export default ProviderAll