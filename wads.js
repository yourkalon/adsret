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
.wa-native-ad{
width:350px;
height:250px;
background:#fff;
border:1px solid #eaeaea;
box-shadow:0 4px 18px rgba(0,0,0,.08);
overflow:hidden;
position:relative;
font-family:Arial,sans-serif;
display:flex;
}

.hero{
width:42%;
height:100%;
overflow:hidden;
position:relative;
}

.hero img{
width:100%;
height:100%;
object-fit:cover;
}

.hero::after{
content:"";
position:absolute;
inset:0;
background:linear-gradient(
90deg,
transparent 55%,
rgba(255,255,255,.2) 75%,
rgba(255,255,255,.95)
);
}

.content{
width:58%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
padding:12px;
box-sizing:border-box;
}

.title{
font-size:20px;
font-weight:800;
line-height:1.2;
color:#111;
margin-bottom:6px;
}

.title span{
color:#20b356;
}

.desc{
font-size:12.5px;
color:#555;
line-height:1.4;
margin-bottom:8px;
}

.arrow{
font-size:26px;
color:#20b356;
animation:bounce .9s infinite;
margin-bottom:6px;
}

@keyframes bounce{
0%,100%{transform:translateY(0);}
50%{transform:translateY(6px);}
}

.buttons{
width:100%;
display:flex;
flex-direction:column;
gap:8px;
}

.btn{
display:flex;
align-items:center;
justify-content:center;
gap:6px;
text-decoration:none;
padding:9px 10px;
border-radius:8px;
font-size:12.5px;
font-weight:700;
color:#fff;
transition:0.2s;
width:100%;
box-sizing:border-box;
}

.btn:hover{
transform:scale(1.03);
}

.call{
background:linear-gradient(90deg,#0d8a4b,#18b95f);
}

.message{
background:linear-gradient(90deg,#22c45e,#34d96f);
}

.ad-tools{
position:absolute;
top:6px;
right:8px;
display:flex;
gap:8px;
font-size:12px;
color:#1ea7e1;
z-index:10;
}
`;

document.head.appendChild(style);

// HTML inject
document.getElementById("myad").innerHTML = `
<div class="wa-native-ad">

<div class="ad-tools">
<i class="fa-solid fa-circle-info"></i>
<i class="fa-solid fa-xmark"></i>
</div>

<div class="hero">
<img src="https://i.postimg.cc/2S8ZGbS2/Dtoqk-Pc-Vs-AA25Tl-(1).jpg">
</div>

<div class="content">

<div class="title">
হাই,<br>
<span>আমি আয়শা।</span>
</div>

<div class="desc">
নিচের বাটনে ক্লিক করে WhatsApp-এ যোগাযোগ করুন
</div>

<div class="arrow">↓</div>

<div class="buttons">

<a href="https://t.co/p5TIkcrbmB" class="btn call">
<i class="fa-solid fa-phone"></i>
WhatsApp Call
</a>

<a href="https://t.co/p5TIkcrbmB" class="btn message">
<i class="fa-solid fa-message"></i>
WhatsApp Chat
</a>

</div>

</div>

</div>
`;

})();
