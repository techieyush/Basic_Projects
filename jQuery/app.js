$('#inp').keypress(function(e)
{
    if(e.which===13)
    {
    const todoText=$('#inp').val();
    $('#ulist').append(`<li><span><i class="fa-solid fa-trash-can"></i> </span>${todoText}</li>`);
    $('#inp').val(" ");
    }
    
})


$('ul').on('click','li',function()
{
    $(this).toggleClass('completed');
});

$('#ulist').on('click','span',function(e)
{
    $(this).parent().fadeOut(700,function()
    {
        $(this).remove();
    })
    e.stopPropagation();
    
})
//This will not work on dynamically created span


$('#plus').click(function()
{
    $('#inp').fadeToggle();
})