
const form =document.querySelector('form');

const list=document.getElementById('list');

function getMovies(searchText)
{
//Remove all movies first

while(list.firstChild)

{
    list.removeChild(list.firstChild);
}



    const url=`https://api.tvmaze.com/search/shows?q=${searchText}`;

    axios.get(url)
    .then((res)=>{

        for(item of res.data)
        {
        if(item.show.image)
        {
            const image=document.createElement('img');
            image.src=item.show.image.medium;

            image.style.margin='10px';

            list.append(image);
        }
    }

        
    })
    .catch((err)=>{
        console.log(err);
    })
}




form.addEventListener('submit',(e)=>{
    e.preventDefault();
    // console.dir();
    // console.log('form is Submitted');

    const inpText=form.elements[0].value;
    getMovies(inpText);
    form.elements[0].value=" ";

})