Page({
  data: {
    image:"../../images/运行 拷贝 2.png",
    setInter:''
  },
  
  onLoad: function() {
  },
  changeImage:function(res){
    var that = this;
    var time = 0;//每次触发从零开始计数
    that.data.setInter = setInterval(function(){
      time += 1;
      var i = time % 10;
      if(i <= 2){
        that.setData({ image:"../../images/1.png" })
      }else if(i > 2 && i <=4){
        that.setData({ image:"../../images/2.png" })
      }else if(i > 4 && i <=6){
        that.setData({ image:"../../images/3.png" })
      }else{
        that.setData({ image:"../../images/4.png" })
      }
    },1000)
  },
  end:function(){
    var that = this;
    clearInterval(that.data.setInter); // 清除计时器 
  }
})
