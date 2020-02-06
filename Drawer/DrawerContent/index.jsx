import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import createWithBsPrefix from '../Utils/createWithBsPrefix'
import styles from './styles.scss'

const DrawerContentBody = createWithBsPrefix(styles['drawer-body'])

const propTypes = {
  as: PropTypes.elementType,
  bg: PropTypes.string,
  body: PropTypes.bool,
  border: PropTypes.string,
  id: PropTypes.string,
  text: PropTypes.string,
}

const defaultProps = {
  body: false,
}

const DrawerContent = React.forwardRef(
  (
    {
      as: Component = 'div',
      bg,
      body,
      border,
      children,
      className,
      id,
      text,
      ...props
    },
    ref,
  ) => {
    const prefix = 'drawer'

    return (
      <Component
        ref={ref}
        {...props}
        className={classNames(
          styles[prefix],
          className && styles[className],
          bg && styles[`bg-${bg}`],
          text && styles[`text-${text}`],
          border && styles[`border-${border}`],
        )}
        id={id}
      >
        {body ? <DrawerContentBody>{children}</DrawerContentBody> : children}
      </Component>
    )
  },
)

DrawerContent.displayName = 'DrawerContent'
DrawerContent.propTypes = propTypes
DrawerContent.defaultProps = defaultProps

DrawerContent.Body = DrawerContentBody
DrawerContent.Header = createWithBsPrefix(styles['drawer-header'])
DrawerContent.Footer = createWithBsPrefix(styles['drawer-footer'])

export default DrawerContent
