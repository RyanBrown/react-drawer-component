import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import DrawerContent from './DrawerContent';

import styles from './styles.scss';

const propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    height: PropTypes.number,
    id: PropTypes.string,
    onClick: PropTypes.func,
    open: PropTypes.bool,
    position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    variant: PropTypes.oneOf(['dark', 'light']),
    width: PropTypes.number
};

const defaultProps = {
    open: '',
    position: 'bottom',
    variant: 'light'
};

/** Drawer Component */
class Drawer extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.open) {
            document.body.classList.add(styles.noscroll);
        } else {
            document.body.classList.remove(styles.noscroll);
        }
    }

    render() {
        const drawer = ['drawer', this.props.position, this.props.open ? 'open' : '', this.props.variant];

        return (
            <div>
                <div
                    id={this.props.id}
                    styleName={drawer.join(' ')}
                    style={{
                        height: `${this.props.height}vh`,
                        width: `${this.props.width}vw`
                    }}
                >
                    {this.props.children}
                </div>

                <div
                    styleName={classNames({
                        backdrop: this.props.open,
                        open: this.props.open
                    })}
                    onClick={this.props.onClick}
                    onKeyPress={this.props.onClick}
                />
            </div>
        );
    }
}

Drawer.displayName = 'Drawer';
Drawer.propTypes = propTypes;
Drawer.defaultProps = defaultProps;

Drawer.Content = DrawerContent

export default Drawer;
