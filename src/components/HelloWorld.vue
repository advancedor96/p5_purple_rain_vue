<template>
  <div class="hello">
    <div ref="canvas"></div>
  </div>
</template>

<script>
import p5 from "p5";
import { Drop } from "@/assets/Drop.js";
export default {
  name: "HelloWorld",
  data() {
    return {
      ps: null,
      drops: []
    };
  },
  mounted() {
    let script = p => {
      let x = 0;

      p.setup = () => {
        // this.canvas = p.createCanvas(700, 400);
        let canvas = p.createCanvas(
          this.$el.clientWidth,
          this.$el.clientHeight - 5
        );
        // this.canvas.parent(this.$refs.canvas);
        canvas.parent(this.$refs.canvas);
        for (let i = 0; i < 100; i++) {
          this.drops[i] = new Drop(p);
        }
      };
      p.draw = () => {
        p.background(230, 230, 250);

        for (let i = 0; i < this.drops.length; i++) {
          this.drops[i].fall();
          this.drops[i].show();
        }
      };
    };
    this.ps = new p5(script);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  height: 100%;
}
</style>
