import { connect } from 'react-redux';

import {
    sendMailAction,
    setSubjectAction,
    setMessageAction
} from './../../store/actions/index';

import {
    checkEmailSendability
} from './../../utils/check-email-sendability';

import { DraftEditorComponent } from './../draft-editor/draft-editor.component';

const mapStateToProps = (state) => {
    const {
        attachments,
        to,
        toValid,
        cc,
        ccValid,
        bcc,
        bccValid,
        subject,
        message,
    } = state.draft;

    return {
        attachments,
        sent: state.appState.sent,
        sendable: (!!to && toValid) && (!cc || ccValid) && (!bcc || bccValid) && !!subject && !!message
    };
};

const mapDispatchToProps = (dispatch) => (
    {
        sendMail: () => dispatch(sendMailAction()),
        setSubject: (event) => dispatch(setSubjectAction(event.target.value)),
        setMessage: (event) => dispatch(setMessageAction(event.target.value)),
    }
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DraftEditorComponent);
