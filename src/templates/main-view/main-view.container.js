import { connect } from 'react-redux';

import { MainViewComponent } from './main-view.component';

const mapStateToProps = (state) => (
    {
        editing: state.appState.editing,
        sent: state.appState.sent
    }
);

export default connect(
    mapStateToProps
)(MainViewComponent);
