(function () {

const box = document.getElementById("imoZone");
if (!box) return;

if (!document.getElementById("imoLiteStyle")) {

const css = document.createElement("style");
css.id = "imoLiteStyle";

css.textContent = `
.skyWrap{
width:350px;
height:250px;
position:relative;
overflow:hidden;
border-radius:10px;
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
rgba(0,0,0,.85) 0%,
rgba(0,0,0,.55) 35%,
rgba(0,0,0,.15) 100%
);
}

.skyDock{
position:absolute;
left:0;
right:0;
bottom:0;
padding:14px;
box-sizing:border-box;
}

.skyName{
color:#fff;
font-size:22px;
font-weight:800;
line-height:1.1;
margin-bottom:4px;
}

.skyText{
color:#f1f1f1;
font-size:12px;
margin-bottom:10px;
}

.skyGo{
display:block;
width:100%;
text-align:center;
text-decoration:none;
background:#0084ff;
color:#fff;
font-size:15px;
font-weight:700;
padding:11px 12px;
border-radius:8px;
box-sizing:border-box;
transition:.2s;
}

.skyGo:hover{
transform:scale(1.02);
}

.skyMark{
position:absolute;
top:8px;
right:8px;
background:rgba(255,255,255,.9);
padding:3px 7px;
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

<img src="https://i.postimg.cc/8cmJGWHb/sdfd-(1)-optimized.webp" alt="">

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
💬 IMO Chat Now
</a>

</div>

</div>
`;

})();
