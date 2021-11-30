$(document).ready(function(){
  
    $("#carrossel img:eq(0)").addClass("bannerAtivo").show()

    
    setInterval(slide, 1000) 

    function slide(){
        if($(".bannerAtivo").next().length){  
            $(".bannerAtivo").removeClass("bannerAtivo").hide().next().addClass("bannerAtivo").show()
        } else {
            $(".bannerAtivo").removeClass("bannerAtivo").hide()
            $("#carrossel img:eq(0)").addClass("bannerAtivo").show()
        }  
    }
    
      
})

