(function ($) { 
    // Currency 
    $(document).ready(function () {
        jQuery.ajaxSetup({
            cache: false
        });

        updateCurencies();
        self.setInterval(updateCurencies, 5 * 60 * 1000);

        updateOtherCurencies();
        self.setInterval(updateOtherCurencies, 5 * 60 * 1000);

        updateNews();
        self.setInterval(updateNews, 5 * 60 * 1000);

    });

    function updateCurencies() {
        var dataDoviz = "../data/currencyData.json";
        
            $.getJSON(dataDoviz, function (gelen) { })
                .done(function (gelen) {
                    var doviz = gelen;
                    $("#usd_value").html(" asxs% ").text(doviz.DOLAR.price.substring(0, 6));
                    $("#eur_value").text(doviz.EURO.price.substring(0, 6));
                    $("#gold_value").text(doviz.ALTIN.price.substring(0, 6));
                    $("#usd-difference").text(doviz.DOLAR.difference.substring(0, 6));
                    $("#eur-difference").text(doviz.EURO.difference.substring(0, 6));
                    $("#gold-difference").text(doviz.ALTIN.difference.substring(0, 6));

                    //DOLAR-upDOWN
                    if (doviz.DOLAR.icon == 1) {
                        $("#usd-icon").text("▲").css('color', '#a9d274');
                        $("#usd_value").css('color', '#a9d274');
                    }
                    else if (doviz.DOLAR.icon == -1) {
                        $("#usd-icon").text("▼").css('color', '#d50202');
                        $("#usd_value").css('color', '#d50202');
                    }
                    else {
                        $("#usd-icon").text(" ").css('color', 'white');
                        $("#usd_value").css('color', 'white');
                        $('#usd-difference').css('margin', '30px 0px 0px -24px');

                    }

                    //EURO-upDOWN
                    if (doviz.EURO.icon == 1) {
                        $("#eur-icon").text("▲").css('color', '#a9d274');
                        $("#eur_value").css('color', '#a9d274');
                    }
                    else if (doviz.EURO.icon == -1) {
                        $("#eur-icon").text("▼").css('color', '#d50202');
                        $("#eur_value").css('color', '#d50202');
                    }
                    else {
                        $("#eur-icon").text(" ").css('color', 'white');
                        $("#eur_value").css('color', 'white');
                        $('#eur-difference').css('margin', '30px 0px 0px -24px');
                    }

                    //GOLD-upDOWN
                    if (doviz.ALTIN.icon == 1) {
                        $("#gold-icon").text("▲").css('color', '#a9d274');
                        $("#gold_value").css('color', '#a9d274');
                    }
                    else if (doviz.ALTIN.icon == -1) {
                        $("#gold-icon").text("▼").css('color', '#d50202');
                        $("#gold_value").css('color', '#d50202');
                    }
                    else {
                        $("#gold-icon").text(" ").css('color', 'white');
                        $("#gold_value").css('color', 'white');
                        $('#gold-difference').css('margin', '30px 0px 0px -24px');
                    }

                });
     }

    // FOOTER OTHER CURRENCY TICKER
    function updateOtherCurencies() {
        var dataDoviz = "../data/otherCurrencies.json";
       
            $.getJSON(dataDoviz, function (gelen) { })
                .done(function (gelen) {
                    var content = '';
                    var i = 1;
                    $.each(gelen, function (key, val) {
                        content += ("<li data-update='item" + i + "'>" + val.symbol + " <span class='coin-value'>" + val.value + "</span></li>");
                        i++;
                    });
                    $("#webticker-dark-icons").html(content);
                    $("#webticker-dark-icons li").first().remove();

                    if ($('#webticker-dark-icons').length) {
                        $("#webticker-dark-icons").webTicker({
                            height: '86px',
                            duplicate: true,
                            startEmpty: false,
                            rssfrequency: 5
                        });
                    }
                });
     }

    // NEWS TICKER
    function updateNews() {
        var dataNews = "../data/news.json";
             $.getJSON(dataNews, function (gelen) { })
                .done(function (gelen) {
                    var content = '';
                    $.each(gelen, function (key, val) {
                        content += ("<li>" + val.newsTitle + "</li>");
                    });
                    $("#nt-example1").html(content);
                    $("#nt-example1 li").first().remove();
                });
     }


})(jQuery);