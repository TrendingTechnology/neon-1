import { Component, Vue, Watch } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader } from '../../../components';
import { Route } from 'vue-router';
import Editor from '../../components/editor/Editor.vue';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    Editor,
  },
})
export default class Source extends Vue {
  private className: string | null = null;
  private ghLink: string | null = null;

  private template: string | null = null;

  @Watch('$route', { immediate: true })
  private onRoute(to: Route) {
    const path = to.path;
    this.className = path.split('/').pop() || null;
    if (this.className) {
      fetch(`${process.env.VUE_APP_RESOURCE_URL}files/${path}.ts`).then((response) => {
        response.text().then((file) => {
          this.template = file;
        });
      });

      this.ghLink = `https://github.com/aotearoan/neon/tree/master/src/common${path}.ts`;
    }
  }
}
