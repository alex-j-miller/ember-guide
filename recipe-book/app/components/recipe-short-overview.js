import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RecipeShortOverview extends Component {
  @tracked isExpanded = false;

  @action toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}
