import { connect } from 'react-redux';

import { AttachmentThumbnailComponent } from './attachment-thumbnail.component';

import {
    deleteAttachmentAction
} from './../../store/actions/index';

const mapStateToProps = (state) => (
    {

    }
);

const mapDispatchToProps = (dispatch) => (
    {
        deleteAttachment: (id) => dispatch(deleteAttachmentAction(id))
    }
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AttachmentThumbnailComponent);