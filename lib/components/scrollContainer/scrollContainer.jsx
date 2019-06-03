'use strict';

class ScrollContainer extends React.Component {
    constructor(props) {
        super(props);
        this.domElement = React.createRef();
    }
    componentDidMount() {
        this.momentumScroll = momentumScroll(
            this.domElement.current,
            this.props
        ).mount();
    }

    componentWillUnmount() {
        this.momentumScroll.unmount();
    }

    render() {
        return (
            <div {...this.props} ref={this.domElement}>
                {this.props.children}
            </div>
        );
    }
}
