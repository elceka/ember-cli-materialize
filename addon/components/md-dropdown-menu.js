import Ember from 'ember';
import layout from '../templates/components/md-dropdown-menu';

export default Ember.Component.extend({
  _dropdownRoot: null,
  classNames: ['md-dropdown-menu', 'dropdown-content'],
  layout,
  tagName: 'ul',
  init() {
    this._super(...arguments);
    Ember.run.next(() => {
      if (this.attrs._dropdownRoot && this.attrs._dropdownRoot.set) {
        this.attrs._dropdownRoot.set('_dropdownMenuId', this.elementId);
        this.attrs._dropdownRoot.setupDropdown();
      }
    });
  }
});
