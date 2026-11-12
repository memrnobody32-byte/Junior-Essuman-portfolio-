const t=document.querySelector('.toggle'),
n=document.querySelector('nav');
if(t&&n)t.addEventListener('click',()=> {
    let o=n.classList.toggle('open');t.setAttribute('aria-expanded',String(o));t.textContent=o?'×':'☰'
}
);
document.querySelectorAll('.year').forEach(x=>x.textContent=new Date().getFullYear());
const f=document.getElementById('contactForm');
if(f)f.addEventListener('submit',e=> {
    e.preventDefault();let d=new FormData(f),s=encodeURIComponent('Portfolio enquiry from '+d.get('sender')),b=encodeURIComponent('Name: '+d.get('sender')+'\nEmail: '+d.get('reply')+'\n\n'+d.get('message'));document.getElementById('formNote').textContent='Opening your email application. If it does not open, email essumanjunior416@gmail.com directly.';location.href='mailto:essumanjunior416@gmail.com?subject='+s+'&body='+b
}
);
