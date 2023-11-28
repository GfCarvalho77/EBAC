$(document).ready(function(){
   $('h2').css({'font-family': 'Arial, Sans-serif', 'padding': '150', 'align-items': 'center', 'display': 'flex', 'justify-content': 'center', 'font-weight':'bold','margin-top':'150px', 'margin-bottom': '10px', 'padding': '15px'});

   $('body').css({'display':'flex', 'align-itens': 'center', 'justify-content': 'center','height': '100vh', 'margin': '0'})
   
   $('#envio').on('click',function(){
        var tarefa = $('#item').val();
        if(tarefa.trim()!==''){
            $('#listaTarefas').append('<li>' + tarefa + '</li>');
            $('#item').val('');
        };
    $('#listaTarefas').on('click','li',function(){
        $(this).toggleClass('tarefa-concluída');
    });

    
   });



});
