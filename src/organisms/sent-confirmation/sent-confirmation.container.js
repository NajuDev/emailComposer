import { connect } from 'react-redux';

import { SentConfirmationComponent } from './sent-confirmation.component';

const mapStateToProps = (state) => (
    {
        to: state.draft.to,
        cc: state.draft.cc,
        bcc: state.draft.bcc,
        subject: state.draft.subject,
        message: state.draft.message,
        attachments: state.draft.attachments
    }
);

export default connect(
    mapStateToProps
)(SentConfirmationComponent);
