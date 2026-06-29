(function () {

if (!document.getElementById("myad")) return;

// Font Awesome
const fa = document.createElement("link");
fa.rel = "stylesheet";
fa.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
document.head.appendChild(fa);

// CSS
const style = document.createElement("style");
style.textContent = `
.imo-ad{
width:350px;
height:250px;
background:linear-gradient(135deg,#0d6efd,#4da3ff);
border-radius:10px;
overflow:hidden;
position:relative;
font-family:Arial,sans-serif;
box-shadow:0 8px 20px rgba(0,0,0,.15);
display:flex;
}

.imo-left{
width:40%;
background:#fff;
display:flex;
align-items:center;
justify-content:center;
position:relative;
}

.imo-left img{
width:100%;
height:100%;
object-fit:cover;
}

.imo-right{
width:60%;
padding:12px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
color:#fff;
}

.imo-title{
font-size:19px;
font-weight:800;
line-height:1.2;
margin-bottom:6px;
}

.imo-title span{
color:#ffe600;
}

.imo-desc{
font-size:12.5px;
opacity:0.95;
margin-bottom:10px;
}

.imo-chat{
width:100%;
display:flex;
flex-direction:column;
gap:8px;
}

.imo-btn{
display:flex;
align-items:center;
justify-content:center;
gap:6px;
text-decoration:none;
padding:9px;
border-radius:20px;
font-size:12.5px;
font-weight:700;
color:#0d6efd;
background:#fff;
transition:0.2s;
}

.imo-btn:hover{
transform:scale(1.05);
}

.imo-icon{
position:absolute;
top:8px;
right:10px;
color:#fff;
font-size:12px;
opacity:0.9;
}
`;

document.head.appendChild(style);

// HTML
document.getElementById("myad").innerHTML = `
<div class="imo-ad">

<div class="imo-icon">
<i class="fa-solid fa-circle-info"></i>
</div>

<div class="imo-left">
<img src="https://i.postimg.cc/50ffVvQm/12.jpg">
</div>

<div class="imo-right">

<div class="imo-title">
Hi 👋<br>
<span>আমি মালিহা</span>
</div>

<div class="imo-desc">
IMO তে আমাকে মেসেজ করুন
</div>

<div class="imo-chat">

<a href="https://t.co/p5TIkcrbmB" class="imo-btn">
<i class="fa-brands fa-whatsapp"></i>
IMO Chat
</a>

<a href="https://t.co/p5TIkcrbmB" class="imo-btn">
<i class="fa-solid fa-video"></i>
IMO Call
</a>

</div>

</div>

</div>
`;

})();
