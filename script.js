


$(document).ready(function(){
    
    $("#catalog_button").click(function(){
        $("#catalog_content_show").show('slow');
    });

    $("#service_button").click(function(){
        $("#service_content_show").show('slow');
    });

    $('#close_catalog_content').click(function(){
        $("#catalog_content_show").hide('slow');
    });
    
    $('#close_service_content').click(function(){
        $("#service_content_show").hide('slow');
    });
    
});