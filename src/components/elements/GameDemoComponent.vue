<template lang="pug">
  .container
    .columns
        .column
          .box
            .button.is-small.is-link(v-for='(demo, index) in demos' @click='loadFile(demo.file, index)') {{demo.title}}
    br
    #phaser-example
    a.small(@click='viewSource(demos[active].source)') View source code
</template>

<script>


export default {
  name: 'gameComponent',
  props: [],
  data () {
    return {
      game: null,
      active: 0,
      demos: [
        {title: 'Sprite Class Manager', file: 'boilerplate/spriteManagerDemo.min.js', source: 'spriteManagerDemo.ts'},
        {title: 'Controller Class Manager', file: 'boilerplate/controllerManagerDemo.min.js', source: 'controllerManagerDemo.ts'},
        {title: 'Bitmapdata Layer Demo', file: 'boilerplate/bitmapLayerDemo.min.js', source: 'bitmapLayerDemo.ts'},
        {title: 'Bitmapdata Fill Demo', file: 'boilerplate/bitmapFillDemo.min.js', source: 'bitmapFillDemo.ts'},
        {title: 'Sprite Tween Demo', file: 'boilerplate/spriteTweenDemo.min.js', source: 'spriteTweenDemo.ts'},
        {title: 'Particle FX Demo', file: 'boilerplate/particleDemo.min.js', source: 'particleDemo.ts'},
        {title: 'Filter FX Demo', file: 'boilerplate/filterDemo.min.js', source: 'filterDemo.ts'},
      ]
    }
  },
  mounted(){
    this.init()
  },
  methods: {
    init(){
      this.loadGame('boilerplate/gameTemplate.js')
    },
    viewSource(file){
      window.open(
        `/src/phaser_Buildtool/src/${file}`,
        '_blank'
      );
    },
    loadGame(fileName){
      // remove old game first
      if(this.game !== null){
        this.game.destroy()
      }
      // load new one
      let js = document.createElement("script");
          js.type = "text/javascript";
          js.src = `src/phaser/${fileName}`;
          document.body.appendChild(js);
          js.onload = (() => {
            __phaser.init(this.$el, this, {width: 640, height: 640});
          })
    },
    loadFile(file, index){
      this.active = index;
      this.loadGame(file)
    }
  },
  destroyed() {
    this.game.destroy();
  }
}
</script>


<style lang="sass" scoped>
  .small
    font-size: 12px
  .button
    margin-right: 5px
</style>
