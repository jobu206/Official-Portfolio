$(document).ready(function(){
    $('#crystalCard').mouseenter(function () {
        $('#crystalGame').show()
    }).mouseleave(function () {
        $('#crystalGame').hide();
    });

    $('#baseballCard').mouseenter(function () {
        $('#baseballTrivia').show()
    }).mouseleave(function () {
        $('#baseballTrivia').hide();
    });

    $('#giphyCard').mouseenter(function () {
        $('#gifTastic').show()
    }).mouseleave(function () {
        $('#gifTastic').hide();
    });
    
    $('#trainCard').mouseenter(function () {
        $('#tTime').show()
    }).mouseleave(function () {
        $('#tTime').hide();
    });
    
    $('#recipeCard').mouseenter(function () {
        $('#rBuddy').show()
    }).mouseleave(function () {
        $('#rBuddy').hide();
    });

    $('#friendCard').mouseenter(function () {
        $('#fFinder').show()
    }).mouseleave(function () {
        $('#fFinder').hide();
    });
});