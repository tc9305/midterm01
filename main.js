window.onload = function(){
    $(function(){
        const foods = {
            'toyz': 'toyz.jpg',
            '館長': '館長.jpg',
            'stanley': '史丹利.jpg'
        };
          
        $("input").on("click",function(){
            var numberOfListItem = $("li").length;
            var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
            var selectedFood = $("li").eq(randomChildNumber).text();
            $("h1").text(selectedFood);
            $("#food-image").attr('src', foods[selectedFood]);
        });
    });
};

