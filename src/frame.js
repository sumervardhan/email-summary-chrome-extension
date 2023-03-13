import React, { Component } from 'react'
import cx from 'classnames'
import { css } from 'glamor'
import { node, object, string, number, func } from 'prop-types'

const iframeClass = css({
  border: 'none',
  width: '100%',
  height: '100%',
  background: '#272727',
  color: 'white',
  boxShadow: '-1px 1px 8px rgba(0,0,0,.15)'
})

const maskClass = css({
  display: 'none',
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  cursor: 'pointer',
  zIndex: '9999'
})

const maskVisibleClass = css({
  display: 'block'
})

const containerClass = css({
  position: 'fixed',
  top: '0px',
  left: '0px',
  height: '100%',
  width: '25%',
  boxSizing: 'border-box',
  transition: 'transform .45s cubic-bezier(0, 0, 0.3, 1)',
  zIndex: 10000
})

const containerVisibleClass = css({
  transform: 'translate3d(0,0,0)'
})

const containerMinimizedClass = css({
  cursor: 'pointer',
  transform: 'translateX(-78%)',
  '& > iframe': {
    pointerEvents: 'none'
  }
})

const FRAME_TOGGLE_FUNCTION = 'chromeIframeSheetToggle'

export class Frame extends Component {
  render() {
    const { isVisible, isMinimized } = this.state
    const {
      url,
      className,
      maskClassName,
      maskStyle,
      containerClassName,
      containerStyle,
      iframeClassName,
      iframeStyle,
      children,
      containerChildren
    } = this.props

    return (
      <div>
        <div
          className={cx({
            [maskClass]: true,
            [maskVisibleClass]: !isMinimized,
            [maskClassName]: true
          })}
          style={maskStyle}
          onClick={this.onMaskClick}
          ref={mask => this.mask = mask}
        />

        <div
          className={cx({
            [containerClass]: true,
            [containerVisibleClass]: isVisible,
            [containerMinimizedClass]: isMinimized,
            [containerClassName]: true
          })}
          style={containerStyle}
          onClick={this.onFrameClick}
        >
          <div
            className={cx({
              [iframeClass]: true,
              [iframeClassName]: true
            })}
            style={iframeStyle}
          >
            {containerChildren}
          </div>

        </div>

        {children}
      </div>
    )
  }

  state = {
    isVisible: true,
    isMinimized: true
  }

  static defaultProps = {
    url: '',
    delay: 500,
    maskClassName: '',
    maskStyle: {},
    containerClassName: '',
    containerStyle: {},
    iframeClassName: '',
    iframeStyle: {},
    onMount: () => {},
    onUnmount: () => {},
    onLoad: () => {}
  }

  static propTypes = {
    url: string,
    delay: number,
    maskClassName: string,
    maskStyle: object,
    containerClassName: string,
    containerStyle: object,
    iframeClassName: string,
    iframeStyle: object,
    children: node,
    containerChildren: node,
    onMount: func,
    onUnmount: func,
    onLoad: func
  }

  componentDidMount() {
    const { delay, onMount } = this.props

    window[FRAME_TOGGLE_FUNCTION] = this.toggleFrame

    onMount({
      mask: this.mask,
      frame: this.frame
    })

    this._visibleRenderTimeout = setTimeout(() => {
      this.setState({
        isVisible: true
      })
    }, delay)
  }

  componentWillUnmount() {
    const { onUnmount } = this.props

    onUnmount({
      mask: this.mask,
      frame: this.frame
    })

    delete window[FRAME_TOGGLE_FUNCTION]
    clearTimeout(this._visibleRenderTimeout)
  }

  onLoad = () => {
    const { onLoad } = this.props

    onLoad({
      mask: this.mask,
      frame: this.frame
    })
  }

  onMaskClick = () => {
    this.setState({
      isMinimized: true
    })
  }

  onFrameClick = () => {
    this.setState({
      isMinimized: false
    })
  }

  toggleFrame = () => {
    this.setState({
      isMinimized: !this.state.isMinimized
    })
  }

  static isReady() {
    return typeof window[FRAME_TOGGLE_FUNCTION] !== 'undefined'
  }

  static toggle() {
    if (window[FRAME_TOGGLE_FUNCTION]) {
      window[FRAME_TOGGLE_FUNCTION]()
    }
  }
}

export default Frame
