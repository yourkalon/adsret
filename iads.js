(function () {

const box = document.getElementById("imoZone");
if (!box) return;

if (!document.getElementById("imoLiteStyle")) {

const css = document.createElement("style");
css.id = "imoLiteStyle";

css.textContent = `
.skyWrap{
width:350px;
height:320px;
position:relative;
overflow:hidden;
border-radius:12px;
font-family:Arial,sans-serif;
box-shadow:0 4px 16px rgba(0,0,0,.15);
}

.skyWrap img{
width:100%;
height:100%;
object-fit:cover;
display:block;
}

.skyShade{
position:absolute;
inset:0;
background:linear-gradient(
to top,
rgba(0,0,0,.88) 0%,
rgba(0,0,0,.55) 35%,
rgba(0,0,0,.1) 100%
);
}

.skyDock{
position:absolute;
left:0;
right:0;
bottom:0;
padding:16px;
}

.skyName{
color:#fff;
font-size:24px;
font-weight:800;
margin-bottom:6px;
}

.skyText{
color:#f2f2f2;
font-size:13px;
line-height:1.4;
margin-bottom:12px;
}

.skyGo{
display:flex;
align-items:center;
justify-content:center;
gap:8px;
width:100%;
padding:12px;
border-radius:10px;
background:#0084ff;
color:#fff;
font-size:15px;
font-weight:700;
text-decoration:none;
box-sizing:border-box;
transition:.2s;
}

.skyGo:hover{
transform:scale(1.02);
}

.skyGo svg{
width:18px;
height:18px;
fill:#fff;
}

.skyMark{
position:absolute;
top:10px;
right:10px;
background:rgba(255,255,255,.92);
padding:4px 8px;
border-radius:20px;
font-size:11px;
font-weight:700;
color:#444;
}
`;

document.head.appendChild(css);
}

box.innerHTML = `
<div class="skyWrap">

<img src="https://imagecdn.live/images/webp/c6feca98-7710-400c-bae0-3744503d3f7d.webp" alt="">

<div class="skyShade"></div>

<div class="skyMark">Sponsored</div>

<div class="skyDock">

<div class="skyName">
হাই, আমি নীলা
</div>

<div class="skyText">
IMO-তে সরাসরি কথা বলতে নিচের বাটনে ক্লিক করুন
</div>

<a href="https://t.co/p5TIkcrbmB" class="skyGo">

<svg viewBox="0 0 24 24">
<path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24c1.12.37 2.33.56 3.59.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.26.19 2.47.56 3.59a1 1 0 0 1-.24 1l-2.2 2.2z"/>
</svg>

ইমুতে কল করুন

</a>

</div>

</div>
`;

})();
