(function ($) {

    $(document).ready(function () {
        updateWeather();
    });

    setInterval(function () {
        updateWeather();
    },
        5 * 60 * 1000);

    function weather() {
        setTimeout(function () {
            clocks();
        },
            2 * 1000);
    }

    function clocks() {
        var dataWeather = "../data/weather.json";
        $.getJSON(dataWeather, function (gelen) {
            var weather = gelen;
            $('#clock_istanbul').jClocksGMT({
                title: 'İstanbul, TR',
                offset: '+3',
                isDay: weather.ISTANBUL.isDay
            });

            $('#clock_london').jClocksGMT({
                title: 'London, UK',
                offset: '+1',
                isDay: weather.LONDON.isDay
            });
            $('#clock_hongkong').jClocksGMT({
                title: 'hangkong, HK',
                offset: '+8',
                isDay: weather.HONGKONG.isDay
            });
            $('#clock_newyork').jClocksGMT({
                title: 'newyork, USA',
                offset: '-4',
                isDay: weather.NEWYORK.isDay
            });
            $('#clock_shanghai').jClocksGMT({
                title: 'SHANGAI, China',
                offset: '+8',
                isDay: weather.SHANGHAI.isDay
            });
            $('#clock_sanFrancisco').jClocksGMT({
                title: 'SanFrancisco, USA',
                offset: '-7',
                isDay: weather.SANFRANCISCO.isDay
            });
        });
    }

    var codes = {
        0: "900", //tornado
        1: "weather-icon-windy-rain", //tropical storm
        2: "weather-icon-windy-rain2", //hurricane
        3: "weather-icon-clouds-flash", //severe thunderstorms
        4: "weather-icon-cloud-flash-alt", //thunderstorms
        5: "weather-icon-snow", //mixed rain and snow
        6: "weather-icon-rain", //mixed rain and sleet
        7: "weather-icon-rain", //mixed snow and sleet
        8: "weather-icon-drizzle", //freezing drizzle
        9: "weather-icon-drizzle", //drizzle
        10: "weather-icon-rain", //freezing rain
        11: "weather-icon-rain", //showers
        12: "weather-icon-rain", //showers
        13: "weather-icon-snow-heavy", //snow flurries
        14: "weather-icon-snow", //light snow showers
        15: "weather-icon-snow", //blowing snow
        16: "weather-icon-snow-heavy", //snow
        17: "weather-icon-hail", //hail
        18: "weather-icon-rain", //sleet
        19: "weather-icon-mist", //dust
        20: "weather-icon-fog-sun", //foggy
        21: "weather-icon-fog-cloud", //haze
        22: "weather-icon-fog", //smoky
        23: "weather-icon-wind", //blustery
        24: "weather-icon-windy", //windy
        25: "weather-icon-snowflake", //cold
        26: "weather-icon-clouds", //cloudy
        27: "weather-icon-clouds", //mostly cloudy (night)
        28: "weather-icon-clouds", //mostly cloudy (day)
        29: "weather-icon-cloud-moon", //partly cloudy (night)
        30: "weather-icon-cloud-sun", //partly cloudy (day)
        31: "weather-icon-moon", //clear (night)
        32: "weather-icon-sun", //sunny
        33: "weather-icon-moon", //fair (night)
        34: "weather-icon-sun", //fair (day)
        35: "weather-icon-hail", //mixed rain and hail
        36: "weather-icon-temperature", //hot
        37: "weather-icon-windy-rain", //isolated thunderstorms
        38: "weather-icon-windy-rain", //scattered thunderstorms
        39: "weather-icon-windy-rain", //scattered thunderstorms
        40: "weather-icon-rain", //scattered showers
        41: "weather-icon-snow-heavy", //heavy snow
        42: "weather-icon-snow-alt", //scattered snow showers
        43: "weather-icon-snow-heavy", //heavy snow
        44: "weather-icon-cloud", //partly cloudy
        45: "weather-icon-clouds-flash", //thundershowers
        46: "weather-icon-snow-heavy", //snow showers
        47: "weather-icon-cloud-flash-alt", //isolated thundershowers
        3200: "weather-icon-na", //not available... alright... lets make that sunny.
    }

    function updateWeather() {
        var dataWeather = "../data/weather.json";
        $.getJSON(dataWeather, function (gelen) { })
            .done(function (gelen) {
                var weather = gelen;
                $("#istanbulTemp").html(weather.ISTANBUL.temperature + " <sup>°C</sup>");
                $("#istanbulIcon").addClass(codes[weather.ISTANBUL.conditionCode
                ]);
                $("#londonTemp").html(weather.LONDON.temperature + " <sup>°C</sup>");
                $("#londonIcon").addClass(codes[weather.LONDON.conditionCode
                ]);
                $("#hongkongTemp").html(weather.HONGKONG.temperature + " <sup>°C</sup>");
                $("#hongkongIcon").addClass(codes[weather.HONGKONG.conditionCode
                ]);
                $("#newyorkTemp").html(weather.NEWYORK.temperature + " <sup>°C</sup>");
                $("#newyorkIcon").addClass(codes[weather.NEWYORK.conditionCode
                ]);
                $("#shanghaiTemp").html(weather.SHANGHAI.temperature + " <sup>°C</sup>");
                $("#shanghaiIcon").addClass(codes[weather.SHANGHAI.conditionCode
                ]);
                $("#sanfranciscoTemp").html(weather.SANFRANCISCO.temperature + " <sup>°C</sup>");
                $("#sanfranciscoIcon").addClass(codes[weather.SANFRANCISCO.conditionCode
                ]);

                setTimeout(function () {
                    clocks();
                },
                    2 * 1000);
            });
        jQuery.ajaxSetup({
            cache: false
        });
    }
})(jQuery);