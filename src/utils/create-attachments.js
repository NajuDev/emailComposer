import { Store } from './../store/index';
import {
    addAttachmentAction,
} from './../store/actions/index';

export const createAttachments = (files, input) => {
    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        const reader = new FileReader();

        reader.onload = (
            function(attachment) {
                return (e) => {
                    const f = e.target.result;
                    const fData = {
                        id: Date.now(), // replace with a UUID generator
                        name: file.name,
                        type: file.type,
                        fileContents: f
                    };

                    Store.dispatch(addAttachmentAction(fData));
                    input.value = ''; // reset file upload input - should be done via form but this is a quick fix
                };
            }
        )(file);
        reader.readAsDataURL(file);

    }
};