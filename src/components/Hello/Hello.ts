import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class HelloComponent extends Vue {
  msg: string = 'Welcome to Your Vue.js App'
}
