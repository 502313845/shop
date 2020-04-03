<template>
  <div class="ratings" ref="ratings">
    <div class="ratings-content">
        <div class="overview">
            <div class="overview-left">
                <h1 class="score">4.7</h1>
            <div class="title">Overall Ratings</div>
        <div class="rank">Can not be beat</div>
</div>
        <div class="overview-right">
                    <div class="score-wrapper">
                    <span class="title">Service</span>

                    <span class="score">4.6</span>
        </div>
        <div class="score-wrapper">
                    <span class="title">Goods Ratings</span>

                            <span class="score"> 4.7</span>
        </div>
                <div class="delivery-wrapper">
                        <span class="title">Delivery Time</span>
                            <span class="delivery">30 mins</span>
                    </div>
            </div>
        </div>

        </div>
</div>

</template>




<script>
export default {
    
}
</script>



<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"

  .ratings
    position: absolute
    top: 195px
    bottom: 0
    left: 0
    width: 100%
    overflow: hidden
    background: #fff
    .overview
      display: flex
      padding: 18px 0
      .overview-left
        flex: 0 0 137px
        padding: 6px 0
        width: 137px
        border-right: 1px solid rgba(7, 17, 27, 0.1)
        text-align: center
        @media only screen and (max-width: 320px)
          flex: 0 0 120px
          width: 120px
        .score
          margin-bottom: 6px
          line-height: 28px
          font-size: 24px
          color: rgb(255, 153, 0)
          
        .title
          margin-bottom: 8px
          line-height: 12px
          font-size: 12px
          color: rgb(7, 17, 27)
          
        .rank
          line-height: 10px
          font-size: 10px
          color: rgb(147, 153, 159)
      .overview-right
        flex: 1
        padding: 6px 0 6px 24px
        @media only screen and (max-width: 320px)
          padding-left: 6px
        .score-wrapper
          margin-bottom: 8px
          font-size: 0
          .title
            display: inline-block
            line-height: 18px
            vertical-align: top
            font-size: 12px
            color: rgb(7, 17, 27)
            margin-right 10px
         
          .score
            display: inline-block
            line-height: 18px
            vertical-align: top
            font-size: 12px
            color: rgb(255, 153, 0)
        .delivery-wrapper
          font-size: 0
          .title
            line-height: 18px
            font-size: 12px
            color: rgb(7, 17, 27)
          .delivery
            margin-left: 12px
            font-size: 12px
            color: rgb(147, 153, 159)
    


</style>