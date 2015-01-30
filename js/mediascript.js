enquire.register('screen and (min-width: 45em)', {
    deferSetup : true, // отложим выполнение функции setup, до первого совпадения (matched) с media query
    setup : function() {
        // подгружаем контент аяксом (только один раз!)
    },
    match : function() {
        // показываем сайдбар
    },
    unmatch : function() {
        // прячем сайдбар
    }
});