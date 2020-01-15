import React, { Component } from 'react';
import { default as WDrawer } from '@material-ui/core/Drawer';

class Drawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: '100vw',
            height: '100vh'
        };
        this.updateWinArea = this.updateWinArea.bind(this);
    }

    updateWinArea() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    componentDidMount() {
        this.updateWinArea();
        window.addEventListener('resize', this.updateWinArea);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWinArea);
    }

    render() {
        return (
            <WDrawer {...this.props}>
                <div
                    id={'DrawerWarp'}
                    style={{
                        width: this.state.width,
                        height: this.state.height
                    }}>
                    {this.props.children}
                </div>
            </WDrawer>
        );
    }
}

export default Drawer;
