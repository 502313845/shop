<template>
     <div class="shop-info">
     <section class="section">
        <h3 class="section-title">Business</h3>
    <div class="pic-wrapper">
        <ul class="pic-list" ref="picsul">
            <li class="pic-item">
                <img width="120" height="90"
                    src="https://fuss10.elemecdn.com/f/7f/d1422ec824a0a9d1fb879c57ab533jpeg.jpeg"/>
            </li>
            <li class="pic-item">
                <img width="120" height="90"
                    src="https://fuss10.elemecdn.com/6/82/2cd3d681f5e93292b3eb49d6b412ajpeg.jpeg"/>
            </li>
        <li class="pic-item">
                <img width="120" height="90" 
                    src="https://fuss10.elemecdn.com/8/93/4cf527b6462eea634f69755374f88jpeg.jpeg"/>
            </li>
            
        </ul>
    </div>
        </section>
            <div class="split"></div>
            <section class="section">
                <h3 class="section-title">Business information</h3>
            <ul class="detail" ref="picsul">
                <li><span class="bold">Category</span> <span>Steamed buns</span></li>
                <li><span class="bold">Business phone</span> <span>13301083744</span></li>
                <li><span class="bold">Address</span> <span>Fengtai district, Beijing</span></li>
                <li><span class="bold">Open Hours</span> <span>08:35-23:00</span></li>
                
            </ul>
    </section>
</div>

</template>




<script>


export default {
    
    
}
</script>



<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
    .shop-info
        position: absolute
        top: 195px
        bottom: 0
        left: 0
        width: 100%
        background: #fff;
        overflow: hidden

     
      .section-title
        padding-top: 15px
      .pic-wrapper
        width: 100%
        overflow: hidden
        white-space: nowrap
        margin-top 16px
        .pic-list
          font-size: 0
          .pic-item
            display: inline-block
            margin-right: 6px
            width: 120px
            height: 90px
            &:last-child
              margin: 0
      .detail
        margin-bottom -16px
        > li
          display flex
          justify-content space-between
          align-items center
          margin-right -10px
          padding 16px 12px 16px 0
          line-height 16px
          bottom-border-1px(#ddd)
          font-size 13px
          > .bold
            font-weight 700
            color #333
          &:last-child
            border-none()


    .split
      width: 100%
      height: 16px
      border-top: 1px solid rgba(7, 17, 27, 0.1)
      border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      background: #f3f5f7




</style>