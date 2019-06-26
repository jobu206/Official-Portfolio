$(document).ready(function(){
    $('#trainCard').mouseenter(function () {
        $('.trainOverlay').show()
        $('.trainLinks').show()
    }).mouseleave(function () {
        $('.trainOverlay').hide();
        $('.trainLinks').hide();
    });

    $('#crystalCard').mouseenter(function () {
        $('.crystalOverlay').show()
        $('.crystalLinks').show()
    }).mouseleave(function () {
        $('.crystalOverlay').hide();
        $('.crystalLinks').hide();
    });

    $('#friendCard').mouseenter(function () {
        $('.friendOverlay').show()
        $('.friendLinks').show()
    }).mouseleave(function () {
        $('.friendOverlay').hide();
        $('.friendLinks').hide();
    });
    
    $('#recipeCard').mouseenter(function () {
        $('.recipeOverlay').show()
        $('.recipeLinks').show()
    }).mouseleave(function () {
        $('.recipeOverlay').hide();
        $('.recipeLinks').hide();
    });
    
    $('#burgerCard').mouseenter(function () {
        $('.burgerOverlay').show()
        $('.burgerLinks').show()
    }).mouseleave(function () {
        $('.burgerOverlay').hide();
        $('.burgerLinks').hide();
    });

    $('#parkCard').mouseenter(function () {
        $('.parkSmartOverlay').show()
        $('.parkSmartLinks').show()
    }).mouseleave(function () {
        $('.parkSmartOverlay').hide();
        $('.parkSmartLinks').hide();
    });
});