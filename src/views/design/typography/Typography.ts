import { Component, Vue } from 'vue-property-decorator';
import { NeonResponsive } from '@/components';

@Component
export default class Typography extends Vue {
  get layouts() {
    return [
      {
        breakpoint: NeonResponsive.All,
        grid: [['typography-content']],
      },
    ];
  }
}