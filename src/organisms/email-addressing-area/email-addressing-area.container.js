import { connect } from 'react-redux';

import { constructEmailArray } from './../../utils/handle-email-arrays';

// TODO: Figure out input restricting space entry

import {
    setToFieldAction,
    setCCFieldAction,
    setBCCFieldAction
} from './../../store/actions/index';

import { EmailAddressingArea } from './email-addressing-area.component';

const mapStateToProps = (state) => (
    {
        to: state.draft.to,
        toValid: state.draft.toValid,
        cc: state.draft.cc,
        ccValid: state.draft.ccValid,
        bcc: state.draft.bcc,
        bccValid: state.draft.bccValid
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        setToField: (event) => dispatch(setToFieldAction(constructEmailArray(event.target.value))),
        setCCField: (event) => dispatch(setCCFieldAction(constructEmailArray(event.target.value))),
        setBCCField: (event) => dispatch(setBCCFieldAction(constructEmailArray(event.target.value)))
    }
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmailAddressingArea);
