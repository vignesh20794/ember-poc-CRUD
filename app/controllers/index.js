import Controller from '@ember/controller';
import { computed, observer } from '@ember/object';
//empty ,match, not function from computed 
import { empty, match, not } from '@ember/object/computed';

export default Controller.extend({
    emailAddress: '',
    isValid: match('emailAddress', /^.+@.+\..+$/),
    isDisabled: not('isValid'),

    actions: {

        saveInvitation() {
            alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);

        }
    }
})