import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonResponsiveUtils } from '../../../common/utils/NeonResponsiveUtils';
import { NeonResponsive } from '../../../common/enums/NeonResponsive';

@Component
export default class NeonTab extends Vue {
  private responsiveView = false;

  /**
   * True if the current tab is the visible tab.
   */
  @Prop({ required: true })
  public selected!: boolean;

  /**
   * By default, use CSS display property to show/hide tab contents. This flag will enable using v-if instead.
   * */
  @Prop({ default: false })
  public toggleOnIf!: boolean;

  private mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  private beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  }

  private handleResize() {
    this.responsiveView = window.matchMedia(NeonResponsiveUtils.breakpoints[NeonResponsive.MobileLarge]).matches;
  }
}
