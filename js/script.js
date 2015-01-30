$(function () { 
    function changeEntry() {
        var prev_entry = $('.arrow-left');
        var next_entry = $('.arrow-right');
        
        function ajaxLoader(entry) {
            console.log('ajax loader is working with ' + entry.attr('class') + ' !');
        }
        
        function safeTransition(object, type) {
            console.log('safe transition is working on "' + object.attr('class') + '" with "' + type + '" argument');
            if (type == 'add') {
                object.addClass('transitable'); 
            } else if (type == 'remove') {
               object.removeClass('transitable');  
            }
        }
        
        
        next_entry.click(function(){
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
            });          
        });
        
       
        prev_entry.click(function(){
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
            });
            
        });
    }
    changeEntry();
});