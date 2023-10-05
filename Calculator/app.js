const btn=document.querySelectorAll('button');
const screen=document.getElementById('screen');

for(let button of btn)
{
    button.addEventListener('click',(e)=>{
        const btnText=e.target.innerText;

        if(btnText==='C')
        {
            screen.value=" ";
        }
        else if(btnText==='X')
        {
            screen.value+='*';
        }
        else if(btnText==='=')
        {
            try
            {
                screen.value=eval(screen.value);
            }
            catch(e)
            {
                screen.value='Invalid Operation';
            }
            
        }
        else{
        screen.value+=btnText;
        }

    })
}