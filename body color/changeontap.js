const body=document.querySelector('body');
const boxs=document.querySelectorAll('.box');

boxs.forEach(function(box){
    box.addEventListener('click',function(e)
    {
        if(e.target.id=="grey")
        {
            body.style.background='grey';
        }
        if(e.target.id=="purple")
        {
            body.style.background='purple';
        }
        if(e.target.id=="blue")
        {
            body.style.background='blue';
        }
        if(e.target.id=="red")
        {
            body.style.background='red';
        }
    });
});
