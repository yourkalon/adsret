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
border:1px solid #ececec;
box-shadow:0 4px 18px rgba(0,0,0,.08);
overflow:hidden;
position:relative;
font-family:Arial,sans-serif;
}

.ad-tools{
position:absolute;
top:8px;
right:10px;
z-index:20;
display:flex;
gap:10px;
font-size:12px;
color:#1ea7e1;
}

.hero{
position:absolute;
left:0;
top:0;
width:42%;
height:100%;
overflow:hidden;
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
rgba(255,255,255,.2) 70%,
rgba(255,255,255,.95) 100%
);
}

.content{
position:absolute;
right:0;
top:0;
width:58%;
height:100%;
padding:18px 10px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
}

.title{
font-size:21px;
font-weight:800;
line-height:1.1;
margin-bottom:8px;
}

.title span{
color:#20b356;
}

.desc{
font-size:12px;
color:#555;
margin-bottom:8px;
}

.arrow{
font-size:28px;
color:#20b356;
animation:bounce .9s infinite;
}

@keyframes bounce{
0%,100%{transform:translateY(0);}
50%{transform:translateY(7px);}
}

.buttons{
width:100%;
display:flex;
flex-direction:column;
gap:7px;
margin-top:10px;
}

.btn{
display:flex;
align-items:center;
justify-content:center;
gap:7px;
text-decoration:none;
padding:9px;
border-radius:10px;
font-size:13px;
font-weight:700;
color:#fff;
}

.call{
background:#0d8a4b;
}

.message{
background:#22c45e;
}
`;

document.head.appendChild(style);

// HTML
document.getElementById("myad").innerHTML = `
<div class="wa-native-ad">

<div class="ad-tools">
<i class="fa-solid fa-circle-info"></i>
<i class="fa-solid fa-xmark"></i>
</div>

<div class="hero">
<img src="https://pbs.twimg.com/media/DtoqkPcVsAA25Tl?format=jpg&name=medium">
</div>

<div class="content">

<div class="title">
হাই,<br>
<span>আমি আয়শা।</span>
</div>

<div class="desc">
আমার হোয়াটসঅ্যাপ নম্বর নিচে দেওয়া আছে
</div>

<div class="arrow">↓</div>

<div class="buttons">

<a href="https://wa.me/8801234567890" class="btn call">
<i class="fa-solid fa-phone"></i>
WhatsApp Call
</a>

<a href="https://wa.me/8801234567890" class="btn message">
<i class="fa-solid fa-message"></i>
WhatsApp Chat
</a>

</div>

</div>

</div>
`;

})();
