$(function(){
    var currentValue = 0;
    var isDrag = false;
    var preco_maximo = 90000;
    var preco_atual = 0;

    $('.pointer-barra').mousedown(function(){
        isDrag = true;
    })
    $('.pointer-barra').mouseup(function(){
        isDrag = false;
        enableTextSelection();
    })

    $('.barra-preco').mousemove(function(e){
        if(isDrag){
            disableTextSelection();
            var elBase = $(this);
            var mouseX = e.pageX - elBase.offset().left;
            if(mouseX < 0){
                mouseX = 0;
                $('.pointer-barra').mouseup();
             }
            if(mouseX > elBase.width()){
                mouseX = elBase.width();
                $('.pointer-barra').mouseup();
            }

            $('.pointer-barra').css('left', mouseX+'px');
            currentValue = (mouseX / elBase.width()) * 100;
            $('.barra-preco-fill').css('width', currentValue+'%');

            //TODO: Ajustar o formato do preco!
            preco_atual = (currentValue/100) * preco_maximo;
            preco_atual = formatarPreco(preco_atual);
            $('.preco-pesquisa').html('R$'+preco_atual);
        }
    })

    function formatarPreco(preco_atual){
        preco_atual = preco_atual.toFixed(2);
        preco_arr = preco_atual.split('.');

        var novo_preco = formatarTotal(preco_arr);
        return novo_preco;
    }

    function formatarTotal(preco_arr){
        if(preco_arr[0] < 1000){
            return preco_arr[0] + ',' + preco_arr[1];
        }else if(preco_arr[0] < 10000){
            return preco_arr[0][0] + '.' + preco_arr[0].substr(1, preco_arr[0].length)+
            ',' + preco_arr[1];
        }else{
            return preco_arr[0][0] + preco_arr[0][1] + '.' + preco_arr[0].substr(1, preco_arr[0].length)+
            ',' + preco_arr[1];
        }
    }

    function disableTextSelection(){
        $("body").css("-webkit-user-select", "none");
        $("body").css("-moz-user-select", "none");
        $("body").css("-ms-user-select", "none");
        $("body").css("-o-user-select", "none");
        $("body").css("user-select", "none");
    }

    function enableTextSelection(){
        $("body").css("-webkit-user-select", "auto");
        $("body").css("-moz-user-select", "auto");
        $("body").css("-ms-user-select", "auto");
        $("body").css("-o-user-select", "auto");
        $("body").css("user-select", "auto");
    }
})