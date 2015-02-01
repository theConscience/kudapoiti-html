$(function () { 
    
    var clicked = false;
    
    enquire.register('screen and (min-width: 1366px)', {
        deferSetup : true, // отложим выполнение функции setup, до первого совпадения (matched) с media query
        setup : function() {
            console.log('enquire min-width:1366px Setup');
            // подгружаем контент аяксом (только один раз!)
        },
        match : function() {
            console.log('enquire min-width:1366px | WINDOW IS INCREASED!\nMatch\n');
            var img_1st = $('.img-set').find('div:first-of-type');
            var img_width = img_1st.css('width');
            if (clicked) {
                console.log('increase size, moving slides!');
                console.log(clicked);
                var circle = function (n,bool){
                    console.log('Circle func is working...')
                    if (bool == true) {
                        console.log('bool is true');
                        setTimeout(function(){
                            console.log('timeout func is working...');
                            console.log('clicked is ' + clicked);
                            if (clicked) {
                                console.log('stil clicked...\n');
                            } else {
                                console.log('No clicked! ');
                                bool = false;
                                console.log('bool set to false!\n');
                            }
                           circle(250, bool);
                        }, n);
                    } else {
                        console.log('bool is false');
                        console.log('cleaning image widths!');
                        $('.img-set').find('div').css({'width':''});
                        console.log('HERE we are exit from circle function!')
                        return;
                    }
                }
                circle(250, true);
            } else {
                console.log('increase size, not moving blocks!');
                console.log('cleaning image widths!');
                $('.img-set').find('div').css({'width':''});
            }
        },
        unmatch : function() {
            console.log('enquire min-width:1366px | WINDOW IS DECREASED!\nUnmatch\n');
            var img_1st = $('.img-set').find('div:first-of-type');
            var img_width = img_1st.css('width');
            if (clicked) {
                console.log('decrease size, moving slides!');
                console.log(clicked);
                var circle = function (n,bool){
                    console.log('Circle func is working...')
                    if (bool == true) {
                        console.log('bool is true');
                        setTimeout(function(){
                            console.log('timeout func is working...');
                            console.log('clicked is ' + clicked);
                            if (clicked) {
                                console.log('stil clicked...\n');
                            } else {
                                console.log('No clicked! ');
                                bool = false;
                                console.log('bool set to false!\n');
                            }
                           circle(250, bool);
                        }, n);
                    } else {
                        console.log('bool is false');
                        console.log('cleaning image widths!');
                        $('.img-set').find('div').css({'width':''});
                        console.log('HERE we are exit from circle function!')
                        return;
                    }
                }
                circle(250, true);  
            } else {
                console.log('decrease size, not moving blocks!');
                console.log('cleaning image widths!');
                $('.img-set').find('div').css({'width':''});
            }
        }
    });
    
    
    enquire.register('screen and (maxwidth: 1036px)', {
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
    
   
    function changeEntry() {
        var prev_entry = $('.arrow-left');
        var next_entry = $('.arrow-right');
        
        function ajaxLoader(entry) {
            console.log('ajax loader is working with ' + entry.attr('class') + ' !');
        }
        
        /*
        function safeTransition(object, type) {
            console.log('safe transition is working on "' + object.attr('class') + '" with "' + type + '" argument');
            if (type == 'add') {
                object.addClass('transitable'); 
            } else if (type == 'remove') {
               object.removeClass('transitable');  
            }
        }
        */
        
        
        next_entry.click(function(){
            console.log('try to run Next_entry func...');
            if (clicked == false) {
                console.log('Clicked is ' + clicked);
                clicked = true;
                console.log('Setting clicked to ' + clicked);
                
                ajaxLoader($(this));

                var article_title = $('.article-title');

                var image_set = $('.img-set');
                var image_1st = image_set.find($('div:first-of-type'));
                var image_2nd = image_set.find($('div:nth-of-type(2)'));
                var image_center = image_set.find($('.center-img'));
                var image_4th = image_set.find($('div:nth-last-of-type(2)'));
                var image_5th = image_set.find($('div:last-of-type'));

                var image_2nd_url = image_2nd.css('background-image');
                console.log(image_2nd_url);
                image_5th.css({'background-image':image_2nd_url});

                var original_width = image_1st.css('width');

                article_title.animate({
                    opacity:0,
                },1000,function(){
                    article_title.animate({
                        opacity:1,
                    },1000);
                });

                image_center.animate({
                    opacity: 0.2,
                    },2000
                );
                image_4th.animate({
                    opacity: 1,
                    },2000
                );

                image_1st.animate({
                    width:"0"
                },2000, function(){
                    image_set.append(image_1st);
                    image_1st.css({'width':original_width});
                    image_set.find($('.center-img')).removeClass('center-img');
                    image_set.find($('div:nth-of-type(3)')).addClass('center-img');
                    clicked = false;
                    console.log('---- Clicked set back to ' + clicked);
                });
            } else {
                console.log("Can't click multiple times!");
            }
        });
        
       
        prev_entry.click(function(){
            console.log('try to run Prev_entry func...');
            if (clicked == false) {
                console.log('Clicked is ' + clicked);
                clicked = true;
                console.log('Setting clicked to ' + clicked);
                
                ajaxLoader($(this));

                var article_title = $('.article-title');

                var image_set = $('.img-set');
                var image_1st = image_set.find($('div:first-of-type'));
                var image_2nd = image_set.find($('div:nth-of-type(2)'));
                var image_center = image_set.find($('.center-img'));
                var image_4th = image_set.find($('div:nth-last-of-type(2)'));
                var image_5th = image_set.find($('div:last-of-type'));

                var image_4th_url = image_4th.css('background-image');
                console.log(image_4th_url);
                image_1st.css({'background-image':image_4th_url});

                var original_width= image_5th.css('width');


                article_title.animate({
                    opacity:0,
                },1000,function(){
                    article_title.animate({
                        opacity:1,
                    },1000);
                });

                image_center.animate({
                    opacity: 0.2,
                    },2000
                );
                image_2nd.animate({
                    opacity: 1,
                    },2000
                );

                image_5th.css({'width':'0'});
                image_set.prepend(image_5th);

                image_set.find($('div:first-of-type')).animate({
                    width:original_width,
                },2000, function(){
                    image_set.find($('.center-img')).removeClass('center-img');
                    image_set.find($('div:nth-of-type(3)')).addClass('center-img');
                    clicked = false;
                    console.log('---- Clicked set back to ' + clicked);
                });
            } else {
                console.log("Can't click multiple times!");
            }
        });
    }
    changeEntry();
});